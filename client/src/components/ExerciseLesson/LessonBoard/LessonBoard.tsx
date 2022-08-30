import { useState } from "react";
import { Board, Cell } from "./LessonBoard.styles";

export interface LessonBoardProps {
	build: {
		columns: number;
		rows?: number;
	};
	elements?: {
		[key: string]: {
			x: number;
			y: number;
			element: JSX.Element;
		};
	};
}

export function LessonBoard(props: { config: LessonBoardProps }) {
	const [columns, setColumns] = useState(
		props.config.build.columns ? props.config.build.columns : 1
	);
	const [rows, setRows] = useState(
		props.config.build.rows
			? props.config.build.rows
			: props.config.build.columns
	);

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
