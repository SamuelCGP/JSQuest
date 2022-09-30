import { LessonCardWrapper, LessonIcon, LessonName } from "./LessonCard.styles";
import { ProgressCircle as LessonCircle } from "../ProgressCircle/ProgressCircle";

interface LessonCardProps {
	title: string;
	icon: string;
	completed: boolean;
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

export function LessonCard(props: LessonCardProps) {
	return (
		<LessonCardWrapper onClick={props.onClick}>
			<LessonIcon>
				<LessonCircle value={props.completed ? 1 : 0} maxValue={1} />
				<img src={props.icon} className="lessonImg"></img>
			</LessonIcon>
			<LessonName>{props.title}</LessonName>
		</LessonCardWrapper>
	);
}
