import StyleSheet from "../../utils/StyleSheet";
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

export const AuthStyles: StyleSheet = {
	authentication: {
		width: "100vw",
		height: "100vh",
		backgroundColor: ColorPalette.darkBlue,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	title: {
		color: ColorPalette.white,
		fontFamily: "verdana",
		textAlign: "center",
	},
	mainContainer: {
		width: "80rem",
		height: "40rem",
		backgroundColor: ColorPalette.navyBlue,
		borderRadius: "30px",
		position: "relative",
	},
	authCard: {
		width: "50%",
		backgroundColor: ColorPalette.white,
		borderRadius: "30px",
		transition: ".8s ease-out",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "3rem",
		position: "absolute",
		top: "0",
		right: "42.5%",
	},
};
