import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ColorPalette from "../../../utils/ColorPalette";

interface ProgressCircleProps {
	value: number;
	maxValue: number;
}

export function ProgressCircle(props: ProgressCircleProps) {
	return (
		<div>
			<CircularProgressbar
				value={props.value}
				maxValue={props.maxValue}
				styles={buildStyles({
					textColor: ColorPalette.black,
					pathColor: ColorPalette.progressBlue,
				})}
			/>
		</div>
	);
}