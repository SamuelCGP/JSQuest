import { makeRequest, HTTPMethods } from "./http";

export async function verifyUserResetToken(userId: string, userToken: string) {
	const headers = {
		"x-access-token": userToken,
	};

	return await makeRequest(
		HTTPMethods.GET,
		`user/verify-password-reset-token/${userId}`,
		headers
	);
}
