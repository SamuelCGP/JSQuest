import StyleSheet from "../../utils/StyleSheet";
import ColorPalette from "../../utils/ColorPalette";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../components/Global";

export const CenterContainer = styled(Container)`
	text-align: center;
	user-select: none;
`;

export const MessageTag = styled.p`
	font-size: 2em;
	color: ${ColorPalette.white};
	font-family: consolas;
	margin: 20px;
`;

export const LinkBack = styled(Link)`
	font-size: 1em;
	color: ${ColorPalette.orange};
	font-family: consolas;
	margin: 20px;
`;
