import styled from "styled-components";
import ColorPalette from "../../../utils/ColorPalette";
import CodeMirror from "@uiw/react-codemirror";

export const ErrorIndicator = styled.div`
	grid-column: 1 / 4;
	padding: 10px;
	background-color: ${ColorPalette.secondary};
	color: white;
	display: none;
	justify-content: space-between;
	overflow-y: scroll;
`;

export const ErrorXButton = styled.button`
	background: none;
	outline: none;
	border: none;
	color: white;
	cursor: pointer;
	aspect-ratio: 1/1;
	@media (min-width: 900px) {
		font-size: 1rem;
	}
`;

export const ButtomContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 0.5fr);
	grid-template-rows: 0.5fr;
	width: 100%;
	height: 40;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	background-color: #272822;
	gap: 0.5rem;
	@media (min-width: 900px) {
		gap: 1rem;
	}
`;

export const CodeSubmitButton = styled.button`
	display: flex;
	grid-column: 5;
	grid-row: 1;
	width: 100%;
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
	cursor: pointer;
	&:hover {
		background-color: ${ColorPalette.yellowOrange + "8f"};
	}

	&:active {
		background-image: linear-gradient(rgb(0 0 0/40%) 0 0);
	}

	&.loading {
		cursor: not-allowed;
	}

	&.loading:after {
		content: "";
		width: 1rem;
		height: 1rem;
		border: 4px solid transparent;
		border-top-color: #ffffff;
		border-radius: 50%;
		animation: btn-loading-spinner 1s ease infinite;
	}

	@keyframes btn-loading-spinner {
		from {
			transform: rotate(0turn);
		}

		to {
			transform: rotate(1turn);
		}
	}

	&.loading .btn-text {
		display: none;
	}
`;

export const CodeRefreshButton = styled(CodeSubmitButton)`
	background-color: ${ColorPalette.primary};
	grid-column: 4;
	grid-row: 1;
	color: white;
	cursor: pointer;
	&:hover {
		background-color: ${ColorPalette.primary + "8f"};
	}

	&:active {
		background-image: linear-gradient(rgb(0 0 0/40%) 0 0);
	}

	&.loading {
		cursor: not-allowed;
	}

	&.loading:after {
		content: "";
		width: 1rem;
		height: 1rem;
		border: 4px solid transparent;
		border-top-color: #ffffff;
		border-radius: 50%;
		animation: btn-loading-spinner 1s ease infinite;
	}

	@keyframes btn-loading-spinner {
		from {
			transform: rotate(0turn);
		}

		to {
			transform: rotate(1turn);
		}
	}

	&.loading .btn-text {
		display: none;
	}
`;

export const CodeMirrorStyled = styled(CodeMirror)`
	height: calc(100% - 40px);
`;
