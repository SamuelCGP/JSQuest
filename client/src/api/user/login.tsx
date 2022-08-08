import { makeRequest, HTTPMethods } from "../http";

export async function login(userEmail: string, userPassword: string) {
	const data = {
		email: userEmail,
		password: userPassword,
	};
    
	const headers = {
		"Content-Type": "application/json;charset=UTF-8",
	};

	const res = await makeRequest(HTTPMethods.POST, "user/login", headers, data);
	localStorage.setItem("token", res.data.token);
	return res.status;
}
