import * as User from "../../api/user"; /* eslint-disable import/no-anonymous-default-export */
export default async (email: string) => {
    let message: string = "⠀";
	let status: number = 102;

    // verifica se o campo email está vazio
    if (email == null || email === '') {
		message = "Preencha o campo de email";
		status = 400;

		return message;
	}

    // verifica se o campo email contém um email válido

    return message;
}