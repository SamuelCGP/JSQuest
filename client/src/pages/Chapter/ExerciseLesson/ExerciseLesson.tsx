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
	Popup,
} from "../../../components";
import { getInitialEditorState } from "./getInitialEditorState";
import { getBoardConfigFromApi } from "./getBoardConfigFromApi";
import { getExerciseInfoFromApi } from "./getExerciseInfoFromApi";
import {
	ButtomContainer,
	CodeSubmitButton,
	CodeRefreshButton,
	ErrorIndicator,
	ErrorXButton,
} from "../../../components/ExerciseLesson/CodeEditor/CodeEditor.styles";
import { runCode } from "../../../game/runCode";
import { LessonI } from "../../Home/getUserProgress";
import refreshEditorState from "./refreshEditorState";
import { fireSignal } from "../../../game/signals";

interface ExerciseLessonProps {
	lessonData: any;
}

function ExerciseLesson(props: ExerciseLessonProps) {
	const { c_index, l_index }: Readonly<Params<string>> = useParams();
	const [editorState, setEditorState] = useState("");
	const [boardConfig, setBoardConfig] = useState<LessonBoardProps | null>();

	const [exerciseInfo, setExerciseInfo] =
		useState<ExerciseInfoProps | null>();
	let lessonData = useRef();
	let initialBoardConfigData: React.MutableRefObject<
		LessonBoardProps | null | undefined
	> = useRef();

	useEffect(() => {
		lessonData.current = props.lessonData;

		initialBoardConfigData.current = getBoardConfigFromApi(
			lessonData.current
		);
		setEditorState(getInitialEditorState(lessonData.current));
		setBoardConfig(initialBoardConfigData.current);
		setExerciseInfo(getExerciseInfoFromApi(lessonData.current));
	}, []);

	const saveCode = (code: string) => {
		if (c_index && l_index) {
			save(parseInt(c_index), parseInt(l_index), code);
		}
	};

	if (boardConfig !== null && boardConfig !== undefined && exerciseInfo)
		return (
			<>
				<Popup type={"completion"} />
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
								<ErrorIndicator id="error-indicator">
									<span id="error-message"></span>
									<ErrorXButton
										onClick={(event: any) =>
											(document.getElementById(
												"error-indicator"
											)!.style.display = "none")
										}
									>
										✖
									</ErrorXButton>
								</ErrorIndicator>
								<CodeSubmitButton
									onClick={() => {
										console.log(boardConfig);
										setBoardConfig(
											initialBoardConfigData.current
										);

										runCode(c_index, l_index, editorState);
									}}
								>
									Enviar
								</CodeSubmitButton>
								<CodeRefreshButton
									onClick={() => {
										setEditorState(
											refreshEditorState(
												lessonData.current!
											)
										);
										setBoardConfig(
											initialBoardConfigData.current
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
			</>
		);

	if (boardConfig === null) return <Navigate to="/home" replace />;

	return (
		<MainContainer>
			<MainHeading>Processando...</MainHeading>;
		</MainContainer>
	);
}

export default ExerciseLesson;
