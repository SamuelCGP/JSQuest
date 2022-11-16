import styled from "styled-components";

export const Heading = styled.h1`
	text-align: center;
`;

export const UserCard = styled.div`
	width: 15rem;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 2px solid black;
	border-radius: 1rem;
	font-size: 1.5rem;
	text-align: center;
	padding: 10px;
	margin: 0.5rem;
`;

export const LogoutButton = styled.button`
	background-color: rgb(220, 53, 69);
	color: white;
	outline: none;
	border: none;
	padding: 0.5rem;
	border-radius: 5px;
	&:hover,
	&:focus {
		background-color: rgb(173, 62, 73);
	}
`;
