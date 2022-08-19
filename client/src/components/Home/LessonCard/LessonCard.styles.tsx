import styled from "styled-components";
import ColorPalette from "../../../utils/ColorPalette";

export const LessonCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const LessonIcon = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 10rem;
	height: 10rem;
	margin: 1rem;
	@media (min-width: 900px) {
		width: 12rem;
		height: 12rem;
	}
	& .lessonImg{
		position: absolute;
		width: 70%;
		height: 70%;
	}
`;

export const LessonName = styled.h1`
	color: ${ColorPalette.secondaryDark};
	text-align: center;
	font-size: clamp(1.2rem, 2.5vw, 1.2rem);
	padding: .7rem;
`;