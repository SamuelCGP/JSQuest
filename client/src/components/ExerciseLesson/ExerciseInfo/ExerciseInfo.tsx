import { useState } from "react";
import {
	MainContainer,
	CollapseButton,
	LessonTitle,
} from "./ExerciseInfo.styles";

export function ExerciseInfo() {
	const [isVisible, setVisible] = useState(true);
	const [hasDisplay, setDisplay] = useState(true);

	function handleCollapse() {
		if (hasDisplay == true) {
			setTimeout(function () {
				setDisplay(!hasDisplay);
			}, 700);
		} else {
			setDisplay(!hasDisplay);
		}
		setTimeout(function () {
			setVisible(!isVisible);
		}, 10);
	}
	return (
		<>
			{/* prettier-ignore */}
			<CollapseButton open={isVisible} onClick={handleCollapse} />
			<MainContainer display={hasDisplay} open={isVisible}>
				<LessonTitle open={isVisible}>Título do Exercício</LessonTitle>
			</MainContainer>
		</>
	);
}
