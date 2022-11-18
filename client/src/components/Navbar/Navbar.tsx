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
import { useState, useEffect } from "react";
import { getAll } from "../../api/chapter";
import { ChapterI } from "../../pages/Home/getUserProgress";

export function Navbar() {
	const [materialTab, setMaterialTab] = useState<boolean>(false);
	const [navigation, setNavigation] = useState("");
	const [chapters, setChapters] = useState([]);

	useEffect(() => {
		const chapters = localStorage.getItem("chaptersResponse");
		chapters !== ("{}" && null)
			? setChapters(JSON.parse(chapters).data.chapters)
			: getAll().then((res) => {
					setChapters(res.data.chapters);
			  });
	}, []);

	if (navigation) {
		const path = `${window.location.protocol}//${window.location.host}${navigation}`;
		// <Navigate to={path}/> doesn't work well here, because the states must be reloaded
		window.location.href = path;
		return <></>;
	}

	return (
		<>
			<Popup type={"config"} />
			<NavContainer>
				<NavNav>
					<NavItem>
						<NavLink to={"/"}>
							<HomeIcon />
							<LinkText>Home</LinkText>
						</NavLink>
					</NavItem>
					<HorizontalLine />
					<NavItem>
						<NavButton
							onClick={() => {
								setMaterialTab(!materialTab);
							}}
							className="materials"
						>
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
			<MaterialMenu open={materialTab}>
				<MaterialSectionTitle>Materiais</MaterialSectionTitle>

				{(chapters as ChapterI[]).map((chapter) => {
					if (!chapter.data.lessons[0].completed) return null;

					return (
						<MaterialCard>
							<MaterialLink
								onClick={() => {
									setNavigation(`/chapter/${chapter.id}/lesson/0`);
								}}
							>
								<MaterialIcon image="" />
								<MaterialTitle children={chapter.data.title} />
							</MaterialLink>
						</MaterialCard>
					);
				})}
			</MaterialMenu>
		</>
	);
}
/*
					<NavItem mInvisible>
						<NavLink to={"/"}>
							<ProfileIcon />
							<LinkText>Perfil</LinkText>
						</NavLink>
					</NavItem>
					<HorizontalLine dInvisible />
*/
