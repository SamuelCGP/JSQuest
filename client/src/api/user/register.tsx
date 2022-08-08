import { HTTPMethods, makeRequest } from "../http";

export async function register(
	username: string,
	userEmail: string,
	userPassword: string
) {
	const data = {
		username: username,
		email: userEmail,
		password: userPassword,
	};

	const headers = {
		"Content-Type": "application/json;charset=UTF-8",
	};

	const res = await makeRequest(HTTPMethods.POST, "user/register", headers, data);
	return res.status;
}
