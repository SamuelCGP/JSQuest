import { useEffect, useState } from "react";
import { BoardElementProps } from "./BoardElementProps";
import { listenToSignal } from "../../../game/signals";
import { RobotSymbol, BoxSymbol, MetalBoxSymbol, StarSymbol } from "./Symbols";

export function BoardElement(props: BoardElementProps) {
	const [x, setX] = useState(props.positionX - 1);
	const [y, setY] = useState(props.positionY - 1);
	const [relativeCoordinates, setRelativeCoordinates] = useState({
		top: 0,
		left: 0,
	});
	const [isVisible, setIsVisible] = useState(true);

	const cellWidthInPercentage = 100 / props.columnNumber;
	const cellHeightInPercentage = 100 / props.rowNumber;

	// ------
	listenToSignal(`${props.type}Movement`, (location) => {
		if (
			location.detail.originalCoords.x === props.positionX - 1 &&
			location.detail.originalCoords.y === props.positionY - 1
		) {
			moveTo(location.detail.newCoords.x, location.detail.newCoords.y);
		}
	});
	listenToSignal(`${props.type}Destruction`, (location) => {
		if (
			location.detail.originalCoords.x === props.positionX - 1 &&
			location.detail.originalCoords.y === props.positionY - 1
		) {
			setIsVisible(false);
		}
	});
	listenToSignal(`boardReset`, (location) => {
		reset();
	});
	// ------

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

	const reset = () => {
		setIsVisible(true);
		moveTo(props.positionX - 1, props.positionY - 1);
	};

	//---------
	useEffect(() => {
		updateRelativeCoordinates();
	});

	if (isVisible === false) return <></>;

	switch (props.type) {
		case "robot":
			return (
				<RobotSymbol
					positionX={relativeCoordinates.left}
					positionY={relativeCoordinates.top}
					columnNumber={props.columnNumber}
					rowNumber={props.rowNumber}
				/>
			);
		case "box":
			return (
				<BoxSymbol
					positionX={relativeCoordinates.left}
					positionY={relativeCoordinates.top}
					columnNumber={props.columnNumber}
					rowNumber={props.rowNumber}
				/>
			);
		case "metalbox":
			return (
				<MetalBoxSymbol
					positionX={relativeCoordinates.left}
					positionY={relativeCoordinates.top}
					columnNumber={props.columnNumber}
					rowNumber={props.rowNumber}
				/>
			);
		case "star":
			return (
				<StarSymbol
					positionX={relativeCoordinates.left}
					positionY={relativeCoordinates.top}
					columnNumber={props.columnNumber}
					rowNumber={props.rowNumber}
				/>
			);
		default:
			return (
				<MetalBoxSymbol
					positionX={relativeCoordinates.left}
					positionY={relativeCoordinates.top}
					columnNumber={props.columnNumber}
					rowNumber={props.rowNumber}
				/>
			);
	}
}
