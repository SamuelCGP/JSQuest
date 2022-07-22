import React from "react";
import { CenterContainer, MessageTag, LinkBack } from "./Message.styles";
import { MainHeading } from "../../components/Global";
import ColorPalette from "../../utils/ColorPalette";
import { useParams } from "react-router-dom";

function Message() {
	const { messageType } = useParams();

	let title = "";
	let message = "";
	switch (messageType) {
		case "passwordResetEmail":
			title = "Você deveria jogar mais o jogo da memória";
			message = "Um link de reset de senha foi enviado em seu email";
			break;
		case "passwordResetSuccessful":
			title = "Sua senha foi atualizada";
			message = "Volte e faça login";
			break;
		case "verifyEmail":
			title = "Só falta um passo para confirmar o seu cadastro!";
			message =
				"Para ativar sua conta, acesse seu email e clique no link de confirmação que te enviamos";
			break;
		default:
			title = "Oooops...";
			message = "Página não encontrada";
	}
	return (
		<CenterContainer>
			<MainHeading color={ColorPalette.orange}>{title}</MainHeading>
			<MessageTag>{message}</MessageTag>
			<LinkBack to={"/"}>Voltar para a Home</LinkBack>
		</CenterContainer>
	);
}

export default Message;
