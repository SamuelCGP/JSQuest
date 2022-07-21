import ColorPalette from "../../utils/ColorPalette";
import styled from "styled-components";

export const MainContainer = styled.div`
	background-color: ${ColorPalette.navyBlue};
	width: 100%;
	height: auto;
	border-radius: 1rem;
`;

export const AuthCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: ${ColorPalette.white};
	padding: .7rem;
	border-radius: 1rem;
	@media (min-width: 900px) {
		max-width: 50%;
		height: 44rem;
		padding: 100px 20px;
		transition: .8s ease-out;
		margin-left: ${(props: {isSigned: boolean}) => props.isSigned ? '0%' : '50%'};
	}
`;


