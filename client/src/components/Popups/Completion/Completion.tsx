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
import { Params, useParams } from "react-router-dom";

function Completion() {
	const { c_index, l_index }: Readonly<Params<string>> = useParams();

	return (
		<ModalCard bgColor={ColorPalette.white}>
			<ChapterLesson>
				{c_index} - {l_index}
			</ChapterLesson>
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
