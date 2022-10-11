import * as signals from "./signals";

export const robotMethods = {
	andar: function (direction: string) {
		switch (direction) {
			case "esquerda":
				signals.fireSignal("robotMovement", { x: -1, y: 0 });
				break;
			case "direita":
				signals.fireSignal("robotMovement", { x: +1, y: 0 });
				break;
			case "cima":
				signals.fireSignal("robotMovement", { x: 0, y: +1 });
				break;
			case "baixo":
				signals.fireSignal("robotMovement", { x: 0, y: -1 });
				break;
			default:
				break;
		}
	},
};
