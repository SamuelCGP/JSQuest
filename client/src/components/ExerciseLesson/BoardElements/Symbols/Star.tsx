import styled from "styled-components";
import { BoardElementProps } from "../BoardElementProps";
import { AiFillStar } from "react-icons/ai";
import ColorPalette from "../../../../utils/ColorPalette";

export const StarSymbol = styled(AiFillStar)`
	position: absolute;
	color: ${ColorPalette.yellowOrange};
	border-radius: 100%;
	width: calc(100% / ${(props: BoardElementProps) => props.columnNumber});
	height: calc(100% / ${(props: BoardElementProps) => props.rowNumber});
	left: ${(props: BoardElementProps) => props.positionX}%;
	top: ${(props: BoardElementProps) => props.positionY}%;
	transition: 0.5s;
	display: flex;
	align-items: center;
	justify-content: center;
`;
