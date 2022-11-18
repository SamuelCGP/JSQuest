import { HTTPMethods, makeRequest } from "../http";

export async function save(chapterIndex: string, lessonIndex: string, solution: string) {
    
    const data = {
        solution
    }
    
    const headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json;charset=UTF-8",
    }
    
    try {
        await makeRequest(HTTPMethods.POST, `lesson/${chapterIndex}/${lessonIndex}`, headers, data);
    } catch(err) {
        console.error(err);
    }
}