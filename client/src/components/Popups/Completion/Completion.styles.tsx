import styled from "styled-components";
import { MdRefresh } from "react-icons/md";
import { RiSpeedFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import ColorPalette from "../../../utils/ColorPalette";

export const ChapterLesson = styled.div`
	font-family: verdana;
	font-size: clamp(1.3rem, 9vw, 2.5rem);
	letter-spacing: 0.2rem;
	line-height: 1.06;
	text-align: center;
	user-select: none;
	background-color: ${ColorPalette.yellowOrange};
	margin-bottom: 0.5rem;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	padding-top: 2rem;
	padding-bottom: 2rem;
	@media (min-width: 900px) {
		padding: 2rem;
	}
`;

export const ActionButton = styled.div`
	background-color: ${ColorPalette.primary};
	border-radius: 100%;
	aspect-ratio: 1/1;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25%;
	&:hover {
		filter: brightness(1.1);
	}
	@media (min-width: 900px) {
		width: 20%;
	}
`;

export const HomeIcon = styled(AiFillHome)`
	color: white;
	width: 70%;
	height: 70%;
`;
export const AgainIcon = styled(MdRefresh)`
	color: white;
	width: 80%;
	height: 80%;
`;
export const NextIcon = styled(RiSpeedFill)`
	color: white;
	width: 70%;
	height: 70%;
`;
