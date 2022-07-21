import * as User from "../../api/user"; /* eslint-disable import/no-anonymous-default-export */
export default async (input: any) => {
	let message: string = "";
	let status: number = 102;

	if (input.email == "" || input.password == "") {
		message = "Preencha todos os campos";
		status = 400;

		return message;
	}

	const response: any = await User.login(input.email, input.password).then(
		(response) => {
			return response;
		}
	);

	status = response;

	switch (status) {
		case 200:
			message = "Acesso permitido";
			break;
		case 401:
			message = "Senha incorreta";
			break;
		case 404:
			message = "Usuário não cadastrado";
			break;
		case 0:
			message = "Sem conexão com o servidor";
			break;
		default:
			message = "Erro desconhecido " + status;
	}

	return message;
};
