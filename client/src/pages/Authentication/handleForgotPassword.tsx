import * as User from "../../api/user"; /* eslint-disable import/no-anonymous-default-export */
import * as Yup from "yup";

export default async (email: string) => {
	let message: string = "⠀";

	// verifica se o campo email está vazio
	if (email == null || email === "") {
		message = "Preencha o campo de email antes";
		return message;
	}

	// verifica se o campo email contém um email válido
    const emailObject = { email: email }
	const emailSchema = Yup.object().shape({
		email: Yup.string().email().required()
	});
    const isValid = await emailSchema.isValid(emailObject);
    if (!isValid) {message = "Email inválido"; return message};

    // verifica se o campo email contém um email cadastrado
    const response: any = await User.login(email, "anyany").then(
		(response) => {return response;}
	);  
    switch (response) {
		case 401:
			//"Senha incorreta", o que significa que o email está cadastrado
			break;
		case 404:
			message = "Usuário não cadastrado";
			return message
		default:
			message = "Erro desconhecido " + response;
            return message
	}

    // realiza request mandando email de reset de senha para o usuário
    // TODO

    // redireciona o usuário para uma página com a mensagem adequada
    message = "/message/passwordResetEmail";

	return message;
};
