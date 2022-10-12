import styled from "styled-components";
import ColorPalette from "../../../utils/ColorPalette";

export const ButtomContainer = styled.div`
	position: absolute;
	bottom: 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr;
	width: 100%;
	height: fit-content;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
`;

export const CodeSubmitButton = styled.button`
	display: flex;
	grid-column: 3;
	grid-row: 1;
	width: 90%;
	align-self: center;
	justify-self: center;
	height: 2.5rem;
	align-items: center;
	justify-content: center;
	font-family: calibri;
	font-size: 1.5rem;
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
	grid-column: 2;
	grid-row: 1;
	color: white;
	&:hover {
		background-color: ${ColorPalette.primary + "8f"};
	}
`;
