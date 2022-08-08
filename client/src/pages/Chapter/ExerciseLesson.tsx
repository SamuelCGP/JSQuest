import { MainContainer } from "./ExerciseLesson.styles";
import { SplitedContainers } from "../../components";
import {
	Container1,
	SplitContainer,
} from "../../components/SplitedContainers/SplitedContainers.style";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import { Params, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get, save } from "../../api/solution";

function ExerciseLesson() {
	const { l_index, c_index }: Readonly<Params<string>> = useParams();
	const [editorState, setEditorState] = useState("");

	async function getInitialEditorState(): Promise<string> {
		if (c_index && l_index) {
			const res = await get(parseInt(c_index), parseInt(l_index));
			const content: string = res.data.solution.content;
			if (content) return content;
			else return "";

			//TODO definir código inicial como código inicial da lição, caso o usuário não tenha um código salvo
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

	return (
		<MainContainer>
			<SplitContainer direction="vertical">
				<Container1></Container1>
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
