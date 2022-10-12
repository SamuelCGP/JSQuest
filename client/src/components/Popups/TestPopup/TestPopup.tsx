import { Overlay, ModalContent, ModalText } from "./TestPopup.styles";
import "../active-modal.css";
import { useEffect, useState } from "react";
import { Heading } from "../../Global";
import { listenToSignal } from "../../../game/signals";

export function TestPopup() {
	const [showModal, setShowModal] = useState(+false);

	const toggleModal = () => {
		const newValue = showModal ? +false : +true;
		setShowModal(newValue);
	};

	listenToSignal("configPopupCall", () => {
		toggleModal();
	});

	if (showModal) document.body.classList.add("active-modal");
	else document.body.classList.remove("active-modal");

	return (
		<>
			{showModal ? (
				<Overlay onClick={toggleModal}>
					<ModalContent>
						<Heading inverse>Welcome to JSQuest!</Heading>
						<ModalText>
							Here you will learn a lot! This is a popup just to
							annoy you a little everytime you open our page. And,
							to annoy you even more, take this: Lorem ipsum dolor
							sit, amet consectetur adipisicing elit. Quibusdam,
							ipsam.
						</ModalText>
					</ModalContent>
				</Overlay>
			) : (
				<></>
			)}
		</>
	);
}

export default TestPopup;
