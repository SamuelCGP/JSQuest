import { HTTPMethods, makeRequest } from "../http";

export async function resetPassword(
	userId: string,
	userToken: string,
	newPassword: string
) {
	const data = {
		userId: userId,
		newPassword: newPassword,
	};

	const headers = {
		"Content-Type": "application/json;charset=UTF-8",
		"x-access-token": userToken,
	};

	const res = await makeRequest(
		HTTPMethods.POST,
		"user/reset-password",
		headers,
		data
	);

	return res.status;
}
