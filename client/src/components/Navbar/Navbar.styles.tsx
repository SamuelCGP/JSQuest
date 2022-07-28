import ColorPalette from "../../utils/ColorPalette";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { BsGearFill } from "react-icons/bs";

export const NavContainer = styled.nav`
	background-color: ${ColorPalette.black};
	position: fixed;

	bottom: 0;
	width: 100vw;
	height: 3.5rem;

	@media (min-width: 900px) {
		top: 0;
		width: 5rem;
		height: 100vh;
	}
`;

export const NavNav = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: row;
    height: 100%;

	@media (min-width: 900px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const NavItem = styled.li`
	width: 100%;
`;

export const LastItem = styled(NavItem)`
	@media (min-width: 900px) {
		margin-top: auto;
	}
`;

export const NavLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 3.5rem;
	color: ${ColorPalette.lightCyan};
	text-decoration: none;
	filter: grayscale(100%) opacity(0.7);
	transition: 0.2s;

	&:hover {
		filter: grayscale(0%) opacity(1);
	}

	@media (min-width: 900px) {
		height: 5rem;
	}
`;

export const LinkText = styled.span`
	display: none;
`;

export const HomeIcon = styled(AiFillHome)`
	width: 3rem;
	height: 3rem;
	@media (min-width: 900px) {
		width: 4rem;
		height: 4rem;
	}
`;

export const MaterialsIcon = styled(ImBook)`
	width: 2.5rem;
	height: 2.5rem;
	@media (min-width: 900px) {
		width: 3.5rem;
		height: 3.5rem;
	}
`;

export const ConfigIcon = styled(BsGearFill)`
	width: 2.5rem;
	height: 2.5rem;
	@media (min-width: 900px) {
		width: 3.5rem;
		height: 3.5rem;
	}
`;
