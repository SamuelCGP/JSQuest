import { useRef, useEffect, useState } from "react";
import { MainContainer, MainCard, ContentCard } from "./TheoricalLessonStyles";
import ReactMarkdown from "react-markdown";

interface TheoricalLessonProps {
	lessonData: any;
}

function TheoricalLesson(props: TheoricalLessonProps) {
	const [content, setContent] = useState("");

	useEffect(() => {
		setContent(props.lessonData.lesson.text);
	}, []);

	return (
		<MainContainer>
			<MainCard>
				<ContentCard>
					<ReactMarkdown children={content} />
				</ContentCard>
			</MainCard>
		</MainContainer>
	);
}

export default TheoricalLesson;
