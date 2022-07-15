import React, { useEffect } from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import AuthStyles from "./Authentication.styles";
import { Navigate } from 'react-router-dom';
import * as User from '../../api/user';

function Authentication() {
    const [isSigned, setIsSigned] = React.useState(true);
    const [signInMessage, setSignInMessage] = React.useState('⠀');
    const [signUpMessage, setSignUpMessage] = React.useState('⠀');
    const [authCardStyle, setLoginCardStyle] = React.useState(AuthStyles.authCard);
    const [redirect, setRedirect] = React.useState('');

    if(redirect) return <Navigate to={ redirect }/>

    function handleVisibilityChanges(){
      const isSignedVAR = !isSigned;
      setIsSigned(isSignedVAR);

      const signInOrSignUp = isSignedVAR ? 'signIn' : 'signUp';

      switch(signInOrSignUp){
        case 'signIn':
          setLoginCardStyle(AuthStyles.authCard);
          break;
        case 'signUp':
          setLoginCardStyle(AuthStyles.authCardSignUp);
          break;
      }

      setSignInMessage('⠀');
      setSignUpMessage('⠀');
    }

    async function handleLoginSubmit(input: any){
      let message: string = '';
      let status: number = 102;

      if(input.email == '' || input.password == ''){
        message = 'Preencha todos os campos';
        status = 400;
        setSignInMessage(message);
        return;
      }

      const response: any = await User.login(input.email, input.password)
        .then(response => {return response});

      status = response;

      switch(status){
        case 200:
          message = 'Acesso permitido';
          setRedirect('/home');
          break;
        case 401:
          message = 'Senha incorreta';
          break;
        case 404:
          message = 'Usuário não cadastrado';
          break;
        default:
          message = 'Erro desconhecido';
      }

      setSignInMessage(message);
    }

    function handleRegisterSubmit(input: any){
      let message: string = '';
      let status: number = 102;

      if(input.email == '' || input.password == ''){
        message = 'Preencha todos os campos';
        status = 400;
        setSignUpMessage(message);
        return;
      }
    }

    return (
      <div style={AuthStyles.authentication}>
        <h1 style={AuthStyles.title}>JSQuest</h1>
        <div style={AuthStyles.mainContainer}>
          <div style={authCardStyle}>
            <SignUp onSubmit={(input: Object) => {handleRegisterSubmit(input)}}
                    message={signUpMessage}
                    isVisible={!isSigned} 
                    onVisibilityChange={() => {handleVisibilityChanges()}} />
            <SignIn onSubmit={(input: Object) => {handleLoginSubmit(input)}} 
                    message={signInMessage}
                    isVisible={isSigned} 
                    onVisibilityChange={() => {handleVisibilityChanges()}} />
          </div>
        </div>
      </div>
    );
}

export default Authentication;