import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

import {
	CodeMirrorStyled,
} from "./CodeEditor.styles";
import { useEffect, useRef } from "react";
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

	//componentWillUnmount
	useEffect( () => () => props.saveCode(valueRef.current), [] );

	const handleTabClose = (event: any) => {
		console.log("tab close")
		props.saveCode(valueRef.current);
	};

	useEffect(() => {
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
