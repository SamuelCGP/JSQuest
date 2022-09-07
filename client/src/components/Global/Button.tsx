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

export const Button = styled.button`
	background-color: transparent;
	border-radius: 1.2rem;
	border: 2px solid ${ColorPalette.primary};
	color: ${ColorPalette.primary};
	padding: ${(props: ButtonProps) =>
		props.padding ? props.padding : "0.25em 1em"};
	font-size: ${(props: ButtonProps) =>
		props.fontSize ? props.fontSize : ""};
	margin: ${(props: ButtonProps) => (props.margin ? props.margin : "0 1em")};
	margin-top: ${(props: ButtonProps) => (props.mt ? props.mt : "")};
	margin-bottom: ${(props: ButtonProps) => (props.mb ? props.mb : "")};
	font-weight: bold;
	&:hover {
		background-color: ${ColorPalette.primaryDark + "30"};
		cursor: pointer;
	}
	${(props: ButtonProps) =>
		props.primary &&
		css`
			background-color: ${ColorPalette.primary};
			border-bottom: 4px solid ${ColorPalette.primaryDark + "80"};
			color: ${ColorPalette.white};
			&:hover {
				filter: brightness(1.1);
				background-color: ${ColorPalette.primary};
				cursor: pointer;
			}
		`};
`;
