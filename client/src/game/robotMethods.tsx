import * as signals from "./signals";

export const robotMethods = {
	andar: function (direction: string) {
		switch (direction) {
			case "esquerda":
				signals.fireSignal("robotReqMovement", {
					x: -1,
					y: 0,
					id: randomId(),
				});
				break;
			case "direita":
				signals.fireSignal("robotReqMovement", {
					x: +1,
					y: 0,
					id: randomId(),
				});
				break;
			case "cima":
				signals.fireSignal("robotReqMovement", {
					x: 0,
					y: +1,
					id: randomId(),
				});
				break;
			case "baixo":
				signals.fireSignal("robotReqMovement", {
					x: 0,
					y: -1,
					id: randomId(),
				});
				break;
			default:
				break;
		}
	},
};

let randomId = () => {
	let s4 = () => {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	};
	//return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
	return (
		s4() +
		s4() +
		"-" +
		s4() +
		"-" +
		s4() +
		"-" +
		s4() +
		"-" +
		s4() +
		s4() +
		s4()
	);
};