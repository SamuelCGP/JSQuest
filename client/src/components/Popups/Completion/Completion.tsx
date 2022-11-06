import ColorPalette from "../../../utils/ColorPalette";
import { Heading } from "../../Global";
import { ModalCard, ModalText } from "../Popup.styles";
import {
	ButtonContainer,
	ActionButton,
	HomeIcon,
	AgainIcon,
	NextIcon,
	ChapterLesson,
} from "./Completion.styles";

function Completion() {
	return (
		<ModalCard bgColor={ColorPalette.white}>
			<ChapterLesson>1 - 4</ChapterLesson>
			<Heading inverse>Você passou!</Heading>
			<ButtonContainer>
				<ActionButton>
					<HomeIcon />
				</ActionButton>
				<ActionButton>
					<AgainIcon />
				</ActionButton>
				<ActionButton>
					<NextIcon />
				</ActionButton>
			</ButtonContainer>
		</ModalCard>
	);
}

export default Completion;
