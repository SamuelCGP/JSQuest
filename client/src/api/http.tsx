import * as enviroment from "./config/enviroment";
import axios, { AxiosRequestHeaders } from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
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
		url: enviroment.SERVER_URL + "/api/" + endpoint,
		method,
		...(data ? { data } : {}),
		...(headers ? { headers } : {}),
	})
		.then((res) => {
			console.log(res);
			return res;
		})
		.catch((error) => {
			console.log(error)
			//coloca nessa linha pra redirecionar o cara pra pagina de login
			return error.response;
		});
}
