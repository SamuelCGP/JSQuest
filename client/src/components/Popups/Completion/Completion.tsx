import ColorPalette from "../../../utils/ColorPalette";
import { Heading } from "../../Global";
import { ModalCard, ModalText } from "../Popup.styles";

function Completion() {
	return (
		<ModalCard bgColor={ColorPalette.blueWhite}>
			<Heading inverse>Você passou!</Heading>
		</ModalCard>
	);
}

export default Completion;
