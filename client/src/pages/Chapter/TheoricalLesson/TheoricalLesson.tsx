import {
	MainContainer,
	MainCard,
	ContentCard,
	FinishButton,
	Blank,
} from "./TheoricalLessonStyles";
import { Popup } from "../../../components";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { finishGame } from "../../../game/finishGame";
import { listenToSignal, fireSignal } from "../../../game/signals";
import { complete } from "../../../api/lesson/complete";

interface TheoricalLessonProps {
	lessonData: any;
	chapterIndex: string;
	lessonIndex: string;
}

function TheoricalLesson(props: TheoricalLessonProps) {
	const text = props.lessonData.lesson.text.split("\\");

	listenToSignal("reqFinishGame", () => {
		complete(props.chapterIndex, props.lessonIndex)
		fireSignal("completionPopupCall", {});
	});

	return (
		<>
			<Popup type={"completion"} />
			<MainContainer>
				<MainCard>
					<ContentCard>
						{text.map((p: string) => (
							<ReactMarkdown
								children={p}
								remarkPlugins={[gfm]}
								rehypePlugins={[rehypeRaw, rehypeHighlight]}
							/>
						))}
						<FinishButton onClick={finishGame}>
							Concluir
						</FinishButton>
						<Blank />
					</ContentCard>
				</MainCard>
			</MainContainer>
		</>
	);
}

export default TheoricalLesson;
