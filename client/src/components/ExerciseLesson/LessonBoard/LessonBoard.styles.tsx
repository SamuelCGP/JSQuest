import ColorPalette from "../../../utils/ColorPalette";
import styled from "styled-components";
import { Container } from "../../../components";

interface BoardProps {
	columns: number;
	rows: number;
}

export const Board = styled.div`
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
				return ColorPalette.primary;
			} else {
				return ColorPalette.secondary;
			}
		} else {
			if (props.positionY % 2 === 0) {
				return ColorPalette.primary;
			} else {
				return ColorPalette.secondary;
			}
		}
	}};
	grid-column: ${(props: CellProps) => props.positionX};
	grid-row: ${(props: CellProps) => props.positionY};
`;
