import {
	LinkText,
	NavContainer,
	NavItem,
	LastItem,
	NavNav,
	NavLink,
	HomeIcon,
	MaterialsIcon,
	ConfigIcon,
	HorizontalLine,
	ProfileIcon,
} from "./Navbar.styles";

function Navbar() {
	return (
		<NavContainer>
			<NavNav>
				<NavItem mInvisible>
					<NavLink to={"/home"}>
						<HomeIcon/>
						<LinkText>Home</LinkText>
					</NavLink>
				</NavItem>
				<HorizontalLine mInvisible />
				<NavItem>
					<NavLink to={"/home"}>
						<ProfileIcon />
						<LinkText>Perfil</LinkText>
					</NavLink>
				</NavItem>
				<HorizontalLine dInvisible />
				<NavItem>
					<NavLink to={"/home"}>
						<MaterialsIcon />
						<LinkText>Materiais</LinkText>
					</NavLink>
				</NavItem>
				<HorizontalLine dInvisible />
				<LastItem>
					<NavLink to={"/home"}>
						<ConfigIcon rotation />
						<LinkText>Configurações</LinkText>
					</NavLink>
				</LastItem>
			</NavNav>
		</NavContainer>
	);
}

export default Navbar;
