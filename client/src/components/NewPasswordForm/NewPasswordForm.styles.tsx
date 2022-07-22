import ColorPalette from "../../utils/ColorPalette";
import styled from "styled-components";
import { Form, Field } from "formik";
import { FaUnlockAlt } from "react-icons/fa";

export const LockIcon = styled(FaUnlockAlt)`
	color: ${ColorPalette.orange};
	margin: 1rem;
	align-self: center;
	width: 5rem;
	height: 5rem;
	@media (min-width: 900px) {
		width: 10rem;
		height: 10rem;
	}
`;

export const NewPasswordFormTag = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
`;

export const NewPasswordField = styled(Field)`
	background-color: #cdd6e3;
	border-radius: 3px;
	border: none;
	padding: 1.5em 1em;
	margin: 1em 1em;
	outline: none;
	font-size: 1em;
	font-family: consolas;
`;
