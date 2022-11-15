import React, { useState } from "react";
import { SignUp, SignIn } from "../../components";
import {
	ContainerFull,
	MainContainer,
	AuthCard,
	GlobalStyle,
} from "./Authentication.styles";
import { Navigate } from "react-router-dom";
import handleRegisterSubmit from "./handleRegisterSubmit";
import handleLoginSubmit from "./handleLoginSubmit";
import handleForgotPassword from "./handleForgotPassword";
import { JSQuestFullLogo } from "../../svg";

function Authentication() {
	const [isSigned, setIsSigned] = useState(true);
	const [redirect, setRedirect] = useState("");
	const [signInMessage, setSignInMessage] = useState("⠀");
	const [signUpMessage, setSignUpMessage] = useState("⠀");

	if (redirect) return <Navigate to={redirect} />;

	function handleVisibilityChanges() {
		const newIsSigned = !isSigned;
		setIsSigned(newIsSigned);

		setSignInMessage("⠀");
		setSignUpMessage("⠀");
	}
	
	return (
		<ContainerFull>
			<GlobalStyle />
			<JSQuestFullLogo inverse width={300} height={165} />
			<MainContainer>
				<AuthCard isSigned={isSigned}>
					<SignIn
						onSubmit={async (input: Object) => {
							return handleLoginSubmit(input).then(message => {
								setSignInMessage(message);
								if (message === "Acesso permitido")
									setRedirect("/");
							});
						}}
						onForgotPassword={async (email: string) => {
							const message = await handleForgotPassword(email);
							if (!message.includes("/"))
								setSignInMessage(message);
							else setRedirect(message);
						}}
						message={signInMessage}
						isVisible={isSigned}
						onVisibilityChange={() => {
							handleVisibilityChanges();
						}}
					/>
					<SignUp
						onSubmit={async (input: Object) => {
							return handleRegisterSubmit(input).then(message => {
								setSignUpMessage(message);
							})
						}}
						message={signUpMessage}
						isVisible={!isSigned}
						onVisibilityChange={() => {
							handleVisibilityChanges();
						}}
					/>
				</AuthCard>
			</MainContainer>
		</ContainerFull>
	);
}

export default Authentication;
