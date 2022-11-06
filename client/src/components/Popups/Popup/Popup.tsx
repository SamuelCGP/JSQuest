import "../active-modal.css";
import { useState } from "react";
import { listenToSignal } from "../../../game/signals";
import Placeholder from "../Placeholder/Placeholder";
import Completion from "../Completion/Completion";
import { Overlay } from "../Popup.styles";
import Config from "../Config/Config";

interface PopupProps {
	type: string;
}

export function Popup(props: PopupProps) {
	const [showModal, setShowModal] = useState(+false);

	const toggleModal = () => {
		const newValue = showModal ? +false : +true;
		setShowModal(newValue);
	};

	listenToSignal(`${props.type}PopupCall`, () => {
		toggleModal();
	});

	if (showModal) document.body.classList.add("active-modal");
	else document.body.classList.remove("active-modal");

	if (!showModal) return <></>;

	switch (props.type) {
		case "placeholder":
			return (
				<>
					<Placeholder />
					<Overlay onClick={toggleModal}></Overlay>
				</>
			);
		case "completion":
			return (
				<>
					<Completion />
					<Overlay onClick={toggleModal}></Overlay>
				</>
			);
		case "config":
			return (
				<>
					<Config />
					<Overlay onClick={toggleModal}></Overlay>
				</>
			);
		default:
			return (
				<>
					<Overlay onClick={toggleModal}></Overlay>
				</>
			);
	}
}

export default Popup;
