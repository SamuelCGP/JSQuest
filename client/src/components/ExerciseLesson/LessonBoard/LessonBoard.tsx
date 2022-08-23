import { useState } from "react";
import { Board, Cell } from "./LessonBoard.styles";

interface LessonBoardProps {
	columns: number;
	rows?: number;
}

export function LessonBoard(props: LessonBoardProps) {
	const [columns, setColumns] = useState(props.columns ? props.columns : 1);
	const [rows, setRows] = useState(props.rows ? props.rows : props.columns);

	return (
		<Board columns={columns} rows={rows}>
			{fillBoard(columns, rows)}
		</Board>
	);
}

export const fillBoard = (
	columns: number,
	rows: number
): Array<JSX.Element> => {
	let tiles: Array<JSX.Element> = [];
	const totalColumns = columns;
	for (rows; rows > 0; rows--) {
		columns = totalColumns;
		for (columns; columns > 0; columns--) {
			tiles.push(<Cell positionX={columns} positionY={rows}></Cell>);
		}
	}
	return tiles.map((val) => val);
};
