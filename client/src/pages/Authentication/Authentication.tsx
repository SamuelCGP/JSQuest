import React, { useState } from "react";
import { Container, MainHeading } from "../../components/Global";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { MainContainer, AuthCard } from "./Authentication.styles";
import { Navigate } from "react-router-dom";
import handleRegisterSubmit from "./handleRegisterSubmit";
import handleLoginSubmit from "./handleLoginSubmit";
import handleForgotPassword from "./handleForgotPassword";

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
		<Container>
			<MainHeading>JSQuest</MainHeading>
			<MainContainer>
				<AuthCard isSigned={isSigned}>
					<SignIn
						onSubmit={async (input: Object) => {
							const message = await handleLoginSubmit(input);
							setSignInMessage(message);
							if (message === "Acesso permitido")
								setRedirect("/home");
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
							setSignUpMessage(await handleRegisterSubmit(input));
						}}
						message={signUpMessage}
						isVisible={!isSigned}
						onVisibilityChange={() => {
							handleVisibilityChanges();
						}}
					/>
				</AuthCard>
			</MainContainer>
		</Container>
	);
}

export default Authentication;
