import styled from "styled-components";
import ColorPalette from "../../utils/ColorPalette";

interface HeadingProps {
	margin?: string;
	mb?: string;
	mt?: string;
	inverse?: boolean;
	width?: string;
}
export const Heading = styled.h2`
	font-family: verdana;
	font-size: clamp(1.3rem, 9vw, 2.5rem);
	margin: ${(props: HeadingProps) => (props.margin ? props.margin : "")};
	margin-bottom: ${(props: HeadingProps) => (props.mb ? props.mb : "")};
	margin-top: ${(props: HeadingProps) => (props.mt ? props.mt : "")};
	color: ${(props: { inverse?: boolean }) =>
		props.inverse ? ColorPalette.secondaryDark : ColorPalette.white};
	letter-spacing: 0.2rem;
	line-height: 1.06;
	text-align: center;
	width: ${(props: HeadingProps) => (props.width ? props.width : "100%")};
	user-select: none;
`;
