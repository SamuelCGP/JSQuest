import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

import { useEffect, useState } from "react";
interface CodeEditorProps {
	value: any;
	setEditorState: any;
}

const CodeEditor = (props: CodeEditorProps) => {

    useEffect(() => {
        return () => {
            console.log("unmount");
        }
    }, [])

	const handleChange = (value: any) => {
		props.setEditorState(value);
		console.log(value);
	};

	return (
		<CodeMirror
			height="42vh"
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
