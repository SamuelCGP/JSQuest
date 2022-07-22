import * as User from "../../api/user"; /* eslint-disable import/no-anonymous-default-export */
export default async (userId: string, token: string) => {
    interface VerificationResponse{
        isValid: boolean;
        message: string;
    }

    let response: VerificationResponse = { isValid: false, message: "" };

    //checa se o token e o id do usuário são válidos
	const tokenVerify = await User.verifyUserResetToken(userId,token).then((response) => {
		return response;
	});
    switch(tokenVerify){
        case 200:
            response.isValid = true;
            response.message = "ID de usuário e token válidos";
            return response;
        case 404:
            response.isValid = false;
            response.message = "ID de usuário inválido";
            return response;
        case 401:
            response.isValid = false;
            response.message = "Token expirado ou inválido";
            return response;
        case 0:
            response.isValid = false;
            response.message = "Sem conexão com o servidor";
            return response;
        default:
            response.isValid = false;
            response.message = "Erro desconhecido: " + tokenVerify
            return response;
    }
};
