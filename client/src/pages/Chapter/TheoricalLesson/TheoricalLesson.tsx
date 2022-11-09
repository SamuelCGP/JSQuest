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

interface TheoricalLessonProps {
	lessonData: any;
}

function TheoricalLesson(props: TheoricalLessonProps) {
	const text = props.lessonData.lesson.text.split("\\");

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
