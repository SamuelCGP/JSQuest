import React, { useEffect } from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import AuthStyles from "./Authentication.styles";

function Authentication() {
    const [isSigned, setIsSigned] = React.useState(true);
    const [authCardStyle, setLoginCardStyle] = React.useState(AuthStyles.authCard);

    useEffect(() => {
      console.log("IsSigned: " + isSigned)
    });

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

    return (
      <div style={AuthStyles.authentication}>
        <h1 style={AuthStyles.title}>JSQuest</h1>
        <div style={AuthStyles.mainContainer}>
          <div style={authCardStyle}>
            <SignUp isVisible={!isSigned} onVisibilityChange={() => {handleVisibilityChanges()}} />
            <SignIn isVisible={isSigned}  onVisibilityChange={() => {handleVisibilityChanges()}} />
          </div>
        </div>
      </div>
    );
}

export default Authentication;