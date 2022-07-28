import { LinkText, NavContainer, NavItem, LastItem, NavNav, NavLink, HomeIcon, MaterialsIcon, ConfigIcon } from "./Navbar.styles";

function Navbar() {
    return ( 
    <NavContainer>
        <NavNav>
            <NavItem>
                <NavLink to={"/home"}>
                    <HomeIcon/>
                    <LinkText>Home</LinkText>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to={"/home"}>
                    <MaterialsIcon/>
                    <LinkText>Materiais</LinkText>
                </NavLink>
            </NavItem>
            <LastItem>
                <NavLink to={"/home"}>
                    <ConfigIcon/>
                    <LinkText>Configurações</LinkText>
                </NavLink>
            </LastItem>
        </NavNav>
    </NavContainer> 
    );
}

export default Navbar;