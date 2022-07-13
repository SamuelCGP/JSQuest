import React, { useEffect } from 'react';
import TextFieldStyles from './TextField.styles'

interface TextFieldProps{
    type: string
}

function TextField(props: TextFieldProps){
    const [fieldAttributes, setFieldAttributes] = React.useState({
        type: '',
        fieldType: 'text',
        placeholder: 'Digite alguma coisa',
        style: TextFieldStyles.textField
    });
    useEffect(() => {
        const Type = props.type;
        const copyOfFieldAttributes = Object.assign({}, fieldAttributes);

        switch(Type){
            case 'username':
                copyOfFieldAttributes.fieldType = 'text';
                copyOfFieldAttributes.placeholder = 'Digite seu nome de usuário';
                copyOfFieldAttributes.style = TextFieldStyles.textFieldBig;
                setFieldAttributes(copyOfFieldAttributes);
                break;
            case 'password':
                copyOfFieldAttributes.fieldType = 'password';
                copyOfFieldAttributes.placeholder = 'Digite sua senha';
                copyOfFieldAttributes.style = TextFieldStyles.textFieldBig;
                setFieldAttributes(copyOfFieldAttributes);
                break;
            default:
                break;
        }
    });
    return(
        <input type={fieldAttributes.fieldType} style={ fieldAttributes.style } placeholder={fieldAttributes.placeholder}></input>
    );
}

export default TextField;