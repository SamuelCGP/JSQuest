import { MouseEventHandler, useState } from "react";
import { ForgotPassword, SignInForm, SignUpCall } from "./SignIn.styles";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { Column, Heading, TextField, FormMessage, Button } from "../..";

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

export function SignIn(props: SignInProps) {
	const [emailValue, setEmailValue] = useState();

	const handleChanges = (event: any) => {
		const target = event.target;
		if (target.name === "email") {
			setEmailValue(target.value);
		}
	};

	if (props.isVisible)
		return (
			<Formik
				initialValues={{ email: "", password: "" }}
				validationSchema={SignInSchema}
				onSubmit={async (values, { setSubmitting }) => {
					await props.onSubmit(values);
					setSubmitting(false);
				}}
			>
				{({ isSubmitting }) => (

					<SignInForm onChange={handleChanges}>
						<Heading inverse mb={"10px"}>
							Login
						</Heading>
						<TextField
							type="email"
							name="email"
							placeholder="Digite seu email"
						/>
						<ErrorMessage name="email" component={FormMessage} />
						<TextField
							type="password"
							name="password"
							placeholder="Digite sua senha"
						/>
						<ErrorMessage name="password" component={FormMessage} />
						<Column margin={"0 0 2rem 0"}>
							<FormMessage>{props.message}</FormMessage>
							<Button
								type="submit"
								className={isSubmitting ? "loading" : ""}
								disabled={isSubmitting}
								primary
								padding={"20px"}
								fontSize={"1em"}
								mb={"10px"}
							>
								<span className="btn-text">Entrar</span>
							</Button>
							<ForgotPassword
								onClick={() => {
									const email = emailValue;
									props.onForgotPassword(email);
								}}
							>
								Esqueci minha senha
							</ForgotPassword>
						</Column>
						<SignUpCall>Não tem uma conta?</SignUpCall>
						<SignUpCall
							clickable
							onClick={props.onVisibilityChange}
						>
							Registre-se
						</SignUpCall>
					</SignInForm>
				)}
			</Formik>
		);

	return <></>;
}
