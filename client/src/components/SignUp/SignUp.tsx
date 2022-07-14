import React, { MouseEventHandler, useEffect } from 'react';
import SignUpStyles from './SignUp.styles';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import ColorPalette from '../../utils/ColorPalette';

interface SignUpProps {
    onVisibilityChange: MouseEventHandler,
    isVisible: boolean
}

function SignUp(props: SignUpProps){

    return(
        <div style={props.isVisible ? SignUpStyles.signUp : {display: 'none'} }>
            <h1 style={SignUpStyles.title}>Cadastro</h1>
            <TextField type="username"></TextField>
            <TextField type="email"></TextField>
            <TextField type="password"></TextField>
            <Button version="primary" style={SignUpStyles.signUpButton}>Entrar</Button>
            <h3 style={SignUpStyles.signInCall}>Já possui uma conta? 
                <span onClick={props.onVisibilityChange} style={{color: ColorPalette.orange, cursor: "pointer"}}> Faça login</span>
            </h3>
        </div>
    );
}

export default SignUp;