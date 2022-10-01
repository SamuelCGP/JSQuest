import * as enviroment from "./config/enviroment";
import axios, { AxiosRequestHeaders } from "axios";
export enum HTTPMethods {
	GET = "GET",
	POST = "POST",
}
export async function makeRequest(
	method: HTTPMethods,
	endpoint: string,
	headers?: AxiosRequestHeaders,
	data?: object
) {
	return await axios({
		url: '/api/' + endpoint,
		method,
		...(data ? { data } : {}),
		...(headers ? { headers } : {}),
	})
		.then((res) => {
			return res;
		})
		.catch((error) => {
			return error.response;
		});
}
