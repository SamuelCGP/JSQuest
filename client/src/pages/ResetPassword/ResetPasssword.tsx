import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import handleTokenVerification from "./handleTokenVerification";
import handleResetPasswordSubmit from "./handleResetPasswordSubmit";
import { Container, MainHeading, NewPasswordForm } from "../../components";
import {
	CenterContainer,
	MessageTag,
	LinkBack,
} from "../../pages/Message/Message.styles";
import ColorPalette from "../../utils/ColorPalette";
import { MainContainer } from "./ResetPassword.styles";

function ResetPassword() {
	const { userId } = useParams();
	const { token } = useParams();
	const [redirect, setRedirect] = useState("");
	const [responseText, setResponseText] = useState("");
	const [isFormVisible, setIsFormVisible] = useState(false);

	//redireciona
	if (redirect) return <Navigate to={redirect}></Navigate>;

	//checa se algum parâmetro está vazio
	if (userId === undefined || token === undefined) setRedirect("/login");

	handleTokenVerification(`${userId}`, `${token}`).then((response) => {
		if (response.isValid) {
			setIsFormVisible(true);
		} else {
			setResponseText(response.message);
		}
	});

	//retorna uma página de erro se a validação falhar
	if (!isFormVisible)
		return (
			<CenterContainer>
				<MainHeading color={ColorPalette.white}>
					Algo deu errado...
				</MainHeading>
				<MessageTag>{responseText}</MessageTag>
				<LinkBack to={"/"} style={{ color: "white" }}>
					Voltar para a Home
				</LinkBack>
			</CenterContainer>
		);

	//retorna um formulário de reset de senha, se passar pela validação
	return (
		<Container>
			<MainHeading>Mude sua senha</MainHeading>
			<MainContainer>
				<NewPasswordForm
					onSubmit={async (input: any) => {
						const response = await handleResetPasswordSubmit(
							`${userId}`,
							`${token}`,
							input.new_password
						);
						setResponseText(response.message);
						if (response.success === true)
							setRedirect("/message/passwordResetSuccessful");
					}}
					formMessage={responseText}
				/>
			</MainContainer>
		</Container>
	);
}

export default ResetPassword;
