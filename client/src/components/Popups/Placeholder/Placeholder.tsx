import ColorPalette from "../../../utils/ColorPalette";
import { Heading } from "../../Global";
import { ModalCard, ModalText } from "../Popup.styles";

function Placeholder() {
	return (
		<ModalCard bgColor={ColorPalette.blueWhite}>
			<Heading inverse>Welcome to JSQuest!</Heading>
			<ModalText>
				Here you will learn a lot! This is a popup just to annoy you a
				little everytime you open our page. And, to annoy you even more,
				take this: Lorem ipsum dolor sit, amet consectetur adipisicing
				elit. Quibusdam, ipsam.
			</ModalText>
		</ModalCard>
	);
}

export default Placeholder;
