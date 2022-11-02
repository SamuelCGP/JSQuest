import styled from "styled-components";

export const MainContainer = styled.div`
	height: calc(100vh- 4rem);
	overflow: hidden;
	@media (min-width: 900px) {
		margin-left: 4rem;
		display: flex;
		width: calc(100vw - 4rem);
		height: 100vh;
	}
`;
