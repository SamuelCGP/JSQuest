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
import { useEffect, useState } from "react";
import getUserProgress from "./getUserProgress";
import LessonCard from "../../components/Home/LessonCard/LessonCard";
import Logout from "../../utils/Logout";

function Home() {
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

	if (userProgress.status === 200)
		return (
			<MainContainer>
				<Header>Sua jornada</Header>

				<ChapterContainer>
					<ChapterIcon>
						<ProgressCircle value={25} maxValue={100} />
						<HiVariable className="chapterSvg" />
					</ChapterIcon>
					<ChapterName>Variáveis</ChapterName>
					<LessonGroup>
						<LessonCard
							title={
								userProgress.data.chapters[0].data.lessons[0]
									.title
							}
							icon="img/ch1le1.png"
							completed={
								userProgress.data.chapters[0].data.lessons[0]
									.completed
							}
						/>
						<LessonCard
							title={
								userProgress.data.chapters[0].data.lessons[1]
									.title
							}
							icon="img/ch1le1.png"
							completed={
								userProgress.data.chapters[0].data.lessons[1]
									.completed
							}
						/>
						<LessonCard
							title={
								userProgress.data.chapters[0].data.lessons[2]
									.title
							}
							icon="img/ch1le1.png"
							completed={
								userProgress.data.chapters[0].data.lessons[2]
									.completed
							}
						/>
					</LessonGroup>
				</ChapterContainer>

				<ChapterContainer>
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
						/>
					</LessonGroup>
				</ChapterContainer>

				<Blank />
			</MainContainer>
		);

	if (userProgress.status === 400 || userProgress.status === 401)
		return <Logout />;

	return <Header>{userProgress.message}</Header>;
}

export default Home;
