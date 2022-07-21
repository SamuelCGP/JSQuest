import React, { } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import AuthStyles from "./Authentication.styles";
import { Navigate } from "react-router-dom";
import handleRegisterSubmit from "./handleRegisterSubmit";
import handleLoginSubmit from "./handleLoginSubmit";

function Authentication() {
	const [isSigned, setIsSigned] = React.useState(true);
	const [signInMessage, setSignInMessage] = React.useState("⠀");
	const [signUpMessage, setSignUpMessage] = React.useState("⠀");
	const [authCardStyle, setLoginCardStyle] = React.useState(
		AuthStyles.authCard
	);
	const [redirect, setRedirect] = React.useState("");

	if (redirect) return <Navigate to={redirect} />;

	function handleVisibilityChanges() {
		const newIsSigned = !isSigned;
		setIsSigned(newIsSigned);

    if(newIsSigned) setLoginCardStyle(AuthStyles.authCard);
    else setLoginCardStyle(AuthStyles.authCardSignUp);

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
