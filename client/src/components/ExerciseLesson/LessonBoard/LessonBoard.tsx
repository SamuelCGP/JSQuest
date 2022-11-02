import { useState, useEffect } from "react";
import { Board, Cell } from "./LessonBoard.styles";
import getBoardElementFromObject from "../BoardElements/GetBoardElementFromObject";
import { BoardMatrix } from "../../../game/BoardMatrix";
import * as signals from "../../../game/signals";

export interface Elements {
	x: number;
	y: number;
	element: string;
}

export interface LessonBoardProps {
	build: {
		columns: number;
		rows?: number;
	};
	elements: Elements[];
}

export function LessonBoard(props: { config: LessonBoardProps }) {
	const columns = props.config.build.columns;
	const rows = props.config.build.rows
		? props.config.build.rows
		: props.config.build.columns;
	const elements = props.config.elements ? props.config.elements : [];
	const [boardMatrix, setBoardMatrix] = useState<BoardMatrix>(
		new BoardMatrix(columns, rows, elements)
	);

	signals.listenToSignal("robotReqMovement", (movement) => {
		boardMatrix.attemptMovement(
			movement.detail.x,
			movement.detail.y,
			movement.detail.id
		);
	});

	signals.listenToSignal("boardReset", () => {
		setBoardMatrix(new BoardMatrix(columns, rows, elements));
	});

	return (
		<Board columns={columns} rows={rows}>
			{fillBoard(columns, rows, elements)}
		</Board>
	);
}

const fillBoard = (
	columns: number,
	rows: number,
	elements: Elements[] | any
): Array<JSX.Element> => {
	let tiles: Array<JSX.Element> = [];
	const totalColumns = columns;
	const totalRows = rows;

	for (rows; rows > 0; rows--) {
		columns = totalColumns;
		for (columns; columns > 0; columns--) {
			// placing tile's cell
			tiles.push(<Cell positionX={columns} positionY={rows} />);
			// placing tile's element (if it has one)
			let element = placeElements(
				columns,
				rows,
				elements,
				totalColumns,
				totalRows
			);
			if (element) {
				tiles.push(element);
			}
		}
	}
	return tiles.map((val) => val);
};

const placeElements = (
	column: number,
	row: number,
	elements: Elements[] | any,
	totalColumns: number,
	totalRows: number
): JSX.Element | undefined => {
	if (elements.length === 0 || elements === undefined) return;

	let finalElement;

	elements.forEach((element: Elements) => {
		if (element.x === column && element.y === row) {
			finalElement = getBoardElementFromObject(
				element,
				totalColumns,
				totalRows
			);
		}
	});

	if (finalElement) return finalElement;
	else return;
};
