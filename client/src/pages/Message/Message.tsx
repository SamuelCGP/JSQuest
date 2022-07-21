import React from "react";
import { Link } from "react-router-dom";
import MessageStyles from './Message.styles';

interface MessageScreenProps{
    message: string
}

function Message(props: MessageScreenProps) {
    let title = '';
    let message = '';
    switch(props.message){
        case '404':
            title = 'Oooops...';
            message = 'Página não encontrada';
            break;
        case 'passwordResetEmail':
            title = 'Você deveria jogar mais o jogo da memória';
            message = 'Um link de reset de senha foi enviado em seu email';
            break;
        case 'verifyEmail':
            title = 'Só falta um passo para confirmar o seu cadastro!';
            message = 'Para ativar sua conta, acesse seu email e clique no link de confirmação que te enviamos'
    }
    return ( 
        <div style={MessageStyles.wrapper}>
            <h1 style={MessageStyles.title}>{title}</h1>
            <p style={MessageStyles.message}>{message}</p>
            <Link to={'/'} style={MessageStyles.link}>Voltar para a Home</Link>
        </div>
    );
}

export default Message;