import * as signals from "./signals";

export interface GameMethods {
	[key: string]: Function;
}

export const gameMethods: GameMethods = {
	andar: function (direction: string) {
		switch (direction) {
			case "esquerda":
				signals.fireSignal("robotReqMovement", {
					x: -1,
					y: 0,
					id: this.randomId(),
				});
				break;
			case "direita":
				signals.fireSignal("robotReqMovement", {
					x: +1,
					y: 0,
					id: this.randomId(),
				});
				break;
			case "cima":
				signals.fireSignal("robotReqMovement", {
					x: 0,
					y: +1,
					id: this.randomId(),
				});
				break;
			case "baixo":
				signals.fireSignal("robotReqMovement", {
					x: 0,
					y: -1,
					id: this.randomId(),
				});
				break;
			default:
				break;
		}
	},

	dialog: function (dialog: string) {
		const splitedDialog = dialog.split("\\");
		signals.fireSignal("dialogDialog", {
			dialog: splitedDialog,
		});
	},

	randomId: () => {
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
	},

	reset: () => {
		signals.fireSignal("boardReset", {});
	},
};
