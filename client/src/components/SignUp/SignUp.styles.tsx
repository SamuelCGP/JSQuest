import ColorPalette from "../../utils/ColorPalette";
import styled from "styled-components";
import { Form } from "formik";

export const SignUpForm = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
`;

export const SignInCall = styled.h3`
	font-family: consolas;
	user-select: none;
	color: ${(props: { clickable?: boolean }) =>
		props.clickable ? ColorPalette.secondary : ""};
	cursor: ${(props: { clickable?: boolean }) =>
		props.clickable ? "pointer" : ""};
`;
