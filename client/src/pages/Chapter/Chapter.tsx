import { Params, useParams } from "react-router-dom";
import { get } from "../../api/lesson";
import { useEffect, useState } from "react";
import { MainHeading } from "../../components";
import ExerciseLesson from "./ExerciseLesson/ExerciseLesson";
import TheoricalLesson from "./TheoricalLesson/TheoricalLesson";

export default function Chapter() {
	const { c_index, l_index }: Readonly<Params<string>> = useParams();
	const [lessonType, setLessonType] = useState<string>();
	const [lessonData, setLessonData] = useState();

	useEffect(() => {
		if (c_index && l_index) {
			get(Number(c_index), Number(l_index)).then((res) => {
				const lessonData = res.data;
				const lessonType = res.data.lesson.type;
				setLessonData(lessonData);
				setLessonType(lessonType);
			});
		}
	}, []);

	if (lessonType === "practical") {
		return <ExerciseLesson chapterIndex={c_index!} lessonIndex={l_index!} lessonData={lessonData} />;
	}

	if (lessonType === "theorical") {
		return <TheoricalLesson chapterIndex={c_index!} lessonIndex={l_index!} lessonData={lessonData} />;
	}

	return <MainHeading>Processando...</MainHeading>;
}
