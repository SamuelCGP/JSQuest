import { MainContainer } from "./ExerciseLesson.styles";
import { SplitedContainers } from "../../components";
import {
	Container1,
	SplitContainer,
} from "../../components/SplitedContainers/SplitedContainers.style";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import { useParams } from "react-router-dom";
import { useState } from "react";

function ExerciseLesson() {
	const { l_index } = useParams();
	const [editorState, setEditorState] = useState("");

	/*TODO puxar código do usuário do banco de dados com base no index da lição e capitulo
	e definir como valor inicial do state caso não exista código do usuário salvo,
	definir código inicial da lição como valor inicial*/

	return (
		<MainContainer>
			<SplitContainer direction="vertical">
				<Container1></Container1>
				{/* <Container2></Container2> */}
				<CodeEditor value={editorState} setEditorState={setEditorState} />
			</SplitContainer>
		</MainContainer>
	);
}

export default ExerciseLesson;
