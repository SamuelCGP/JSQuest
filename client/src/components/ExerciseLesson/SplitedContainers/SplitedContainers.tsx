import {
	Container1,
	Container2,
	SplitContainer,
} from "./SplitedContainers.style";

export function SplitedContainers() {
	return (
		<SplitContainer direction="vertical">
			<Container1></Container1>
			<Container2></Container2>
			{/* <CodeEditor/> */}
		</SplitContainer>
	);
}
