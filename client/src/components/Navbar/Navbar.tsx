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
	NavButton,
	MaterialMenu,
	MaterialCard,
	MaterialLink,
	MaterialSectionTitle,
	MaterialIcon,
	MaterialTitle,
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
						<NavButton className="materials">
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
			<MaterialMenu>
				<MaterialSectionTitle>Materiais</MaterialSectionTitle>

				<MaterialCard>
					<MaterialLink to={"/chapter/0/lesson/0"}>
						{
							// MaterialIcon has a prop "image", use it to put an image inside it
						}
						<MaterialIcon />
						<MaterialTitle children={"Variáveis"} />
					</MaterialLink>
				</MaterialCard>

				{
					// -----------------
				}

				<MaterialCard>
					<MaterialLink to={"/chapter/1/lesson/0"}>
						{
							// MaterialIcon has a prop "image", use it to put an image inside it
						}
						<MaterialIcon />
						<MaterialTitle children={"Variáveis"} />
					</MaterialLink>
				</MaterialCard>
				<MaterialCard>
					<MaterialLink to={"/chapter/2/lesson/0"}>
						{
							// MaterialIcon has a prop "image", use it to put an image inside it
						}
						<MaterialIcon />
						<MaterialTitle children={"Operadores"} />
					</MaterialLink>
				</MaterialCard>
				<MaterialCard>
					<MaterialLink to={"/chapter/3/lesson/0"}>
						{
							// MaterialIcon has a prop "image", use it to put an image inside it
						}
						<MaterialIcon />
						<MaterialTitle children={"Booleanos"} />
					</MaterialLink>
				</MaterialCard>
			</MaterialMenu>
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
