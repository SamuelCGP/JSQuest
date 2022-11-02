import { MainContainer } from "./ExerciseLesson.styles";
import {
	Container1,
	Container2,
	SplitContainer,
} from "../../../components/ExerciseLesson/SplitedContainers/SplitedContainers.style";
import { Params, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import { get, save } from "../../../api/lesson";
import {
	LessonBoardProps,
	CodeEditor,
	MainHeading,
	ExerciseInfo,
	ExerciseInfoProps,
	LessonBoard,
} from "../../../components";
import { getInitialEditorState } from "./getInitialEditorState";
import { getBoardConfigFromApi } from "./getBoardConfigFromApi";
import { getExerciseInfoFromApi } from "./getExerciseInfoFromApi";
import {
	ButtomContainer,
	CodeSubmitButton,
	CodeRefreshButton,
} from "../../../components/ExerciseLesson/CodeEditor/CodeEditor.styles";
import { runCode } from "../../../game/runCode";
import { LessonI } from "../../Home/getUserProgress";
import refreshEditorState from "./refreshEditorState";
import { fireSignal } from "../../../game/signals";

function ExerciseLesson() {
	const { c_index, l_index }: Readonly<Params<string>> = useParams();
	const [editorState, setEditorState] = useState("");
	const [boardConfig, setBoardConfig] = useState<LessonBoardProps | null>();
	const [exerciseInfo, setExerciseInfo] =
		useState<ExerciseInfoProps | null>();
	let lessonData = useRef();

	useEffect(() => {
		if (c_index && l_index) {
			get(Number(c_index), Number(l_index)).then((res) => {
				lessonData.current = res.data;

				setEditorState(getInitialEditorState(lessonData.current));
				setBoardConfig(getBoardConfigFromApi(lessonData.current));
				setExerciseInfo(getExerciseInfoFromApi(lessonData.current));
			});
		}
	}, []);

	const saveCode = (code: string) => {
		if (c_index && l_index) {
			save(parseInt(c_index), parseInt(l_index), code);
		}
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
						<ButtomContainer>
							<CodeSubmitButton
								onClick={() => {
									runCode(c_index, l_index, editorState);
								}}
							>
								Enviar
							</CodeSubmitButton>
							<CodeRefreshButton
								onClick={() => {
									console.log(lessonData.current);
									setEditorState(
										refreshEditorState(lessonData.current!)
									);
									fireSignal("boardReset", {});
								}}
							>
								Recomeçar
							</CodeRefreshButton>
						</ButtomContainer>
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
