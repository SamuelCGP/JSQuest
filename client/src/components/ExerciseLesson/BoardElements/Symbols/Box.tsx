import styled from "styled-components";
import { BoardElementProps } from "../BoardElementProps";

export const BoxSymbol = styled.div`
	position: absolute;
	background-color: #9e762c;
	width: calc(100% / ${(props: BoardElementProps) => props.columnNumber});
	height: calc(100% / ${(props: BoardElementProps) => props.rowNumber});
	left: ${(props: BoardElementProps) => props.positionX}%;
	top: ${(props: BoardElementProps) => props.positionY}%;
	transition: 0.5s;
	display: flex;
	align-items: center;
	justify-content: center;
	&::before {
		content: "";
		background-color: #6d4518;
		display: flex;
		width: calc(100% - (2 * 15%));
		height: calc(100% - (2 * 15%));
	}
	&::after {
		content: "";
		background-color: #9e762c;
		display: flex;
		width: calc(140% - (2 * 10%));
		height: calc(40% - (2 * 10%));
		transform: rotate(45deg);
		position: absolute;
	}
`;
