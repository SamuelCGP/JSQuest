import React, { FormEvent, MouseEventHandler, useState } from "react";
import Button from "../Button/Button";
import SignInStyles from "./SignIn.styles";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ColorPalette from "../../utils/ColorPalette";
import TextFieldStyles from "../TextField/TextField.styles";
import * as Yup from "yup";
import FormMessage from "../FormMessage/FormMessage";

interface SignInProps {
	onVisibilityChange: MouseEventHandler;
	onSubmit: Function;
	onForgotPassword: Function;
	message: string;
	isVisible: boolean;
}

const SignInSchema = Yup.object().shape({
	email: Yup.string().email("Email inválido").required("Email necessário"),
	password: Yup.string().required("Senha necessária"),
});

function SignIn(props: SignInProps) {
	const [emailValue, setEmailValue] = useState();

	const handleChanges = (event: any) => {
		const target = event.target;
		if (target.name === "email") {
			setEmailValue(target.value);
		}
	};

	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			validationSchema={SignInSchema}
			onSubmit={(values, { setSubmitting }) => {
				props.onSubmit(values);
				setSubmitting(false);
			}}
		>
			{({ isSubmitting }) => (
				<Form
					onChange={handleChanges}
					style={
						props.isVisible
							? SignInStyles.signIn
							: { display: "none" }
					}
				>
					<h1 style={SignInStyles.title}>Login</h1>
					<Field
						type="email"
						style={TextFieldStyles.textFieldBig}
						name="email"
						placeholder="Digite seu email"
					/>
					<ErrorMessage name="email" component={FormMessage} />
					<Field
						style={TextFieldStyles.textFieldBig}
						type="password"
						name="password"
						placeholder="Digite sua senha"
					/>
					<ErrorMessage name="password" component={FormMessage} />
					<div style={SignInStyles.groupButtonAndForgotPassword}>
						<FormMessage>{props.message}</FormMessage>
						<Button
							type="submit"
							disabled={isSubmitting}
							version="primary"
							style={SignInStyles.signInButton}
						>
							{isSubmitting ? "Aguarde..." : "Entrar"}
						</Button>
						<a
							onClick={() => {
								const email = emailValue;
								props.onForgotPassword(email);
							}}
							style={SignInStyles.forgotPassword}
						>
							Esqueci minha senha
						</a>
					</div>
					<h3 style={SignInStyles.signUpCall}>Não tem uma conta? </h3>
					<h3>
						<span
							onClick={props.onVisibilityChange}
							style={{
								color: ColorPalette.orange,
								cursor: "pointer",
							}}
						>
							Registre-se
						</span>
					</h3>
				</Form>
			)}
		</Formik>
	);
}

export default SignIn;
