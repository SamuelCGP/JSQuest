import React, { useEffect } from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import AuthStyles from "./Authentication.styles";
import { Navigate } from 'react-router-dom';

function Authentication() {
    const [isSigned, setIsSigned] = React.useState(true);
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
    }

    function handleLoginSubmit(input: Object){
      console.log(input);
    }

    function handleRegisterSubmit(input: Object){
      console.log(input);
    }

    return (
      <div style={AuthStyles.authentication}>
        <h1 style={AuthStyles.title}>JSQuest</h1>
        <div style={AuthStyles.mainContainer}>
          <div style={authCardStyle}>
            <SignUp onSubmit={(input: Object) => {handleRegisterSubmit(input)}}
                    isVisible={!isSigned} 
                    onVisibilityChange={() => {handleVisibilityChanges()}} />
            <SignIn onSubmit={(input: Object) => {handleLoginSubmit(input)}} 
                    isVisible={isSigned} 
                    onVisibilityChange={() => {handleVisibilityChanges()}} />
          </div>
        </div>
      </div>
    );
}

export default Authentication;