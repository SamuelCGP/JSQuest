import styled from "styled-components";
import ColorPalette from "../../../utils/ColorPalette";

export const MainContainer = styled.div`
	width: 100vw;
	height: calc(100vh - 3.5rem);
	@media (min-width: 900px) {
		width: calc(100vw - 3.5rem);
		margin-left: 3.5rem;
		height: 100vh;
	}
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const MainCard = styled.div`
	width: 100%;
	height: 100%;
	@media (min-width: 900px) {
		width: 90%;
		height: 90%;
	}
	background-color: #ffffff;
	display: flex;
	justify-content: center;
	overflow-y: auto;
`;

export const ContentCard = styled.div`
	margin-top: 1rem;
	width: 100%;
	height: fit-content;
	font-size: 1.2rem;
	text-align: justify;
	@media (min-width: 900px) {
		width: 70%;
	}
	position: relative;

	h1 {
		text-align: center;
	}
`;

export const FinishButton = styled.button`
	outline: none;
	border: none;
	background-color: ${ColorPalette.primary};
	color: white;
	padding: 0.7rem;
	border-radius: 10px;
	margin-top: 1rem;
	left: 50%;
	position: relative;
	cursor: pointer;
	transform: translate(-50%);
	&:hover {
		filter: brightness(1.1);
	}
`;

export const Blank = styled.div`
	width: 100%;
	height: 1rem;
`;
