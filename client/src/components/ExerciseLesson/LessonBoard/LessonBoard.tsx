import { useState } from "react";
import { Board, Cell } from "./LessonBoard.styles";

interface Elements {
	x: number;
	y: number;
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
		props.config.hasOwnProperty('elements')
			? props.config.elements
			: []
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
			tiles.push(<Cell positionX={columns} positionY={rows}>
				{
					placeElements(columns, rows, elements)
				}
			</Cell>);
		}
	}
	return tiles.map((val) => val);
};

const placeElements = (column: number, row: number, elements: Elements[] | any): JSX.Element | any => {
	if(elements.length == 0 || elements == undefined) return null;

	elements.forEach((element: Elements) => {
		if( element.x == row && element.y == column){
			return element.element;
		}
	});
}
