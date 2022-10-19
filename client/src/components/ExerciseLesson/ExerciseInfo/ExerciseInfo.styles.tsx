import styled from "styled-components";
import ColorPalette from "../../../utils/ColorPalette";

interface Collapsables {
	open: number;
	display?: number;
}

export const CollapseButton = styled.div`
	display: none;
	@media (min-width: 900px) {
		position: absolute;
		width: 3rem;
		height: 3rem;
		border-radius: 100%;
		margin: 0.5rem;
		background-color: ${ColorPalette.yellowOrange};
		right: 0;
		top: ${(props: Collapsables) =>
			props.open ? "calc(100% - 3.5rem)" : 0};
		transition: ${(props: Collapsables) =>
			props.open ? "0.2s ease-out" : "0.2s ease-in"};
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: bolder;
		font-family: arial;
		transform: ${(props: Collapsables) =>
			props.open ? "rotate(0deg)" : "rotate(180deg)"};
		right: ${(props: Collapsables) => (props.open ? "calc(32.5%)" : 0)};
		top: 0;
		user-select: none;
	}
`;

export const MainContainer = styled.div`
	position: absolute;
	z-index: 0;
	height: 100vh;
	display: ${(props: Collapsables) => (props.display ? "flex" : "none")};
	transition: 0.2s;
	@media (min-width: 900px) {
		overflow: hidden;
		width: calc(100vw - 4rem);
		background-color: ${(props: Collapsables) =>
			props.open ? "#01010160" : "none"};
		backdrop-filter: ${(props: Collapsables) =>
			props.open ? "sepia(60%)" : "none"};
	}
`;

export const MainPopup = styled.div`
	display: flex;
	right: 0;
	width: 100%;
	height: calc((100vh - 3.5rem));
	background-color: ${ColorPalette.primaryDark};
	transition: 0.2s
		${(props: Collapsables) => (props.open ? "ease-out" : "ease-in")};
	transform: ${(props: Collapsables) =>
		props.open ? "translateX(0)" : "translateX(100%)"};

	@media (min-width: 900px) {
		position: absolute;
		height: 100vh;
		flex: ${(props: Collapsables) => (props.open ? 1 : 0)};
		width: calc((100% - 4rem) / 3);
	}
	flex-direction: column;
`;

export const LessonTitle = styled.div`
	display: flex;
	width: 100%;
	height: 4rem;
	background-color: ${ColorPalette.primary};
	font-size: 2rem;
	color: ${ColorPalette.white};
	align-items: center;
	justify-content: center;
	transition: 0.2s;
	opacity: ${(props: Collapsables) => (props.open ? "100%" : "0")};
`;

export const LessonText = styled.div`
	width: 100%;
	height: calc(100% - 4rem);
	font-size: 1rem;
	color: ${ColorPalette.white};
	padding: 2rem;
	transition: 0.2s;
	opacity: ${(props: Collapsables) => (props.open ? "100%" : "0")};
	overflow-y: scroll;
`;
