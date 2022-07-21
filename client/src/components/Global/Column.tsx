import styled from "styled-components";

interface ColumnProps {
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
export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${(props: ColumnProps) => (props.justifyContent ? props.justifyContent : '')};
	align-items: ${(props: ColumnProps) => (props.alignItems ? props.alignItems : '')};
	gap: ${(props: ColumnProps) => (props.gap ? props.gap : '')};
	padding: ${(props: ColumnProps) => (props.padding ? props.padding : '')};
	margin: ${(props: ColumnProps) => (props.margin ? props.margin : '')};
	position: ${(props: ColumnProps) => (props.position ? props.position : '')};
	width: ${(props: ColumnProps) => (props.width ? props.width : 'auto')};
	min-width: ${(props: ColumnProps) => (props.minWidth ? props.minWidth : 'auto')};
	max-width: ${(props: ColumnProps) => (props.maxWidth ? props.maxWidth : 'auto')};
	height: ${(props: ColumnProps) => (props.height ? props.height : 'auto')};
	max-height: ${(props: ColumnProps) => (props.maxHeight ? props.maxHeight : 'auto')};
	min-height: ${(props: ColumnProps) => (props.minHeight ? props.minHeight : 'auto')};
`;