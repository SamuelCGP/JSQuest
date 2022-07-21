import styled, {css} from "styled-components";
import ColorPalette from "../../utils/ColorPalette";

interface MainHeadingProps{
	inverse?: boolean;
	color?: string;
}

export const MainHeading = styled.h1`
	font-family: verdana;
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-top: 2rem;
	margin-bottom: 2rem;
	color: ${(props: MainHeadingProps) =>
		props.inverse ? ColorPalette.darkBlue : ColorPalette.white};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
	user-select: none;
	${(props: MainHeadingProps) =>
		props.color &&
		css`
			color: ${props.color};
		`};
`;