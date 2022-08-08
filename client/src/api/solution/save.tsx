import { HTTPMethods, makeRequest } from "../http";

export async function save(chapterIndex: number, lessonIndex: number, solution: string) {
    
    const data = {
        solution
    }
    
    const headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json;charset=UTF-8",
    }
    
    try {
        await makeRequest(HTTPMethods.POST, `solution/${chapterIndex}/${lessonIndex}`, headers, data);
        console.log("code saved");
    } catch(err) {
        console.error(err);
    }
}