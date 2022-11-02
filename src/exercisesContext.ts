export interface Command {
	[key: string]: any[]
}

export interface ContextObj {
	_dialog: string[];
	_commands: Command[];
	_yPos: number;
	_xPos: number;
	andar(direcao: string): void;
	console: {
		log(message: any): void;
	};
	[key: string]: any;
}

export class Context {
	constructor() {}

	contextObj: ContextObj = {
		_dialog: [] as string[],
		_commands: [],
		_yPos: 0,
		_xPos: 0,

		andar: (direcao: string) => {
			this.contextObj._commands.push({andar: [direcao]});

			switch (direcao) {
				case "cima":
					this.contextObj._yPos += 1;
					break;
				case "baixo":
					this.contextObj._yPos -= 1;
					break;
				case "esquerda":
					this.contextObj._xPos -= 1;
					break;
				case "direita":
					this.contextObj._xPos += 1;
					break;
				default:
					throw Error("Direção inválida");
			}
		},
		console: {
			log: (...messages: any) => {
				for (let message of messages) {
					this.contextObj._commands.push({dialog: [message]});

					this.contextObj._dialog.push(`${message}`);
				}
			},
		},
	};
}
