import * as enviroment from "./config/enviroment";
import axios, { AxiosRequestHeaders } from "axios";
import { Navigate, useNavigate } from "react-router-dom";
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
	if(headers) {
		if(headers.Authorization === "Bearer null") {
			window.location.href = `${window.location.protocol}//${window.location.host}/login`;
			return
		}
	}
	
	return await axios({
		url: enviroment.SERVER_URL + "/api/" + endpoint,
		method,
		...(data ? { data } : {}),
		...(headers ? { headers } : {}),
	})
		.then((res) => {
			return res;
		})
		.catch((error) => {
			console.log(error);
			return error.response;
		});
}
