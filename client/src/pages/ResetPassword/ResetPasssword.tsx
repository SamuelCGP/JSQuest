import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import * as User from "../../api/user";
import handleTokenVerification from "./handleTokenVerification";
import { Container, MainHeading } from "../../components/Global";
import { CenterContainer, MessageTag, LinkBack } from "../../pages/Message/Message.styles";
import ColorPalette from "../../utils/ColorPalette";

function ResetPassword() {
	const { userId } = useParams();
	const { token } = useParams();
	const [redirect, setRedirect] = useState("");
	const [responseText, setResponseText] = useState("");
	const [isFormVisible, setIsFormVisible] = useState(false);

	//redireciona
	if(redirect) return <Navigate to={redirect}></Navigate>

	//checa se algum parâmetro está vazio
	if(userId == undefined || token == undefined) setRedirect("/");

	handleTokenVerification(`${userId}`, `${token}`).then((response) => {
		if(response.isValid){
			setIsFormVisible(false) //mudar para true
		}else{
			setResponseText(response.message);
		}	
	});

	//retorna uma página de erro se a validação falhar
	if(!isFormVisible)
	return (
		<CenterContainer>
			<MainHeading color={ColorPalette.orange}>Algo deu errado...</MainHeading>
			<MessageTag>{responseText}</MessageTag>
			<LinkBack to={"/"}>Voltar para a Home</LinkBack>
		</CenterContainer>
	);
	
	//retorna um formulário de reset de senha, se passar pela validação
	return (
		<Container>

		</Container>
	);
}

export default ResetPassword;
