import * as Chapter from "../../api/chapter";
export default async () => {
	let message: string = "";
	let status: number = 102;

	const response: any = await Chapter.get().then((response) => {
		return response;
	});

	status = response.status;

	switch (status) {
		case 200:
			message = "Capítulos obtidos com sucesso";
			return response.data;
		case 400:
			message = "Token inválido";
			break;
		case 401:
			message = "Token nulo";
			break;
		case 0:
			message = "Sem conexão com o servidor";
			break;
		default:
			message = "Erro desconhecido " + status;
	}

	return message;
};