import {
	MainContainer,
	ChapterContainer,
	ChapterIcon,
	ProgressCircle,
	ChapterName,
	Header,
	LessonGroup,
	LessonCard,
	LessonCircle,
	LessonName,
	Blank
} from "./Home.styles";
import { HiVariable } from "react-icons/hi";
import { VscSymbolOperator } from "react-icons/vsc";

function Home() {
	return (
		<MainContainer>
			<Header>Sua jornada</Header>
			<ChapterContainer>
				<ChapterIcon>
					<ProgressCircle value={25} maxValue={100}/>
					<HiVariable className="chapterSvg"/>
				</ChapterIcon>
				<ChapterName>Variáveis</ChapterName>
				<LessonGroup>
					<LessonCard>
						<LessonCircle value={0} maxValue={1}/>
						<LessonName>Conhecendo variáveis</LessonName>
					</LessonCard>
					<LessonCard>
						<LessonCircle value={0} maxValue={1}/>
						<LessonName>Nomeando o robô</LessonName>
					</LessonCard>
					<LessonCard>
						<LessonCircle value={0} maxValue={1}/>
						<LessonName>Imprimindo uma variável</LessonName>
					</LessonCard>
				</LessonGroup>
			</ChapterContainer>
			<ChapterContainer>
				<ChapterIcon>
					<ProgressCircle value={25} maxValue={100}/>
					<VscSymbolOperator className="chapterSvg"/>
				</ChapterIcon>
				<ChapterName>Operadores</ChapterName>
				<LessonGroup>
					<LessonCard>
						<LessonCircle value={0} maxValue={1}/>
						<LessonName>Conhecendo operadores</LessonName>
					</LessonCard>
					<LessonCard>
						<LessonCircle value={0} maxValue={1}/>
						<LessonName>Realizando um cálculo complexo</LessonName>
					</LessonCard>
					<LessonCard>
						<LessonCircle value={0} maxValue={1}/>
						<LessonName>O robô comprou maçãs</LessonName>
					</LessonCard>
				</LessonGroup>
			</ChapterContainer>
			<Blank/>
		</MainContainer>
	);
}

export default Home;
