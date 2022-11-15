import { HTTPMethods, makeRequest } from "../http";

export async function complete(chapterIndex: string, lessonIndex: string) {
	const headers = {
		Authorization: "Bearer " + localStorage.getItem("token"),
	};

	const res = await makeRequest(
		HTTPMethods.POST,
		`lesson/${chapterIndex}/${lessonIndex}/complete`,
		headers
	);

	const chapters = localStorage.getItem("chaptersResponse");

	if (chapters) {
		const chapterData = JSON.parse(chapters);
		chapterData.data.chapters[parseInt(chapterIndex)].data.lessons[
			parseInt(lessonIndex)
		].completed = true;
        
		localStorage.setItem("chaptersResponse", JSON.stringify(chapterData));
	}

	return res;
}
