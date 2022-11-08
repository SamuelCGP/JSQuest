import { MainContainer, MainCard, ContentCard } from "./TheoricalLessonStyles";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

interface TheoricalLessonProps {
	lessonData: any;
}

function TheoricalLesson(props: TheoricalLessonProps) {
	const text = props.lessonData.lesson.text.split("\\");

	return (
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
				</ContentCard>
			</MainCard>
		</MainContainer>
	);
}

export default TheoricalLesson;
