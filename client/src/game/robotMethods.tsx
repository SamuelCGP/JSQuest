import * as signals from "./signals";

export const robotMethods = {
	andar: function () {
		signals.fireSignal("robotMovement", { x: 2, y: 1 });
	},
};
