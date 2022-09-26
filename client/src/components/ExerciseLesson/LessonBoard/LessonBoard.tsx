import { useState } from "react";
import { Robot } from "../BoardElements/Robot/Robot";
import { Board, Cell } from "./LessonBoard.styles";

interface Elements {
	element: JSX.Element;
}

export interface LessonBoardProps {
	build: {
		columns: number;
		rows?: number;
	};
	elements?: Elements[];
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
	const [elements, setElements] = useState(
		props.config.hasOwnProperty("elements") ? props.config.elements : []
	);

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
	for (rows; rows > 0; rows--) {
		columns = totalColumns;
		for (columns; columns > 0; columns--) {
			// placing tile's cell
			tiles.push(<Cell positionX={columns} positionY={rows} />);
			// placing tile's element (if it has one)
			let element = placeElements(columns, rows, elements);
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
	elements: Elements[] | any
): JSX.Element | undefined => {
	if (elements.length == 0 || elements == undefined) return;

	let finalElement;

	elements.forEach((element: Elements) => {
		if (
			element.element.props.positionX == row &&
			element.element.props.positionY == column
		) {
			finalElement = element.element;
		}
	});

	if (finalElement) return finalElement;
	else return;
};
