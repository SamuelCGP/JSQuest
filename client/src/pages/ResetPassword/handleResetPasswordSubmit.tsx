import * as User from "../../api/user"; /* eslint-disable import/no-anonymous-default-export */
export default async (userId: string, token: string, newPassword: string) => {
	interface VerificationResponse {
		success: boolean;
		message: string;
	}

	let response: VerificationResponse = { success: false, message: "" };

	const passwordResetRequest = await User.resetPassword(
		userId,
		token,
		newPassword
	).then((response) => {
		return response;
	});
	switch (passwordResetRequest) {
		case 200:
			response.success = true;
			response.message = "Senha atualizada com sucesso";
			return response;
		case 404:
			response.success = false;
			response.message = "ID de usuário inválido";
			return response;
		case 401:
			response.success = false;
			response.message = "Token expirado ou inválido";
			return response;
		case 0:
			response.success = false;
			response.message = "Sem conexão com o servidor";
			return response;
		default:
			response.success = false;
			response.message = "Erro desconhecido: " + passwordResetRequest;
			return response;
	}
};
