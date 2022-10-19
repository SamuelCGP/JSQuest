import { useState } from "react";
import {
	MainContainer,
	CollapseButton,
	LessonTitle,
	LessonText,
	MainPopup,
} from "./ExerciseInfo.styles";

export interface ExerciseInfoProps {
	title: string;
	text: string;
}

export function ExerciseInfo(props: ExerciseInfoProps) {
	const [isVisible, setVisible] = useState(true);
	const [hasDisplay, setDisplay] = useState(true);

	function handleCollapse() {
		if (hasDisplay == true) {
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
	return (
		<>
			<MainContainer display={+hasDisplay} open={+isVisible}>
				<MainPopup display={+hasDisplay} open={+isVisible}>
					<LessonTitle open={+isVisible}>{props.title}</LessonTitle>
					<LessonText open={+isVisible}>{props.text}</LessonText>
				</MainPopup>
			</MainContainer>
			<CollapseButton open={+isVisible} onClick={handleCollapse}>
				{">"}
			</CollapseButton>
		</>
	);
}
