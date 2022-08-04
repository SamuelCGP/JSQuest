import styled, { css } from "styled-components";
import ColorPalette from "../../utils/ColorPalette";

interface TooltipProps {
	up?: boolean;
	down?: boolean;
	left?: boolean;
	right?: boolean;
}

// Add the variations later

const Tooltip = styled.span`
	@media (min-width: 900px) {
		position: absolute;
		background-color: ${ColorPalette.black};
		color: white;
		white-space: nowrap;
		border: 10px solid black;
		border-radius: 7px;
		left: 125%;
		top: 25%;
		&::before {
			content: "";
			position: absolute;
			border: 15px solid;
			top: -25%;
			right: 102%;
			border-color: transparent ${ColorPalette.black} transparent
				transparent;
		}
	}
`;

export default Tooltip;
