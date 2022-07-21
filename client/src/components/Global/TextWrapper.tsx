import styled from "styled-components";

interface TextWrapperProps {
	margin?: string;
    color?: string;
    size?: string;
	mb?: string;
	mt?: string;
    padding?: string;
    spacing?: string;
    weight?: string;
}
export const TextWrapper = styled.span`
	color: ${(props: TextWrapperProps) => (props.color ? props.color : '')};
	font-size: ${(props: TextWrapperProps) => (props.size ? props.size : '')};
	font-weight: ${(props: TextWrapperProps) => (props.weight ? props.weight : '')};
	letter-spacing: ${(props: TextWrapperProps) => (props.spacing ? props.spacing : '')};
	padding: ${(props: TextWrapperProps) => (props.padding ? props.padding : '')};
	margin: ${(props: TextWrapperProps) => (props.margin ? props.margin : '')};
	margin-bottom: ${(props: TextWrapperProps) => (props.mb ? props.mb : '')};
	margin-top: ${(props: TextWrapperProps) => (props.mt ? props.mt : '')};
`;