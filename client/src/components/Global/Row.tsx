import styled from "styled-components";

interface RowProps {
	margin?: string;
    padding?: string;
    position?: string;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    minHeight?: string;
    justifyContent?: string;
    alignItems?: string;
    gap?: string;
    flexWrap?: string;
}
export const Row = styled.div`
	display: flex;
	justify-content: ${(props: RowProps) => (props.justifyContent ? props.justifyContent : '')};
	align-items: ${(props: RowProps) => (props.alignItems ? props.alignItems : '')};
	gap: ${(props: RowProps) => (props.gap ? props.gap : '')};
	padding: ${(props: RowProps) => (props.padding ? props.padding : '')};
	margin: ${(props: RowProps) => (props.margin ? props.margin : '')};
	position: ${(props: RowProps) => (props.position ? props.position : '')};
	width: ${(props: RowProps) => (props.width ? props.width : 'auto')};
	min-width: ${(props: RowProps) => (props.minWidth ? props.minWidth : 'auto')};
	max-width: ${(props: RowProps) => (props.maxWidth ? props.maxWidth : 'auto')};
	height: ${(props: RowProps) => (props.height ? props.height : 'auto')};
	max-height: ${(props: RowProps) => (props.maxHeight ? props.maxHeight : 'auto')};
	min-height: ${(props: RowProps) => (props.minHeight ? props.minHeight : 'auto')};
	flex-wrap: ${(props: RowProps) => (props.flexWrap ? props.flexWrap : '')};
`;