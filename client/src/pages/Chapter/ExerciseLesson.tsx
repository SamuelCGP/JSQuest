import { MainContainer } from "./ExerciseLesson.styles";
import { SplitedContainers } from "../../components";
import {
	Container1,
	SplitContainer,
} from "../../components/SplitedContainers/SplitedContainers.style";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import { Params, useParams } from "react-router-dom";
import { useState } from "react";
import { get, save } from "../../api/solution";

function ExerciseLesson() {
	const { l_index, c_index }: Readonly<Params<string>> = useParams();

	async function getInitialEditorState(): Promise<string> {
		if (c_index && l_index) {
			try {
				const res = await get(parseInt(c_index), parseInt(l_index));
				const content: string = res.data.content;
				if (content) return content;
				else return "";
			} catch (err) {
				console.error(err);
			}
		} 
		
		return "";
	}

	const [editorState, setEditorState] = useState(getInitialEditorState().then(state => {return state;}));

	/*TODO puxar código do usuário do banco de dados com base no index da lição e capitulo
	e definir como valor inicial do state caso não exista código do usuário salvo,
	definir código inicial da lição como valor inicial*/

	const saveCode = () => {
		editorState.then(state => {
			if (c_index && l_index) save(parseInt(c_index), parseInt(l_index), state);
		});
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
