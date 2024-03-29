import styled from "styled-components";
import { BoardElementProps } from "../BoardElementProps";
import { FaRobot } from "react-icons/fa";

export const RobotSymbol = styled(FaRobot)`
	position: absolute;
	color: white;
	//background-color: white;
	width: calc(100% / ${(props: BoardElementProps) => props.columnNumber});
	height: calc(100% / ${(props: BoardElementProps) => props.rowNumber});
	//border-radius: 100%;
	left: ${(props: BoardElementProps) => props.positionX}%;
	top: ${(props: BoardElementProps) => props.positionY}%;
	transition: 0.5s;
`;
