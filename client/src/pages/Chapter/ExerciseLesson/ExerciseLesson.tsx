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
	chapterIndex: string;
	lessonIndex: string;
}

function ExerciseLesson(props: ExerciseLessonProps) {
	const { c_index, l_index }: Readonly<Params<string>> = useParams();
	const [editorState, setEditorState] = useState("");
	const [boardConfig, setBoardConfig] = useState<LessonBoardProps | null>();
	const [isSubmitting, setSubmitting] = useState(false);

	const [exerciseInfo, setExerciseInfo] = useState<ExerciseInfoProps | null>();
	let lessonData = useRef();
	let initialBoardConfigData: React.MutableRefObject<
		LessonBoardProps | null | undefined
	> = useRef();

	useEffect(() => {
		lessonData.current = props.lessonData;

		initialBoardConfigData.current = getBoardConfigFromApi(lessonData.current);
		setEditorState(getInitialEditorState(lessonData.current));
		setBoardConfig(initialBoardConfigData.current);
		setExerciseInfo(getExerciseInfoFromApi(lessonData.current));
	}, []);

	const saveCode = (code: string) => {
		if (props.chapterIndex && props.lessonIndex) {
			save(props.chapterIndex, props.lessonIndex, code);
		}
	};

	if (boardConfig !== null && boardConfig !== undefined && exerciseInfo)
		return (
			<>
				<Popup type={"completion"} />
				<MainContainer>
					<SplitContainer direction="vertical" minSize={[300, 100]}>
						<Container1>
							<LessonBoard chapterIndex={c_index!} lessonIndex={l_index!} config={boardConfig}></LessonBoard>
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
									className={isSubmitting ? "loading" : ""}
									disabled={isSubmitting}
									onClick={() => {
										setSubmitting(true);
										
										setBoardConfig(initialBoardConfigData.current);
										
										runCode(c_index, l_index, editorState).then(res => {
											console.log(res)
											setSubmitting(false);
										});
									}}
								>
									<span className="btn-text">Enviar</span>
								</CodeSubmitButton>
								<CodeRefreshButton
									onClick={() => {
										setEditorState(refreshEditorState(lessonData.current!));
										setBoardConfig(initialBoardConfigData.current);
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

	if (boardConfig === null) return <Navigate to="/" replace />;

	return (
		<MainContainer>
			<MainHeading>Processando...</MainHeading>;
		</MainContainer>
	);
}

export default ExerciseLesson;
