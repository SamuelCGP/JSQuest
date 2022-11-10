import ColorPalette from "../../../utils/ColorPalette";
import { Heading } from "../../Global";
import { ModalCard } from "../Popup.styles";
import {
	ButtonContainer,
	ActionButton,
	HomeIcon,
	AgainIcon,
	NextIcon,
	ChapterLesson,
} from "./Completion.styles";
import { Params, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { fireSignal } from "../../../game/signals";

function Completion() {
	const { c_index, l_index }: Readonly<Params<string>> = useParams();
	const [navigation, setNavigation] = useState<string>();

	const navigationHandler = (location: string) => {
		switch (location) {
			case "home":
				setNavigation("/home");
				break;
			case "none":
				fireSignal("completionPopupCall", {});
				break;
			case "next":
				if (c_index === undefined || l_index === undefined) return;

				let nextChapter = Number(c_index);
				let nextLesson = Number(l_index);

				nextLesson = nextLesson + 1;

				if (nextChapter !== 0) {
					if (nextLesson > 3) {
						nextChapter = nextChapter + 1;
						nextLesson = 0;
					}
				} else {
					if (nextLesson > 2) {
						nextChapter = nextChapter + 1;
						nextLesson = 0;
					}
				}

				console.log(`/chapter/${nextChapter}/lesson/${nextLesson}`);
				setNavigation(
					`${window.location.protocol}//${window.location.host}/chapter/${nextChapter}/lesson/${nextLesson}`
				);
				break;
		}
	};

	//------------------------------------------------

	if (navigation) {
		const path = navigation;
		// <Navigate to={path}/> doesn't work well here, because the states must be reloaded
		window.location.href = path;
		return <></>;
	}

	return (
		<ModalCard bgColor={ColorPalette.white}>
			<ChapterLesson>
				{c_index} - {l_index}
			</ChapterLesson>
			<Heading inverse>Você passou!</Heading>
			<ButtonContainer>
				<ActionButton
					onClick={() => {
						navigationHandler("home");
					}}
				>
					<HomeIcon />
				</ActionButton>
				<ActionButton
					onClick={() => {
						navigationHandler("none");
					}}
				>
					<AgainIcon />
				</ActionButton>
				<ActionButton
					onClick={() => {
						navigationHandler("next");
					}}
				>
					<NextIcon />
				</ActionButton>
			</ButtonContainer>
		</ModalCard>
	);
}

export default Completion;
