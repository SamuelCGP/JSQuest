import ColorPalette from "../../utils/ColorPalette";
import styled from "styled-components";
import { Container, MainHeading } from "../../components/Global";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const MainContainer = styled(Container)`
	@media (min-width: 900px) {
		padding: 1rem;
	}
`;

export const Header = styled(MainHeading)`
	color: ${ColorPalette.yellowOrange};
	@media (min-width: 900px) {
		font-size: 3rem;
	}
`;

export const ChapterContainer = styled(Container)`
	background-color: ${ColorPalette.white};
	padding: 50px;
	margin-top: 7rem;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	border-bottom: 10px solid ${ColorPalette.blueGray};
	-webkit-box-shadow: 1px 9px 13px 2px rgba(0, 0, 0, 0.1);
	box-shadow: 1px 9px 13px 2px rgba(0, 0, 0, 0.1);
`;

export const ChapterIcon = styled.div`
	width: 7rem;
	height: 7rem;
	background-color: ${ColorPalette.white};
	border-radius: 100%;
	border: 5px solid ${ColorPalette.white};
	position: absolute;
	top: -3.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	& .chapterSvg{
		position: absolute;
		width: 60%;
		height: 60%;
	}
`;

export const ProgressCircle = styled(ProgressCircleComponent)``;

interface ProgressCircleProps {
	value: number;
	maxValue: number;
}

function ProgressCircleComponent(props: ProgressCircleProps) {
	return (
		<div>
			<CircularProgressbar
				value={props.value}
				maxValue={props.maxValue}
				styles={buildStyles({
					textColor: ColorPalette.black,
					pathColor: ColorPalette.blueGray,
				})}
			/>
		</div>
	);
}

export const ChapterName = styled.h1`
	padding: 0.7rem;
`;

interface LessonGroupProps {
	center?: boolean;
}

export const LessonGroup = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 900px) {
		width: 100%;
		flex-direction: row;
		justify-content: ${(props: LessonGroupProps) => (props.center ? "center" : "space-between")};
		align-items: center;
	}
`;

export const Blank = styled.div`
	height: 10rem;
	@media (min-width: 900px) {
		display: none;
	}
`;