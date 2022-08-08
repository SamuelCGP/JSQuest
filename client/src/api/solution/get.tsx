import { HTTPMethods, makeRequest } from "../http";

export async function get(chapterIndex: number, lessonIndex: number) {
	const headers = {
		Authorization: "Bearer " + localStorage.getItem("token"),
	};

	return await makeRequest(
		HTTPMethods.GET,
		`/solution/${chapterIndex}/${lessonIndex}`,
		headers
	);
}
