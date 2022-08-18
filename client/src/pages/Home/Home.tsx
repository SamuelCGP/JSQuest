import {
	MainContainer,
	ChapterContainer,
	ChapterIcon,
	ProgressCircle,
	ChapterName,
	Header,
	LessonGroup,
	LessonCard,
	LessonIcon,
	LessonCircle,
	LessonName,
	Blank,
} from "./Home.styles";
import { HiVariable } from "react-icons/hi";
import { VscSymbolOperator } from "react-icons/vsc";
import { useState } from "react";
import getUserProgress from "./getUserProgress";

function Home() {
	const [userProgress, setUserProgress] = useState("");
	(async function updateUserProgress() {
		setUserProgress(await getUserProgress());
	})();
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
					<LessonCard>
						<LessonIcon>
							<LessonCircle value={0} maxValue={1} />
							<img
								src={require("../../img/ch1le1.png")}
								className="lessonImg"
							></img>
						</LessonIcon>
						<LessonName>Conhecendo variáveis</LessonName>
					</LessonCard>
					<LessonCard>
						<LessonIcon>
							<LessonCircle value={0} maxValue={1} />
							<img
								src="http://localhost:3001/images/chapters/0/download.jpg"
								className="lessonImg"
							></img>
						</LessonIcon>
						<LessonName>Nomeando o robô</LessonName>
					</LessonCard>
					<LessonCard>
						<LessonIcon>
							<LessonCircle value={0} maxValue={1} />
						</LessonIcon>
						<LessonName>Imprimindo uma variável</LessonName>
					</LessonCard>
				</LessonGroup>
			</ChapterContainer>
			<ChapterContainer>
				<ChapterIcon>
					<ProgressCircle value={25} maxValue={100} />
					<VscSymbolOperator className="chapterSvg" />
				</ChapterIcon>
				<ChapterName>Operadores</ChapterName>
				<LessonGroup>
					<LessonCard>
						<LessonIcon>
							<LessonCircle value={0} maxValue={1} />
						</LessonIcon>
						<LessonName>Conhecendo operadores</LessonName>
					</LessonCard>
					<LessonCard>
						<LessonIcon>
							<LessonCircle value={0} maxValue={1} />
						</LessonIcon>
						<LessonName>Primeiras operações</LessonName>
					</LessonCard>
					<LessonCard>
						<LessonIcon>
							<LessonCircle value={0} maxValue={1} />
						</LessonIcon>
						<LessonName>O robô comprou maçãs</LessonName>
					</LessonCard>
				</LessonGroup>
				<LessonGroup center>
					<LessonCard>
						<LessonIcon>
							<LessonCircle value={0} maxValue={1} />
						</LessonIcon>
						<LessonName>Realizando um cálculo complexo</LessonName>
					</LessonCard>
				</LessonGroup>
			</ChapterContainer>
			<Blank />
		</MainContainer>
	);
}

export default Home;
