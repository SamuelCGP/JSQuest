import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

import { useEffect, useRef } from "react";
interface CodeEditorProps {
	value: any;
	setEditorState: any;
	saveCode: Function;
}

const CodeEditor = (props: CodeEditorProps) => {
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
		<CodeMirror
			height="100%"
			onChange={handleChange}
			value={props.value}
			theme={okaidia}
			extensions={[javascript()]}
		/>

		/*TODO adicionar botão de refresh ao editor para que seja possível redefinir o código pro valor inicial
        do exercício*/
	);
};
export default CodeEditor;
