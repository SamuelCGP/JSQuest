import styled from "styled-components";
import { BoardElementProps } from "../BoardElementProps";

export const MetalBoxSymbol = styled.div`
	position: absolute;
	background-color: #9390a5;
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
		background-color: #54566e;
		display: flex;
		width: calc(100% - (2 * 15%));
		height: calc(100% - (2 * 15%));
	}
	&::after {
		content: "";
		background-color: #9390a5;
		display: flex;
		width: calc(140% - (2 * 10%));
		height: calc(40% - (2 * 10%));
		transform: rotate(45deg);
		position: absolute;
	}
`;
