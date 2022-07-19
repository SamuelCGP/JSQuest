import * as enviroment from "../config/enviroment";
import axios from "axios";
import { HTTPMethods, makeRequest } from "./http";

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

	return await makeRequest(HTTPMethods.POST, "user/register", headers, data);
}
