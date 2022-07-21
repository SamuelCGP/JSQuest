import styled, { css } from "styled-components";
import ColorPalette from "../../utils/ColorPalette";

interface ButtonProps {
	primary?: boolean;
	padding?: string;
	fontSize?: string;
	margin?: string;
	mt?: string;
	mb?: string;
}

const Button = styled.button`
	background-color: transparent;
	border-radius: 3px;
	border: 2px solid ${ColorPalette.lightCyan};
	color: ${ColorPalette.darkBlue};
	padding: ${(props: ButtonProps) =>
		props.padding ? props.padding : "0.25em 1em"};
	font-size: ${(props: ButtonProps) =>
		props.fontSize ? props.fontSize : ""};
	margin: ${(props: ButtonProps) => (props.margin ? props.margin : "0 1em")};
	margin-top: ${(props: ButtonProps) => (props.mt ? props.mt : "")};
	margin-bottom: ${(props: ButtonProps) => (props.mb ? props.mb : "")};
	font-weight: bold;
	${(props: ButtonProps) =>
		props.primary &&
		css`
			background-color: ${ColorPalette.navyBlue};
			border: 2px solid ${ColorPalette.navyBlue};
			color: ${ColorPalette.white};
			&:hover {
				background-color: ${ColorPalette.blue};
				cursor: pointer;
			}
		`};
`;

export default Button;
