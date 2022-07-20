import React, { MouseEventHandler, useEffect } from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import SignInStyles from "./SignIn.styles";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ColorPalette from "../../utils/ColorPalette";
import TextFieldStyles from "../TextField/TextField.styles";
import * as Yup from "yup";

interface SignInProps {
	onVisibilityChange: MouseEventHandler;
	onSubmit: Function;
	message: string;
	isVisible: boolean;
}

const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Email necessário"),
    password: Yup.string().min(6, "A senha precisa ter pelo menos 6 caracteres").required("Senha necessária")
})

function SignIn(props: SignInProps) {
	// const [emailValue, setEmailValue] = React.useState("");
	// const [passswordValue, setPasswordValue] = React.useState("");

	// function updateInputValue(field: any) {
	// 	const fieldName = field.target.name;
	// 	const fieldValue = field.target.value;

	// 	switch (fieldName) {
	// 		case "email":
	// 			setEmailValue(fieldValue);
	// 			break;
	// 		case "password":
	// 			setPasswordValue(fieldValue);
	// 			break;
	// 	}
	// }

	// function getFields() {
	// 	return { email: emailValue, password: passswordValue };
	// }

	return (
		<div style={props.isVisible ? SignInStyles.motherDiv : { display: "none" }}>
			<Formik
				initialValues={{ email: "", password: "" }}
                validationSchema={SignInSchema}
				onSubmit={(values, { setSubmitting }) => {
					props.onSubmit(values);
                    setSubmitting(false);
				}}
			>
				{({ isSubmitting }) => (
					<Form style={SignInStyles.signIn} >
						<h1 style={SignInStyles.title}>Login</h1>
						<Field
							type="email"
							style={TextFieldStyles.textFieldBig}
							name="email"
							placeholder="Digite seu email"
						/>
						<ErrorMessage name="email" component="div"/>
						<Field
							style={TextFieldStyles.textFieldBig}
							type="password"
							name="password"
							placeholder="Digite sua senha"
						/>
						<ErrorMessage name="password" component="div"/>
						<div style={SignInStyles.groupButtonAndForgotPassword}>
							<p style={SignInStyles.message}>{props.message}</p>
							<Button
								type="submit"
                                disabled={isSubmitting}
								version="primary"
								style={SignInStyles.signInButton}
							>
								{isSubmitting? "Aguarde..." : "Entrar"}
							</Button>
							<Link style={SignInStyles.forgotPassword} to={"/"}>
								Esqueci minha senha
							</Link>
						</div>
						<h3 style={SignInStyles.signUpCall}>
							Não tem uma conta?{" "}
							<span
								onClick={props.onVisibilityChange}
								style={{ color: ColorPalette.orange, cursor: "pointer" }}
							>
								Registre-se
							</span>
						</h3>
					</Form>
				)}
			</Formik>
		</div>
		// <div style={props.isVisible ? SignInStyles.signIn : {display: 'none'} }>
		//     <h1 style={SignInStyles.title}>Login</h1>
		//     <TextField onChange={(evt:any) => updateInputValue(evt)} type="email" value={emailValue}></TextField>
		//     <TextField onChange={(evt:any) => updateInputValue(evt)} type="password" value={passswordValue}></TextField>
		// <div style={SignInStyles.groupButtonAndForgotPassword}>
		//     <p style={SignInStyles.message} >{props.message}</p>
		//     <Button onClick={() => { props.onSubmit(getFields()) }} version="primary" style={SignInStyles.signInButton}>Entrar</Button>
		//     <Link style={SignInStyles.forgotPassword} to={"/"}>Esqueci minha senha</Link>
		// </div>
		//     <h3 style={SignInStyles.signUpCall}>Não tem uma conta? <span onClick={props.onVisibilityChange} style={{color: ColorPalette.orange, cursor: "pointer"}}>Registre-se</span></h3>
		// </div>
	);
}

export default SignIn;
