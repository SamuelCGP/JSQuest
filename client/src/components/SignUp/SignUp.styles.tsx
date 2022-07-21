import ColorPalette from "../../utils/ColorPalette";
import styled from "styled-components";
import { Form, Field } from "formik";

export const SignUpForm = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
`;

export const SignUpField = styled(Field)`
	background-color: #cdd6e3;
	border-radius: 3px;
	border: none;
	padding: 1em 1em;
	margin: 0.5em 1em;
	outline: none;
	font-family: consolas;
`;

export const SignInCall = styled.h3`
	font-family: consolas;
	user-select: none;
	color: ${(props: {clickable?: boolean}) => props.clickable ? ColorPalette.orange : ""};
	cursor: ${(props: {clickable?: boolean}) => props.clickable ? "pointer" : ""};
`;