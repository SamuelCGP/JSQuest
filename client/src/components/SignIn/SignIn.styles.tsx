import ColorPalette from "../../utils/ColorPalette";
import styled from "styled-components";
import { Form, Field } from "formik";

export const ForgotPassword = styled.p`
	font-family: consolas;
	color: ${ColorPalette.orange};
	user-select: none;
	cursor: pointer;
	text-decoration: underline;
`;

export const SignUpCall = styled.h3`
	font-family: consolas;
	user-select: none;
	color: ${(props: {clickable?: boolean}) => props.clickable ? ColorPalette.orange : ""};
	cursor: ${(props: {clickable?: boolean}) => props.clickable ? "pointer" : ""};
`;

export const SignInForm = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
`;

export const SignInField = styled(Field)`
	background-color: #cdd6e3;
	border-radius: 3px;
	border: none;
	padding: 1.5em 1em;
	margin: 1em 1em;
	outline: none;
	font-size: 1em;
	font-family: consolas;
`;
