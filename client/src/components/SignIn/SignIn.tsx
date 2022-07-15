import React, { MouseEventHandler, useEffect } from 'react';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import SignInStyles from './SignIn.styles';
import { Link } from 'react-router-dom';
import ColorPalette from '../../utils/ColorPalette';
import * as User from '../../api/user'

interface SignInProps {
    onVisibilityChange: MouseEventHandler,
    onSubmit: any,
    isVisible: boolean
}

function SignIn(props: SignInProps){

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
        <div style={props.isVisible ? SignInStyles.signIn : {display: 'none'} }>
            <h1 style={SignInStyles.title}>Login</h1>
            <TextField onChange={(evt:any) => updateInputValue(evt)} type="email" value={emailValue}></TextField>
            <TextField onChange={(evt:any) => updateInputValue(evt)} type="password" value={passswordValue}></TextField>
            <div style={SignInStyles.groupButtonAndForgotPassword}>
                <Button onClick={() => { props.onSubmit(getFields()) }} version="primary" style={SignInStyles.signInButton}>Entrar</Button>
                <Link style={SignInStyles.forgotPassword} to={"/"}>Esqueci minha senha</Link>
            </div>
            <h3 style={SignInStyles.signUpCall}>Não tem uma conta? <span onClick={props.onVisibilityChange} style={{color: ColorPalette.orange, cursor: "pointer"}}>Registre-se</span></h3>
        </div>
    );
}

export default SignIn;