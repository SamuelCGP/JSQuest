import styled from "styled-components";
import { BoardElementProps } from "../BoardElementProps";

export const RobotSymbol = styled.div`
	position: absolute;
	background-color: white;
	width: calc(100% / ${(props: BoardElementProps) => props.columnNumber});
	height: calc(100% / ${(props: BoardElementProps) => props.rowNumber});
	border-radius: 100%;
	left: ${(props: BoardElementProps) => props.positionX}%;
	top: ${(props: BoardElementProps) => props.positionY}%;
	transition: 0.5s;
`;
