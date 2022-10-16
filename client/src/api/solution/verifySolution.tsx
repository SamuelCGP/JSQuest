import { makeRequest, HTTPMethods } from "../http";

export async function verifySolution(
	chapterIndex: number,
	lessonIndex: number,
	solution: string
) {
	const data = {
		solution: solution,
	};

	const headers = {
		"Content-Type": "application/json;charset=UTF-8",
		Authorization: "Bearer " + localStorage.getItem("token"),
	};

	const res = await makeRequest(
		HTTPMethods.POST,
		`solution/verify/${chapterIndex}/${lessonIndex}`,
		headers,
		data
	);

	return res;
}
