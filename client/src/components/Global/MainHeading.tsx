import styled from "styled-components";
import ColorPalette from "../../utils/ColorPalette";

export const MainHeading = styled.h1`
	font-family: verdana;
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	color: ${(props: { inverse?: boolean }) =>
		props.inverse ? ColorPalette.darkBlue : ColorPalette.white};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`;