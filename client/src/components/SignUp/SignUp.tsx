import React, { MouseEventHandler, useEffect } from 'react';
import SignUpStyles from './SignUp.styles';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import ColorPalette from '../../utils/ColorPalette';

interface SignUpProps {
    onVisibilityChange: MouseEventHandler,
    onSubmit: any,
    message: string,
    isVisible: boolean
}

function SignUp(props: SignUpProps){

    const [emailValue, setEmailValue] = React.useState('');
    const [passswordValue, setPasswordValue] = React.useState('');

    function updateInputValue(field: any){
        const fieldName = field.target.name;
        const fieldValue = field.target.value;

        switch(fieldName){
            case 'email':
                setEmailValue(fieldValue);
                break;
            case 'password':
                setPasswordValue(fieldValue);
                break;
        }
    }

    function getFields(){
        return { email: emailValue, password: passswordValue }
    }

    return(
        <div style={props.isVisible ? SignUpStyles.signUp : {display: 'none'} }>
            <h1 style={SignUpStyles.title}>Cadastro</h1>
            <TextField onChange={(evt:any) => updateInputValue(evt)} type="username" value={emailValue}></TextField>
            <TextField onChange={(evt:any) => updateInputValue(evt)} type="email" value={emailValue}></TextField>
            <TextField onChange={(evt:any) => updateInputValue(evt)} type="password" value={emailValue}></TextField>
            <p style={SignUpStyles.message}>{props.message}</p>
            <Button onClick={() => { props.onSubmit(getFields()) }} version="primary" style={SignUpStyles.signUpButton}>Entrar</Button>
            <h3 style={SignUpStyles.signInCall}>Já possui uma conta? 
                <span onClick={props.onVisibilityChange} style={{color: ColorPalette.orange, cursor: "pointer"}}> Faça login</span>
            </h3>
        </div>
    );
}

export default SignUp;