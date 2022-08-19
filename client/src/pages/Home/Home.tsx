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

function Home() {
	const [userProgress, setUserProgress]: any = useState();

	(async function updateUserProgress() {
		if (!userProgress) {
			setUserProgress(await getUserProgress());
		}
	})();

	if (userProgress)
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
								userProgress.chapters[0].data.lessons[0].title
							}
							icon="../../img/ch1le1.png"
							completed={
								userProgress.chapters[0].data.lessons[0]
									.completed
							}
						/>
						<LessonCard
							title={
								userProgress.chapters[0].data.lessons[1].title
							}
							icon="../../img/ch1le1.png"
							completed={
								userProgress.chapters[0].data.lessons[1]
									.completed
							}
						/>
						<LessonCard
							title={
								userProgress.chapters[0].data.lessons[2].title
							}
							icon="../../img/ch1le1.png"
							completed={
								userProgress.chapters[0].data.lessons[2]
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
								userProgress.chapters[1].data.lessons[0].title
							}
							icon="../../img/ch1le1.png"
							completed={
								userProgress.chapters[1].data.lessons[0]
									.completed
							}
						/>
						<LessonCard
							title={
								userProgress.chapters[1].data.lessons[1].title
							}
							icon="../../img/ch1le1.png"
							completed={
								userProgress.chapters[1].data.lessons[1]
									.completed
							}
						/>
						<LessonCard
							title={
								userProgress.chapters[1].data.lessons[2].title
							}
							icon="../../img/ch1le1.png"
							completed={
								userProgress.chapters[1].data.lessons[2]
									.completed
							}
						/>
					</LessonGroup>
					<LessonGroup center>
						<LessonCard
							title={
								userProgress.chapters[1].data.lessons[3].title
							}
							icon="../../img/ch1le1.png"
							completed={
								userProgress.chapters[1].data.lessons[3]
									.completed
							}
						/>
					</LessonGroup>
				</ChapterContainer>

				<Blank />
			</MainContainer>
		);

		return <></>;
}

export default Home;
