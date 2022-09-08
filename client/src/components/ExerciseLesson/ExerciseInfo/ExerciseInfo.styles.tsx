import styled from "styled-components";
import ColorPalette from "../../../utils/ColorPalette";

interface Collapsables {
	open: boolean;
	display?: boolean;
}

export const CollapseButton = styled.div`
	position: absolute;
	width: 3rem;
	height: 3rem;
	border-radius: 100%;
	margin: 0.5rem;
	background-color: ${ColorPalette.yellowOrange};
	right: ${(props: Collapsables) => (props.open ? "calc(32.5%)" : 0)};
	top: 0;
	transition: 0.6s ease-in;
`;

export const MainContainer = styled.div`
	display: none;
	@media (min-width: 900px) {
		display: ${(props: Collapsables) => (props.display ? "flex" : "none")};
		height: 100vh;
		width: ${(props: Collapsables) => (props.open ? "50%" : 0)};
		background-color: ${ColorPalette.primaryDark};
		transition: 0.7s
				${(props: Collapsables) =>
					props.open ? "ease-in" : "ease-out"},
			display 0.7s linear 0.7s;
	}
`;

export const LessonTitle = styled.div`
	display: flex;
	width: 100%;
	height: 4rem;
	background-color: ${ColorPalette.primary};
	font-size: ${(props: Collapsables) => (props.open ? "2rem" : "0")};
	color: ${ColorPalette.white};
	align-items: center;
	justify-content: center;
	transition: 0.7s;
`;
