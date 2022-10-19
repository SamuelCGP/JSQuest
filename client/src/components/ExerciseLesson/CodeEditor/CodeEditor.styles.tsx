import styled from "styled-components";
import ColorPalette from "../../../utils/ColorPalette";
import CodeMirror from "@uiw/react-codemirror";

export const ButtomContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 1fr;
	width: 100%;
	height: 40;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	background-color: #272822;
`;

export const CodeSubmitButton = styled.button`
	display: flex;
	grid-column: 5;
	grid-row: 1;
	width: 90%;
	align-self: center;
	justify-self: center;
	height: 2.5rem;
	align-items: center;
	justify-content: center;
	font-family: calibri;
	font-size: 1rem;
	background-color: ${ColorPalette.yellowOrange};
	outline: none;
	border: none;
	border-radius: 20px;
	&:hover {
		background-color: ${ColorPalette.yellowOrange + "8f"};
	}
	@media (min-width: 900px) {
		width: 50%;
	}
`;

export const CodeRefreshButton = styled(CodeSubmitButton)`
	background-color: ${ColorPalette.primary};
	grid-column: 4;
	grid-row: 1;
	color: white;
	&:hover {
		background-color: ${ColorPalette.primary + "8f"};
	}
`;

export const CodeMirrorStyled = styled(CodeMirror)`
	height: calc(100% - 40px);
`;
