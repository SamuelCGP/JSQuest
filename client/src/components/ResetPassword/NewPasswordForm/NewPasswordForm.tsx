import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { LockIcon, NewPasswordFormTag } from "./NewPasswordForm.styles";
import { TextField, FormMessage, Button } from "../..";

const NewPasswordSchema = Yup.object().shape({
	new_password: Yup.string()
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
			"A senha precisa ter uma letra maiúscula, minúscula, um número e 8 caracteres no mínimo"
		)
		.required("Senha necessária"),
	confirm_new_password: Yup.string()
		.label("confirm password")
		.required("Confirmação de senha necessária")
		.oneOf([Yup.ref("new_password"), null], "As senhas não coincidem"),
});

interface NewPasswordFormProps {
	onSubmit: Function;
	formMessage: string;
}

export function NewPasswordForm(props: NewPasswordFormProps) {
	return (
		<Formik
			initialValues={{ new_password: "", confirm_new_password: "" }}
			validationSchema={NewPasswordSchema}
			onSubmit={(values, { setSubmitting }) => {
				props.onSubmit(values);
				setSubmitting(false);
			}}
		>
			{({ isSubmitting }) => (
				<NewPasswordFormTag>
					<LockIcon />
					<TextField
						name="new_password"
						placeholder="Digite sua senha"
						type="password"
					/>
					<ErrorMessage name="new_password" component={FormMessage} />
					<TextField
						name="confirm_new_password"
						placeholder="Confirme sua senha"
						type="password"
					/>
					<ErrorMessage
						name="confirm_new_password"
						component={FormMessage}
					/>
					<Button
						type="submit"
						disabled={isSubmitting}
						primary
						padding={"20px"}
						fontSize={"1em"}
						mt={"20px"}
						mb={"10px"}
					>
						{isSubmitting ? "Aguarde..." : "Confirmar"}
					</Button>
					<FormMessage>{props.formMessage}</FormMessage>
				</NewPasswordFormTag>
			)}
		</Formik>
	);
}
