import styled from "styled-components";
import { BoardElementProps } from "../BoardElementProps";
import ColorPalette from "../../../../utils/ColorPalette";

export const DialogContainer = styled.div`
	position: absolute;
	background-color: #2c2631;
	width: calc(100% / ${(props: BoardElementProps) => props.columnNumber});
	height: calc(100% / ${(props: BoardElementProps) => props.rowNumber});
	left: ${(props: BoardElementProps) => props.positionX}%;
	top: ${(props: BoardElementProps) => props.positionY}%;
	transition: 0.5s;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow-y: scroll;
`;

export const DialogArea = styled.div`
	margin-top: 1rem;
	width: 90%;
	height: fit-content;
	font-size: 1.5rem;
	text-align: justify;
	color: #af61ee;
`;
