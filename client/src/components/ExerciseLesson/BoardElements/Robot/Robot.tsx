import { useEffect, useState } from "react";
import styled from "styled-components";
import { BoardElementProps } from "../BoardElementProps";
import { listenToSignal } from "../../../../game/signals";

interface RobotProps extends BoardElementProps {
	columnNumber: number;
	rowNumber: number;
}

const RobotSymbol = styled.div`
	position: absolute;
	background-color: white;
	width: calc(100% / ${(props: RobotProps) => props.columnNumber});
	height: calc(100% / ${(props: RobotProps) => props.rowNumber});
	border-radius: 100%;
	left: ${(props: RobotProps) => props.positionX}%;
	top: ${(props: RobotProps) => props.positionY}%;
	transition: 0.5s;
`;

declare global {
	interface Window {
		robot: any;
	}
}

export function Robot(props: RobotProps) {
	const [x, setX] = useState(props.positionX);
	const [y, setY] = useState(props.positionY);
	const [relativeCoordinates, setRelativeCoordinates] = useState({
		top: 0,
		left: 0,
	});

	const cellWidthInPercentage = 100 / props.columnNumber;

	// ------
	listenToSignal("robotMovement", (location) => {
		moveTo(x + location.detail.x, y - location.detail.y);
		console.log(x + location.detail.x, y - location.detail.y);
	});

	const moveTo = (newX: number, newY: number) => {
		if (newX - 1 < props.columnNumber && newX > 0) setX(newX);
		if (newY - 1 < props.rowNumber && newY > 0) setY(newY);
	};

	const updateRelativeCoordinates = () => {
		const relativeTop = cellWidthInPercentage * (y - 1);
		const relativeLeft = cellWidthInPercentage * (x - 1);

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

	//---------
	useEffect(() => {
		updateRelativeCoordinates();
	});

	useEffect(() => {}, []);

	return (
		<RobotSymbol
			positionX={relativeCoordinates.left}
			positionY={relativeCoordinates.top}
			columnNumber={props.columnNumber}
			rowNumber={props.rowNumber}
		/>
	);
}
