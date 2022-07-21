import React, { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import AuthStyles from "./Authentication.styles";
import { Navigate } from "react-router-dom";
import handleRegisterSubmit from "./handleRegisterSubmit";
import handleLoginSubmit from "./handleLoginSubmit";
import handleForgotPassword from "./handleForgotPassword";

function Authentication() {
  const [isSigned, setIsSigned] = useState(true);
  const [signInMessage, setSignInMessage] = useState("⠀");
  const [signUpMessage, setSignUpMessage] = useState("⠀");
  const [authCardStyle, setLoginCardStyle] = useState(AuthStyles.authCard);
  const [redirect, setRedirect] = useState("");

  if (redirect) return <Navigate to={redirect} />;

  function handleVisibilityChanges() {
    const newIsSigned = !isSigned;
    setIsSigned(newIsSigned);

    if (newIsSigned) setLoginCardStyle(AuthStyles.authCard);
    else setLoginCardStyle({ ...AuthStyles.authCard, right: "0%"});

    setSignInMessage("⠀");
    setSignUpMessage("⠀");
  }
  return (
    <div style={AuthStyles.authentication}>
      <h1 style={AuthStyles.title}>JSQuest</h1>
      <div style={AuthStyles.mainContainer}>
        <div style={authCardStyle}>
          <SignUp
            onSubmit={async (input: Object) => {
              setSignUpMessage(await handleRegisterSubmit(input));
            }}
            message={signUpMessage}
            isVisible={!isSigned}
            onVisibilityChange={() => {
              handleVisibilityChanges();
            }}
          />
          <SignIn
            onSubmit={async (input: Object) => {
              const message = await handleLoginSubmit(input);
              setSignInMessage(message);
              if (message === "Acesso permitido") setRedirect("/home");
            }}
            onForgotPassword={async (email: string) => {
              const message = await handleForgotPassword(email);
              setSignInMessage(message);
            }}
            message={signInMessage}
            isVisible={isSigned}
            onVisibilityChange={() => {
              handleVisibilityChanges();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
