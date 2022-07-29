import ColorPalette from "../../utils/ColorPalette";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SiJavascript } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { BsGearFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

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
	align-items: center;

	@media (min-width: 900px) {
		flex-direction: column;
	}
`;

interface NavItemProps{
	mInvisible?: boolean
}

export const NavItem = styled.li`
	display: ${(props: NavItemProps) =>
			props.mInvisible ? "none" : ""};
	width: 100%;
	@media (min-width: 900px) {
		display: list-item;
	}
`;

export const LastItem = styled(NavItem)`
	@media (min-width: 900px) {
		margin-top: auto;
	}
`;

interface HLProps{
	mInvisible?: boolean, dInvisible?: boolean
}

export const HorizontalLine = styled.hr`
	display: ${(props: HLProps) =>
			props.mInvisible ? "none" : "block"};
	background-color: #7e7f84;
	width: .1rem;
	height: 80%;
	border: none;
	@media (min-width: 900px) {
		display: ${(props: HLProps) =>
			props.dInvisible ? "none" : "block"};
		width: 80%;
		height: .1rem;
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
	@media (min-width: 900px) {
		position: absolute;
		left: 125%;
		top: 25%;
		background-color: ${ColorPalette.black};
		color: white;
		white-space: nowrap;
		padding: 10px 15px;
		border-radius: 7px;
		&::before{
			content: "";
			position: absolute;
			top: 15%;
			right: 92%;
			border: 15px solid;
			border-color: transparent ${ColorPalette.black} transparent transparent;
		}
		${NavLink}:hover &{
			display: block;
		}
	}
`;

export const HomeIcon = styled(SiJavascript)`
	width: 2.5rem;
	height: 2.5rem;
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

export const ProfileIcon = styled(FaUserCircle)`
	width: 2.5rem;
	height: 2.5rem;
	@media (min-width: 900px) {
		width: 3.5rem;
		height: 3.5rem;
	}
`;

interface ConfigIconProps{
	rotation?: boolean
}

export const ConfigIcon = styled(BsGearFill)`
	transition: ${(props: ConfigIconProps) =>
		props.rotation ? ".5s" : ""};
	${NavItem}:hover &{
		transform: ${(props: ConfigIconProps) =>
		props.rotation ? "rotate(90deg)" : ""};
	}
	width: 2.5rem;
	height: 2.5rem;
	@media (min-width: 900px) {
		width: 3.5rem;
		height: 3.5rem;
	}
`;