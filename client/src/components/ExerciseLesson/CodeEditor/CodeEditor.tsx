import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import {
	ButtomContainer,
	CodeSubmitButton,
	CodeRefreshButton,
} from "./CodeEditor.styles";
import { useEffect, useRef } from "react";

interface CodeEditorProps {
	value: any;
	setEditorState: any;
	saveCode: Function;
}

export const CodeEditor = (props: CodeEditorProps) => {
	const valueRef = useRef();
	const firstLoad = useRef(true);
	useEffect(() => {
		console.log(props.value);
		valueRef.current = props.value;
	}, [props.value]);

	useEffect(() => {
		const handleTabClose = (event: any) => {
			props.saveCode(valueRef.current);
		};
		window.addEventListener("beforeunload", handleTabClose);
		return () => {
			if (firstLoad.current) {
				firstLoad.current = false;
				return;
			}
			window.removeEventListener("beforeunload", handleTabClose);
			props.saveCode(valueRef.current);
		};
	}, []);

	const handleChange = (value: any) => {
		props.setEditorState(value);
	};

	return (
		<>
			<CodeMirror
				width="100%"
				height="100%"
				onChange={handleChange}
				value={props.value}
				theme={okaidia}
				extensions={[javascript()]}
				style={{ width: "100%" }}
			/>
			<ButtomContainer>
				<CodeSubmitButton>Enviar</CodeSubmitButton>
				<CodeRefreshButton>Recomeçar</CodeRefreshButton>
			</ButtomContainer>
		</>
		/*TODO adicionar line-break ou scroll ao code editor*/
	);
};
