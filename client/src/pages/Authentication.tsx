import React, { useEffect } from 'react';
import AuthStyles from "./Authentication.styles";

function Authentication() {
    const [isLoginCardHover, setIsLoginCardHover] = React.useState(false);
    const [loginCardStyle, setLoginCardStyle] = React.useState(AuthStyles.loginCard);

    useEffect(() => {
      if(isLoginCardHover){
        setLoginCardStyle(AuthStyles.loginCardHover);
      }
      else{
        setLoginCardStyle(AuthStyles.loginCard);
      }
    });

    return (
      <div style={AuthStyles.authentication}>
        <h1 style={AuthStyles.title}>JSQuest</h1>
        <div style={AuthStyles.mainContainer}>
          <div style={loginCardStyle} onMouseEnter={() => {
            setIsLoginCardHover(!isLoginCardHover);
          }}></div>
        </div>
      </div>
    );
}

export default Authentication;