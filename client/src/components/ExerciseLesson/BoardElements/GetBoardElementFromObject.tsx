import { BoardElement } from "./BoardElement";
import { Elements } from "../LessonBoard/LessonBoard";

export default function getElementFromObject(
	elementObj: Elements,
	totalColumns: number,
	totalRows: number
) {
	return (
		<BoardElement
			positionX={elementObj.x}
			positionY={elementObj.y}
			columnNumber={totalColumns}
			rowNumber={totalRows}
			type={elementObj.element}
		/>
	);
}
