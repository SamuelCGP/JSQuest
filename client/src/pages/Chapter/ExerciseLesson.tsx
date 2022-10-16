import { MainContainer } from "./ExerciseLesson.styles";
import {
	Container1,
	Container2,
	SplitContainer,
} from "../../components/ExerciseLesson/SplitedContainers/SplitedContainers.style";
import { Params, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { get, save } from "../../api/lesson";
import {
	LessonBoardProps,
	CodeEditor,
	MainHeading,
	ExerciseInfo,
	ExerciseInfoProps,
	LessonBoard,
} from "../../components";
import { getInitialEditorState } from "./getInitialEditorState";
import { getBoardConfig } from "./getBoardConfig";
import { getExerciseInfo } from "./getExerciseInfo";

function ExerciseLesson() {
	const { c_index, l_index }: Readonly<Params<string>> = useParams();
	const [editorState, setEditorState] = useState("");
	const [boardConfig, setBoardConfig] = useState<LessonBoardProps | null>();
	const [exerciseInfo, setExerciseInfo] =
		useState<ExerciseInfoProps | null>();

	useEffect(() => {
		if (c_index && l_index) {
			getInitialEditorState(c_index, l_index).then((data) => {
				setEditorState(data);
			});
			getBoardConfig(c_index, l_index).then((data) => {
				setBoardConfig(data);
				console.log(data);
			});
			getExerciseInfo(c_index, l_index).then((data) => {
				setExerciseInfo(data);
			});
		}
	}, []);

	const saveCode = (code: string) => {
		if (c_index && l_index)
			save(parseInt(c_index), parseInt(l_index), code);
	};

	if (boardConfig !== null && boardConfig !== undefined && exerciseInfo)
		return (
			<MainContainer>
				<SplitContainer direction="vertical" minSize={[300, 100]}>
					<Container1>
						<LessonBoard config={boardConfig}></LessonBoard>
					</Container1>
					<Container2>
						<CodeEditor
							value={editorState}
							setEditorState={setEditorState}
							saveCode={saveCode}
							c_index={c_index}
							l_index={l_index}
						/>
					</Container2>
				</SplitContainer>
				<ExerciseInfo
					title={exerciseInfo.title}
					text={exerciseInfo.text}
				></ExerciseInfo>
			</MainContainer>
		);

	if (boardConfig === null) return <Navigate to="/home" replace />;

	return (
		<MainContainer>
			<MainHeading>Processando</MainHeading>;
		</MainContainer>
	);
}

export default ExerciseLesson;
