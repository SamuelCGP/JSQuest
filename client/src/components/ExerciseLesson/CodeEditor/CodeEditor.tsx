import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

import {
	ButtomContainer,
	CodeSubmitButton,
	CodeRefreshButton,
	CodeMirrorStyled,
} from "./CodeEditor.styles";
import { useEffect, useRef } from "react";
import { runCode } from "../../../game/runCode";

interface CodeEditorProps {
	value: any;
	setEditorState: any;
	saveCode: Function;
	c_index: number | any;
	l_index: number | any;
}

export const CodeEditor = (props: CodeEditorProps) => {
	const valueRef = useRef();
	const firstLoad = useRef(true);
	useEffect(() => {
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
		<CodeMirrorStyled
			width="100%"
			height="100%"
			onChange={handleChange}
			value={props.value}
			theme={okaidia}
			extensions={[javascript()]}
		/>
	);
};
