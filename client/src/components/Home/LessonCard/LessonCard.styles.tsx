import styled from "styled-components";
import ColorPalette from "../../../utils/ColorPalette";

export const LessonCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 2px solid lightgray;
	margin: 5px;
	border-radius: 1.1rem;
	cursor: pointer;
	@media (min-width: 900px) {
		flex-direction: row;
		padding-top: 8px;
		transition: 0.1s;
		transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
		&:hover {
			border-bottom: 10px solid lightgray;
			padding-top: 0;
		}
	}
`;

export const LessonIcon = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 7rem;
	height: 7rem;
	margin: 1rem;
	@media (min-width: 900px) {
		width: 7rem;
		height: 7rem;
	}
	& .lessonImg {
		position: absolute;
		width: 70%;
		height: 70%;
	}
`;

export const LessonName = styled.h1`
	color: ${ColorPalette.secondaryDark};
	text-align: center;
	font-size: clamp(1.2rem, 2.5vw, 1.2rem);
	padding: 0.7rem;
	user-select: none;
`;
