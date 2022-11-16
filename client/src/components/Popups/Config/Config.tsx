import { useNavigate } from "react-router";
import ColorPalette from "../../../utils/ColorPalette";
import { ModalCard } from "../Popup.styles";
import { UserCard, Heading, LogoutButton } from "./Config.styles";

function Config() {
	const navigate = useNavigate();
	function logout() {
		if (localStorage.getItem("token")) localStorage.removeItem("token");
		navigate("/login");
	}

	return (
		<ModalCard bgColor={ColorPalette.blueWhite}>
			<Heading>Configurações</Heading>
			<UserCard>
				<LogoutButton onClick={logout}>Sair</LogoutButton>
			</UserCard>
		</ModalCard>
	);
}

export default Config;
