import styled from "styled-components";
import { BoardElementProps } from "../BoardElementProps";

export function Robot(props: BoardElementProps) {
	const RobotSymbol = styled.div`
		background-color: red;
		width: 100%;
		height: 100%;
		border-radius: 100%;
		grid-column: ${props.positionX};
		grid-row: ${props.positionY};
	`;

	const changePosition = (evt: any) => {
		console.log(evt.target.getBoundingClientRect())
	}

	return ( <RobotSymbol onClick={changePosition}/> );
}
