import styled from "styled-components";
import { BoardElementProps } from "../BoardElementProps";

export const Robot = styled.div`
	background-color: red;
	width: 100%;
	height: 100%;
	border-radius: 100%;
	grid-column: ${(props: BoardElementProps) => props.positionX};
	grid-row: ${(props: BoardElementProps) => props.positionY};
`;
