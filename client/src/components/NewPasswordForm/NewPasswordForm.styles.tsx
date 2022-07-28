import ColorPalette from "../../utils/ColorPalette";
import styled from "styled-components";
import { Form, Field } from "formik";
import { FaUnlockAlt } from "react-icons/fa";

export const LockIcon = styled(FaUnlockAlt)`
	color: ${ColorPalette.orange};
	margin: 1rem;
	align-self: center;
	width: 5rem;
	height: 5rem;
	@media (min-width: 900px) {
		width: 10rem;
		height: 10rem;
	}
`;

export const NewPasswordFormTag = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
`;