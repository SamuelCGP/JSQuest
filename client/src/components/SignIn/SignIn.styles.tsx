import ColorPalette from "../../utils/ColorPalette";
import styled from "styled-components";
import { Form } from "formik";

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
	color: ${(props: { clickable?: boolean }) =>
		props.clickable ? ColorPalette.orange : ""};
	cursor: ${(props: { clickable?: boolean }) =>
		props.clickable ? "pointer" : ""};
`;

export const SignInForm = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
`;