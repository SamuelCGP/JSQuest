import styled from "styled-components";

interface SectionProps {
	margin?: string;
	padding?: string;
	background?: string;
	position?: string;
	width?: string;
	minWidth?: string;
	maxWidth?: string;
	height?: string;
	maxHeight?: string;
	minHeight?: string;
	smPadding?: string;
}
export const Section = styled.section`
	padding: ${(props: SectionProps) =>
		props.padding ? props.padding : "140px 0"};
	margin: ${(props: SectionProps) => (props.margin ? props.margin : "")};
	background: ${(props: SectionProps) =>
		props.background ? props.background : "#071c2f"};
	position: ${(props: SectionProps) =>
		props.position ? props.position : ""};
	width: ${(props: SectionProps) => (props.width ? props.width : "auto")};
	min-width: ${(props: SectionProps) =>
		props.minWidth ? props.minWidth : "auto"};
	max-width: ${(props: SectionProps) =>
		props.maxWidth ? props.maxWidth : "auto"};
	height: ${(props: SectionProps) => (props.height ? props.height : "auto")};
	max-height: ${(props: SectionProps) =>
		props.maxHeight ? props.maxHeight : "auto"};
	min-height: ${(props: SectionProps) =>
		props.minHeight ? props.minHeight : "auto"};
	@media screen and (max-width: 768px) {
		padding: ${(props: SectionProps) =>
			props.smPadding ? props.smPadding : "70px 0"};
	}
`;
