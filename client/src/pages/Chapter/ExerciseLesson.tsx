import { MainContainer } from "./ExerciseLesson.styles";
import { SplitedContainers, LessonBoard } from "../../components";
import {
	Container1,
	SplitContainer,
} from "../../components/ExerciseLesson/SplitedContainers/SplitedContainers.style";
import CodeEditor from "../../components/ExerciseLesson/CodeEditor/CodeEditor";
import { Params, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get, save } from "../../api/lesson";
import { LessonBoardProps } from "../../components";

function ExerciseLesson() {
	const { l_index, c_index }: Readonly<Params<string>> = useParams();
	const [editorState, setEditorState] = useState("");
	let initialCode: string;

	async function getInitialEditorState(): Promise<string> {
		if (c_index && l_index) {
			const res = await get(parseInt(c_index), parseInt(l_index));
			const content: string = res.data.solution.content;
			if (content) return content;
			else {
				initialCode = res.data.lesson.initial_code;
				return initialCode;
			}
		}

		return "";
	}

	useEffect(() => {
		getInitialEditorState().then((data) => {
			setEditorState(data);
		});
	}, []);

	const saveCode = (code: string) => {
		if (c_index && l_index)
			save(parseInt(c_index), parseInt(l_index), code);
	};

	const BoardConfig: LessonBoardProps = {
		build: {
			columns: 10,
		},
		elements: {
			robot: {
				x: 1,
				y: 1,
				element: <h1>Robot</h1>,
			},
		},
	};

	return (
		<MainContainer>
			<SplitContainer direction="vertical" minSize={[300, 100]}>
				<Container1>
					<LessonBoard config={BoardConfig}></LessonBoard>
				</Container1>
				{/* <Container2></Container2> */}
				<CodeEditor
					value={editorState}
					setEditorState={setEditorState}
					saveCode={saveCode}
				/>
			</SplitContainer>
		</MainContainer>
	);
}

export default ExerciseLesson;
