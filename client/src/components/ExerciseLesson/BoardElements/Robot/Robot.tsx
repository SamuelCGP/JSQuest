import { useEffect, useState } from "react";
import styled from "styled-components";
import { BoardElementProps } from "../BoardElementProps";
import { listenToSignal } from "../../../../game/signals";

const RobotSymbol = styled.div`
	position: absolute;
	background-color: white;
	width: calc(100% / ${(props: BoardElementProps) => props.columnNumber});
	height: calc(100% / ${(props: BoardElementProps) => props.rowNumber});
	border-radius: 100%;
	left: ${(props: BoardElementProps) => props.positionX}%;
	top: ${(props: BoardElementProps) => props.positionY}%;
	transition: 0.5s;
`;

export function Robot(props: BoardElementProps) {
	const [x, setX] = useState(props.positionX - 1);
	const [y, setY] = useState(props.positionY - 1);
	const [relativeCoordinates, setRelativeCoordinates] = useState({
		top: 0,
		left: 0,
	});

	const cellWidthInPercentage = 100 / props.columnNumber;
	const cellHeightInPercentage = 100 / props.rowNumber;
	const matrixId = "robot" + props.positionX + props.positionY;

	// ------
	// listenToSignal("robotMovement", (location) => {
	// 	moveTo(location.detail[0] + 1, location.detail[1] + 1);
	// });

	const moveTo = (newX: number, newY: number) => {
		setX(newX);
		setY(newY);
	};

	const updateRelativeCoordinates = () => {
		const relativeTop = cellHeightInPercentage * y;
		const relativeLeft = cellWidthInPercentage * x;

		if (
			relativeTop === relativeCoordinates.top &&
			relativeLeft === relativeCoordinates.left
		)
			return;

		const newRelativeCoordinates = {
			top: relativeTop,
			left: relativeLeft,
		};

		setRelativeCoordinates(newRelativeCoordinates);
	};

	listenToSignal("matrixChange", eventData => {
		const currentCoords = [x, y]
		if ((eventData.detail.oldPos as Array<number>).toString() === currentCoords.toString()) {
			moveTo(eventData.detail.newPos[0], eventData.detail.newPos[1]);
		}
	})

	//---------
	useEffect(() => {
		updateRelativeCoordinates();
	});

	return (
		<RobotSymbol
			positionX={relativeCoordinates.left}
			positionY={relativeCoordinates.top}
			columnNumber={props.columnNumber}
			rowNumber={props.rowNumber}
		/>
	);
}
