import { HTTPMethods, makeRequest } from "../http";

export async function get() {
	const headers = {
		Authorization: "Bearer " + localStorage.getItem("token"),
	};

	const res = await makeRequest(HTTPMethods.GET, `chapter/all`, headers);
	return res;
}
