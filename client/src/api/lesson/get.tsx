import { HTTPMethods, makeRequest } from "../http";

export async function get(chapterIndex: number, lessonIndex: number) {
	const headers = {
		Authorization: "Bearer " + localStorage.getItem("token"),
	};

	const res = await makeRequest(
		HTTPMethods.GET,
		`lesson/${chapterIndex}/${lessonIndex}`,
		headers
	);
	return res;
}
