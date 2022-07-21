import React, { MouseEventHandler } from "react";
import SignUpStyles from "./SignUp.styles";
import Button from "../Button/Button";
import ColorPalette from "../../utils/ColorPalette";
import { Formik, Field, Form, ErrorMessage } from "formik";
import TextFieldStyles from "./../TextField/TextField.styles";
import * as Yup from "yup";
import FormMessage from "../FormMessage/FormMessage";

interface SignUpProps {
	onVisibilityChange: MouseEventHandler;
	onSubmit: Function;
	message: string;
	isVisible: boolean;
}

const SignUpSchema = Yup.object().shape({
	username: Yup.string().required("Nome de usuário necessário"),
	email: Yup.string().email("Email inválido").required("Email necessário"),
	password: Yup.string()
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
			"A senha precisa ter uma letra maiúscula, minúscula, um número e 8 caracteres no mínimo"
		)
		.required("Senha necessária"),
	confirm_password: Yup.string()
		.label("confirm password")
		.required("Confirmação de senha necessária")
		.oneOf([Yup.ref("password"), null], "As senhas não coincidem"),
});

function SignUp(props: SignUpProps) {
	return (
		<Formik
			initialValues={{
				username: "",
				email: "",
				password: "",
				confirm_password: "",
			}}
			validationSchema={SignUpSchema}
			onSubmit={(values, { setSubmitting }) => {
				props.onSubmit(values);
				setSubmitting(false);
			}}
		>
			{({ isSubmitting }) => (
				<Form
					style={
						props.isVisible
							? SignUpStyles.signUp
							: { display: "none" }
					}
				>
					<h1 style={SignUpStyles.title}>Cadastro</h1>
					<Field
						style={TextFieldStyles.textField}
						name="username"
						placeholder="Digite seu nome de usuário"
					></Field>
					<ErrorMessage name="username" component={FormMessage} />
					<Field
						style={TextFieldStyles.textField}
						name="email"
						placeholder="Digite seu email"
						type="email"
					></Field>
					<ErrorMessage name="email" component={FormMessage} />
					<Field
						style={TextFieldStyles.textField}
						name="password"
						placeholder="Digite sua senha"
						type="password"
					></Field>
					<ErrorMessage name="password" component={FormMessage} />
					<Field
						style={TextFieldStyles.textField}
						name="confirm_password"
						placeholder="Confirme sua senha"
						type="password"
					></Field>
					<ErrorMessage
						name="confirm_password"
						component={FormMessage}
					/>
					<FormMessage>{props.message}</FormMessage>
					<Button
						type="submit"
						disabled={isSubmitting}
						version="primary"
						style={SignUpStyles.signUpButton}
					>
						{isSubmitting ? "Aguarde..." : "Registrar"}
					</Button>
					<h3 style={SignUpStyles.signInCall}>
						Já possui uma conta?
					</h3>
					<h3>
						<span
							onClick={props.onVisibilityChange}
							style={{
								color: ColorPalette.orange,
								cursor: "pointer",
							}}
						>
							{" "}
							Faça login
						</span>
					</h3>
				</Form>
			)}
		</Formik>
	);
}

export default SignUp;
