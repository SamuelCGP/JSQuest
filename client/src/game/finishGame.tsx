import { fireSignal } from "./signals";

export const finishGame = () => {
	// sends signal to LessonBoard.tsx
	fireSignal("reqFinishGame", {});
};
