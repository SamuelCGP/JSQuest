import ColorPalette from "../../utils/ColorPalette";
import styled from "styled-components";
import { Container } from "../../components/Global";
import { createGlobalStyle } from "styled-components";

export const ContainerFull = styled(Container)`
	height: 100vh;
`;

export const MainContainer = styled.div`
	background-color: ${ColorPalette.blueWhite};
	width: 100%;
	height: auto;
	border-radius: 1rem;
`;

export const AuthCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: ${ColorPalette.white};
	padding: 0.7rem;
	border-radius: 1rem;
	@media (min-width: 900px) {
		max-width: 50%;
		height: 44rem;
		padding: 100px 20px;
		transition: 0.8s ease-out;
		margin-left: ${(props: { isSigned: boolean }) =>
			props.isSigned ? "0%" : "50%"};
	}
`;

export const GlobalStyle = createGlobalStyle`
	body{
		background-color: #009ec2;
		opacity: 1;
		background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #009ec2 40px ), repeating-linear-gradient( #1f87c155, #1f87c1 );
	}
`;
