import React from "react";
import styled, { css } from "styled-components";
import ColorPalette from "../../utils/ColorPalette";

interface ButtonProps {
	version?: string;
}

const Button = styled.button`
	background-color: transparent;
	border-radius: 3px;
	border: 2px solid ${ColorPalette.lightCyan};
	color: ${ColorPalette.darkBlue};
	padding: 0.25em 1em;
	margin: 0 1em;
	font-weight: bold;
	${(p: ButtonProps) =>
		p.version == "primary" &&
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
