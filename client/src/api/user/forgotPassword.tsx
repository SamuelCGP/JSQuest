import { makeRequest, HTTPMethods } from "./http";

export async function forgotPassword(userEmail: string) {
	const data = {
		email: userEmail
	};
    
	const headers = {
		"Content-Type": "application/json;charset=UTF-8",
	};

	return await makeRequest(HTTPMethods.POST, "user/forgot-password", headers, data);
}