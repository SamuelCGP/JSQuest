import React, { MouseEventHandler, useEffect } from "react";
import SignUpStyles from "./SignUp.styles";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import ColorPalette from "../../utils/ColorPalette";
import { Formik, Field, Form, ErrorMessage } from "formik";
import TextFieldStyles from "./../TextField/TextField.styles";
import * as Yup from "yup";

interface SignUpProps {
	onVisibilityChange: MouseEventHandler;
	onSubmit: Function;
	message: string;
	isVisible: boolean;
}

const SignUpSchema = Yup.object().shape({
	username: Yup.string().required("Nome de usuário necessário"),
	email: Yup.string().email("Email inválido").required("Email necessário"),
	password: Yup.string().required("Senha necessária"),
	confirm_password: Yup.string()
		.label("confirm password")
		.required("Confirmação de senha necessária")
		.oneOf([Yup.ref("password"), null], "As senhas não coincidem"),
});

function SignUp(props: SignUpProps) {
	// const [usernameValue, setUsernameValue] = React.useState('');
	// const [emailValue, setEmailValue] = React.useState('');
	// const [passwordValue, setPasswordValue] = React.useState('');

	// function updateInputValue(field: any){
	//     const fieldName = field.target.name;
	//     const fieldValue = field.target.value;

	//     switch(fieldName){
	//         case 'username':
	//             setUsernameValue(fieldValue);
	//             break;
	//         case 'email':
	//             setEmailValue(fieldValue);
	//             break;
	//         case 'password':
	//             setPasswordValue(fieldValue);
	//             break;
	//     }
	// }

	// function getFields(){
	//     console.log({ username: usernameValue, email: emailValue, password: passwordValue });
	//     return { username: usernameValue, email: emailValue, password: passwordValue }
	// }

	return (
		<div style={props.isVisible ? SignUpStyles.signUp : { display: "none" }}>
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
					<Form>
						<h1 style={SignUpStyles.title}>Cadastro</h1>
						<Field
							style={TextFieldStyles.textFieldBig}
							name="username"
							placeholder="Digite seu nome de usuário"
						></Field>
						<ErrorMessage name="username" component="div" />
						<Field
							style={TextFieldStyles.textFieldBig}
							name="email"
							placeholder="Digite seu email"
							type="email"
						></Field>
						<ErrorMessage name="email" component="div" />
						<Field
							style={TextFieldStyles.textFieldBig}
							name="password"
							placeholder="Digite sua senha"
							type="password"
						></Field>
						<ErrorMessage name="password" component="div" />
						<Field
							style={TextFieldStyles.textFieldBig}
							name="confirm_password"
							placeholder="Confirme sua senha"
							type="password"
						></Field>
						<ErrorMessage name="confirm_password" component="div" />
						<p style={SignUpStyles.message}>{props.message}</p>
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
							<span
								onClick={props.onVisibilityChange}
								style={{ color: ColorPalette.orange, cursor: "pointer" }}
							>
								{" "}
								Faça login
							</span>
						</h3>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default SignUp;
