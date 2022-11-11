import ColorPalette from "../../utils/ColorPalette";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Tooltip from "../Tooltip/Tooltip";
import { JSQuestLogo } from "../../svg";
import { ImBook } from "react-icons/im";
import { BsGearFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

export const NavContainer = styled.nav`
	background-color: ${ColorPalette.black};
	position: fixed;

	bottom: 0;
	width: 100vw;
	height: 3.5rem;

	z-index: 3;

	@media (min-width: 900px) {
		top: 0;
		width: 4rem;
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

interface NavItemProps {
	mInvisible?: boolean;
}

export const NavItem = styled.li`
	display: ${(props: NavItemProps) => (props.mInvisible ? "none" : "")};
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

interface HLProps {
	mInvisible?: boolean;
	dInvisible?: boolean;
}

export const HorizontalLine = styled.hr`
	display: ${(props: HLProps) => (props.mInvisible ? "none" : "block")};
	background-color: #7e7f84;
	width: 0.1rem;
	height: 80%;
	border: none;
	@media (min-width: 900px) {
		display: ${(props: HLProps) => (props.dInvisible ? "none" : "block")};
		width: 75%;
		height: 0.1rem;
	}
`;

export const NavLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 3.5rem;
	color: ${ColorPalette.primaryLight};
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

export const NavButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 3.5rem;
	color: ${ColorPalette.primaryLight};
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

export const LinkText = styled(Tooltip)`
	display: none;
	@media (min-width: 900px) {
		${NavLink}:hover & {
			display: block;
		}
		${NavButton}:hover & {
			display: block;
		}
	}
`;

// Material Menu

export const MaterialMenu = styled.div`
	position: fixed;
	z-index: 2;
	background-color: hsl(240, 7%, 10%);
	backdrop-filter: blur(2px);
	@media (min-width: 900px) {
		width: 20rem;
		height: 100%;
		left: 0;
	}
`;

export const MaterialLink = styled(Link)`
	width: 100%;
	height: 100%;
	cursor: pointer;
	display: flex;
	text-decoration: none;
`;

export const MaterialSectionTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: verdana;
	color: hsl(240, 7%, 60%);
	font-weight: bold;
	@media (min-width: 900px) {
		width: calc(100% - 10px - 4rem);
		margin-left: calc(4rem + 5px);
		margin-top: 5px;
		margin-bottom: 5px;
		height: 4rem;
		font-size: 2rem;
	}
`;

export const MaterialCard = styled.div`
	border: 2px solid hsl(240, 7%, 25%);
	@media (min-width: 900px) {
		width: calc(100% - 10px - 4rem);
		margin-left: calc(4rem + 5px);
		margin-top: 5px;
		margin-bottom: 5px;
		height: 4rem;
	}
`;

export const MaterialIcon = styled.div`
	background: url(${(props: { image?: string }) => props.image});
	background-color: ${ColorPalette.primary};
	border-radius: 100%;
	@media (min-width: 900px) {
		height: calc(4rem - 5px);
		aspect-ratio: 1/1;
	}
`;

export const MaterialTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: hsl(240, 7%, 60%);
	font-size: 1.2rem;
	font-family: Verdana;
	font-weight: bold;
	@media (min-width: 900px) {
		width: calc(100% - 4rem);
		height: calc(4rem - 5px);
	}
`;

// ICONS

export const HomeIcon = styled(JSQuestLogo)`
	width: 2.5rem;
	height: 2.5rem;
	@media (min-width: 900px) {
		width: 3rem;
		height: 3rem;
	}
`;

export const MaterialsIcon = styled(ImBook)`
	width: 2.5rem;
	height: 2.5rem;
	@media (min-width: 900px) {
		width: 3rem;
		height: 3rem;
	}
`;

export const ProfileIcon = styled(FaUserCircle)`
	width: 2.5rem;
	height: 2.5rem;
	@media (min-width: 900px) {
		width: 3rem;
		height: 3rem;
	}
`;

interface ConfigIconProps {
	rotation?: number;
}

export const ConfigIcon = styled(BsGearFill)`
	transition: ${(props: ConfigIconProps) => (props.rotation ? ".5s" : "")};
	${NavItem}:hover & {
		transform: ${(props: ConfigIconProps) =>
			props.rotation ? "rotate(90deg)" : ""};
	}
	width: 2.5rem;
	height: 2.5rem;
	@media (min-width: 900px) {
		width: 3rem;
		height: 3rem;
	}
`;
