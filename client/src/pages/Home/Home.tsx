import {
	MainContainer,
	ChapterContainer,
	ChapterIcon,
	ProgressCircle,
	ChapterName,
	Header,
	LessonGroup,
	Blank,
} from "./Home.styles";
import { HiVariable } from "react-icons/hi";
import { VscSymbolOperator } from "react-icons/vsc";
import { useState } from "react";
import getUserProgress, { ChapterI, UserProgressI } from "./getUserProgress";
import { LessonCard } from "../../components";
import Logout from "../../utils/Logout";
import { useNavigate } from "react-router-dom";
import { LessonI } from './getUserProgress';

function Home() {
	const navigate = useNavigate();

	const [userProgress, setUserProgress]: any = useState({
		data: {},
		status: 102,
		message: "Processando",
	});

	(async function updateUserProgress() {
		if (userProgress.status === 102) {
			setUserProgress(await getUserProgress());
		}
	})();

	if (userProgress.status === 200) {
		const data: UserProgressI = userProgress.data;

		return (
			<MainContainer>
				<Header>Sua jornada</Header>

				{data.chapters.map((chapter, chapterIndex) => (
					<ChapterContainer>
						
						<ChapterIcon>
							<ProgressCircle
								value={chapter.data.lessons.reduce(
									(total: number, currentValue: LessonI) =>
										currentValue.completed ? total + 1 : total,
									0
								)}
								maxValue={chapter.data.lessons.length}
							/>
							<HiVariable className="chapterSvg" />
						</ChapterIcon>
						<ChapterName>{chapter.data.title}</ChapterName>
						<LessonGroup>
							{chapter.data.lessons.map((lesson, lessonIndex) => (
								<LessonCard
									title={lesson.title}
									icon={`img/ch${chapterIndex}le${lessonIndex}.png`}
									completed={lesson.completed}
									onClick={() => {
										navigate(`/chapter/${chapterIndex}/lesson/${lessonIndex}`);
									}}
								></LessonCard>
							))}
						</LessonGroup>
					</ChapterContainer>
				))}

				{/* <ChapterContainer>
					<ChapterIcon>
						<ProgressCircle value={25} maxValue={100} />
						<VscSymbolOperator className="chapterSvg" />
					</ChapterIcon>
					<ChapterName>Operadores</ChapterName>
					<LessonGroup>
						<LessonCard
							title={
								userProgress.data.chapters[1].data.lessons[0]
									.title
							}
							icon="img/ch1le1.png"
							completed={
								userProgress.data.chapters[1].data.lessons[0]
									.completed
							}
							onClick={() => {
								navigate("/chapter/1/lesson/0");
							}}
						/>
						<LessonCard
							title={
								userProgress.data.chapters[1].data.lessons[1]
									.title
							}
							icon="img/ch1le1.png"
							completed={
								userProgress.data.chapters[1].data.lessons[1]
									.completed
							}
							onClick={() => {
								navigate("/chapter/1/lesson/1");
							}}
						/>
						<LessonCard
							title={
								userProgress.data.chapters[1].data.lessons[2]
									.title
							}
							icon="img/ch1le1.png"
							completed={
								userProgress.data.chapters[1].data.lessons[2]
									.completed
							}
							onClick={() => {
								navigate("/chapter/1/lesson/2");
							}}
						/>
					</LessonGroup>
					<LessonGroup center>
						<LessonCard
							title={
								userProgress.data.chapters[1].data.lessons[3]
									.title
							}
							icon="img/ch1le1.png"
							completed={
								userProgress.data.chapters[1].data.lessons[3]
									.completed
							}
							onClick={() => {
								navigate("/chapter/0/lesson/3");
							}}
						/>
					</LessonGroup>
				</ChapterContainer> */}

				<Blank />
			</MainContainer>
		);
	}

	if (userProgress.status === 400 || userProgress.status === 401)
		return <Logout />;

	return <Header>{userProgress.message}</Header>;
}

export default Home;
