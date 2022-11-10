import { useState } from "react";
import {
	MainContainer,
	CollapseButton,
	LessonTitle,
	LessonText,
	MainPopup,
	LessonTextArea,
} from "./ExerciseInfo.styles";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

export interface ExerciseInfoProps {
	title: string;
	text: string;
}

export function ExerciseInfo(props: ExerciseInfoProps) {
	const [isVisible, setVisible] = useState(true);
	const [hasDisplay, setDisplay] = useState(true);

	function handleCollapse() {
		if (hasDisplay === true) {
			setTimeout(function () {
				setDisplay(!hasDisplay);
			}, 200);
		} else {
			setDisplay(!hasDisplay);
		}
		setTimeout(function () {
			setVisible(!isVisible);
		}, 10);
	}

	const text = props.text.split("\\");

	return (
		<>
			<MainContainer display={+hasDisplay} open={+isVisible}>
				<MainPopup display={+hasDisplay} open={+isVisible}>
					<LessonTitle>{props.title}</LessonTitle>
					<LessonText>
						<LessonTextArea>
							{text.map((p: string) => (
								<ReactMarkdown
									children={p}
									remarkPlugins={[gfm]}
									rehypePlugins={[rehypeRaw, rehypeHighlight]}
								/>
							))}
						</LessonTextArea>
					</LessonText>
				</MainPopup>
			</MainContainer>
			<CollapseButton open={+isVisible} onClick={handleCollapse}>
				{">"}
			</CollapseButton>
		</>
	);
}
