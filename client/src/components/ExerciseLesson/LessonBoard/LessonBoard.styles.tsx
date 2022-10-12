import ColorPalette from "../../../utils/ColorPalette";
import styled from "styled-components";
import Alphabet from "../../../utils/Alphabet";

interface BoardProps {
	columns: number;
	rows: number;
}

export const Board = styled.div`
	position: relative;
	aspect-ratio: ${(props: BoardProps) => (props.columns ? props.columns : 1)} /
		${(props: BoardProps) => (props.rows ? props.rows : props.columns)};

	height: 90%;
	background: ${ColorPalette.secondary};

	display: grid;
	grid-template-columns: repeat(
		${(props: BoardProps) => (props.columns ? props.columns : 1)},
		1fr
	);
	grid-template-rows: repeat(
		${(props: BoardProps) => (props.rows ? props.rows : props.columns)},
		1fr
	);

	@media (max-width: 900px) {
		max-height: 90vw;
		max-width: 90%;
	}
`;

interface CellProps {
	positionX: number;
	positionY: number;
}

export const Cell = styled.div`
	width: 100%;
	height: 100%;
	background: ${(props: CellProps) => {
		if (props.positionX % 2 !== 0) {
			if (props.positionY % 2 !== 0) {
				return ColorPalette.lightgreen;
			} else {
				return ColorPalette.green;
			}
		} else {
			if (props.positionY % 2 === 0) {
				return ColorPalette.lightgreen;
			} else {
				return ColorPalette.green;
			}
		}
	}};
	grid-column: ${(props: CellProps) => props.positionX};
	grid-row: ${(props: CellProps) => props.positionY};
	font-size: calc(2rem - 100%);
	display: flex;
	align-items: center;
	justify-content: center;
	&::after {
		content: ${
			// prettier-ignore
			(props: CellProps) => {return `"${Alphabet[props.positionY - 1] + props.positionX}"`}
		};
		color: ${(props: CellProps) => {
			if (props.positionX % 2 !== 0) {
				if (props.positionY % 2 !== 0) {
					return ColorPalette.green;
				} else {
					return ColorPalette.lightgreen;
				}
			} else {
				if (props.positionY % 2 === 0) {
					return ColorPalette.green;
				} else {
					return ColorPalette.lightgreen;
				}
			}
		}};
		max-width: 100%;
		max-height: 100%;
		overflow: hidden;
	}
`;
