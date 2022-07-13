import React, { useEffect } from 'react';
import SignIn from '../../components/SignIn/SignIn';
import AuthStyles from "./Authentication.styles";

function Authentication() {
    const [isSigned, setIsLoginCardHover] = React.useState(true);
    const [authCardStyle, setLoginCardStyle] = React.useState(AuthStyles.authCard);

    useEffect(() => {
      if(!isSigned){
        setLoginCardStyle(AuthStyles.authCardHover);
      }
      else{
        setLoginCardStyle(AuthStyles.authCard);
      }
    });

    return (
      <div style={AuthStyles.authentication}>
        <h1 style={AuthStyles.title}>JSQuest</h1>
        <div style={AuthStyles.mainContainer}>
          <div style={authCardStyle} /*onMouseEnter={() => {setIsLoginCardHover(!isSigned);}}*/ >
            <SignIn />
          </div>
        </div>
      </div>
    );
}

export default Authentication;