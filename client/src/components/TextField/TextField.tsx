import React, { ChangeEvent, useEffect } from "react";
import TextFieldStyles from "./TextField.styles";

interface TextFieldProps {
	type: string;
	value: string;
	onChange: any;
}

function TextField(props: TextFieldProps) {
	const fieldAttributes = {
		type: props.type,
		fieldType: "text",
		name: "",
		placeholder: "Digite alguma coisa",
		style: TextFieldStyles.textField,
	};

	switch (fieldAttributes.type) {
		case "username":
			fieldAttributes.fieldType = "text";
			fieldAttributes.name = "username";
			fieldAttributes.placeholder = "Digite seu nome";
			fieldAttributes.style = TextFieldStyles.textFieldBig;
			break;
		case "email":
			fieldAttributes.fieldType = "email";
			fieldAttributes.name = "email";
			fieldAttributes.placeholder = "Digite seu email";
			fieldAttributes.style = TextFieldStyles.textFieldBig;
			break;
		case "password":
			fieldAttributes.fieldType = "password";
			fieldAttributes.name = "password";
			fieldAttributes.placeholder = "Digite sua senha";
			fieldAttributes.style = TextFieldStyles.textFieldBig;
			break;
		default:
			break;
	}
	return (
		<input
			name={fieldAttributes.name}
			value={props.value}
			type={fieldAttributes.fieldType}
			style={fieldAttributes.style}
			placeholder={fieldAttributes.placeholder}
			onChange={(evt) => props.onChange(evt)}
		></input>
	);
}

export default TextField;
