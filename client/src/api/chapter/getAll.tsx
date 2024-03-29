import { HTTPMethods, makeRequest } from "../http";

export async function getAll() {
	const headers = {
		Authorization: "Bearer " + localStorage.getItem("token"),
	};

	const res = await makeRequest(HTTPMethods.GET, `chapter/all`, headers);
	localStorage.setItem("chaptersResponse", JSON.stringify(res))
	return res;
}
