import ColorPalette from "../../../utils/ColorPalette";
import { Heading } from "../../Global";
import { ModalCard, ModalText } from "../Popup.styles";

function Config() {
	return (
		<ModalCard bgColor={ColorPalette.blueWhite}>
			<Heading inverse>Configurações</Heading>
		</ModalCard>
	);
}

export default Config;
