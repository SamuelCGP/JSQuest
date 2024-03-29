import styled from "styled-components";

export const Overlay = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: #01010160;
	top: 0;
	bottom: 0;
	right: 0;
	z-index: 2;
	backdrop-filter: blur(2px);
	display: flex;
	align-items: center;
	justify-content: center;
	@media (min-width: 900px) {
		width: calc(100vw - 4rem);
		height: 100vh;
	}
`;

interface ModalContentProps {
	bgColor: string;
}

export const ModalCard = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: fit-content;
	max-width: 90%;
	height: fit-content;
	padding: 2.5rem;
	background-color: ${(props: ModalContentProps) => props.bgColor};
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	z-index: 3;
	@media (min-width: 900px) {
		max-width: 50%;
	}
`;

export const ModalText = styled.p`
	padding-top: 1rem;
	font-size: 1.2rem;
	text-align: justify;
`;
