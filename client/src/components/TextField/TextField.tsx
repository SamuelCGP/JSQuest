import { Field } from "formik";
import styled from "styled-components";

export const TextField = styled(Field)`
	background-color: #cdd6e3;
	border-radius: 3px;
	border: none;
	padding: ${(props: { small?: boolean }) =>
		props.small ? "1em 1em" : "1.5em 1em"};
	margin: ${(props: { small?: boolean }) =>
		props.small ? "0.5em 1em" : "1em 1em"};
	font-size: ${(props: { small?: boolean }) => (props.small ? "" : "1em")};
	outline: none;
	font-family: consolas;
`;
