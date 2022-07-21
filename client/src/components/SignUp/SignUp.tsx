import { MouseEventHandler } from "react";
import { SignUpForm, SignUpField, SignInCall } from "./SignUp.styles";
import Button from "../Button/Button";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormMessage from "../FormMessage/FormMessage";
import { Heading } from "../Global";

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
	if (props.isVisible)
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
					<SignUpForm>
						<Heading inverse mb={"10px"}>
							Cadastro
						</Heading>
						<SignUpField
							name="username"
							placeholder="Digite seu nome de usuário"
						></SignUpField>
						<ErrorMessage name="username" component={FormMessage} />
						<SignUpField
							name="email"
							placeholder="Digite seu email"
							type="email"
						></SignUpField>
						<ErrorMessage name="email" component={FormMessage} />
						<SignUpField
							name="password"
							placeholder="Digite sua senha"
							type="password"
						></SignUpField>
						<ErrorMessage name="password" component={FormMessage} />
						<SignUpField
							name="confirm_password"
							placeholder="Confirme sua senha"
							type="password"
						></SignUpField>
						<ErrorMessage
							name="confirm_password"
							component={FormMessage}
						/>
						<FormMessage>{props.message}</FormMessage>
						<Button
							type="submit"
							disabled={isSubmitting}
							primary
							padding={"20px"}
							fontSize={"1em"}
							mb={"10px"}
						>
							{isSubmitting ? "Aguarde..." : "Registrar"}
						</Button>
						<SignInCall>Já possui uma conta?</SignInCall>
						<SignInCall clickable onClick={props.onVisibilityChange}>
							Faça login
						</SignInCall>
					</SignUpForm>
				)}
			</Formik>
		);

	return <></>;
}

export default SignUp;
