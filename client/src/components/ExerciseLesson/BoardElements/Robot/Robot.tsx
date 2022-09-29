import { useEffect, useState } from "react";
import styled from "styled-components";
import { BoardElementProps } from "../BoardElementProps";

export function Robot(props: BoardElementProps) {
	const [x, setX] = useState(props.positionX);
	const [y, setY] = useState(props.positionY);

	useEffect( () => {
		
	} );

	const RobotSymbol = styled.div`
		
		background-color: red;
		width: 100%;
		height: 100%;
		border-radius: 100%;
		grid-column: ${x};
		grid-row: ${y};
	`;

	const changePosition = (evt: any) => {
		console.log(evt.target.getBoundingClientRect())
		moveTo(2,2);
		console.log(evt.target.getBoundingClientRect())
	}

	const moveTo = (newX: number, newY: number) => {
		setX(newX);
		setY(newY);
	}

	return ( <RobotSymbol onClick={changePosition}/> );
}
