import styled from "styled-components";
import { Container } from "../../components";

export const MainContainer = styled(Container)`
	margin: 0;
	padding: 0;
	height: 100%;
	@media (min-width: 900px) {
		margin-left: 4rem;
		display: flex;
		max-width: calc(100vw - 4rem);
	}
`;
