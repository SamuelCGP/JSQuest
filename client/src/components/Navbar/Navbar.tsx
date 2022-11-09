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
	NavButton,
} from "./Navbar.styles";
import { Popup } from "../Popups";
import { fireSignal } from "../../game/signals";

export function Navbar() {
	return (
		<>
			<Popup type={"config"} />
			<NavContainer>
				<NavNav>
					<NavItem>
						<NavLink to={"/home"}>
							<HomeIcon />
							<LinkText>Home</LinkText>
						</NavLink>
					</NavItem>
					<HorizontalLine />
					<NavItem>
						<NavButton>
							<MaterialsIcon />
							<LinkText>Materiais</LinkText>
						</NavButton>
					</NavItem>
					<HorizontalLine dInvisible />
					<LastItem
						onClick={() => {
							fireSignal("configPopupCall", true);
						}}
					>
						<NavButton>
							<ConfigIcon rotation={+true} />
							<LinkText>Configurações</LinkText>
						</NavButton>
					</LastItem>
				</NavNav>
			</NavContainer>
		</>
	);
}
/*
					<NavItem mInvisible>
						<NavLink to={"/home"}>
							<ProfileIcon />
							<LinkText>Perfil</LinkText>
						</NavLink>
					</NavItem>
					<HorizontalLine dInvisible />
*/
