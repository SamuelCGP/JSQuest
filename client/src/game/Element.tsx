import * as signals from "./signals";

export class Element {
	x: number;
	y: number;
	originalX: number;
	originalY: number;
	type: string;

	constructor(type: string, x: number, y: number) {
		this.type = type;
		this.originalX = x;
		this.originalY = y;
		this.x = x;
		this.y = y;
	}

	move(): void {
		signals.fireSignal(`${this.type}Movement`, {
			newCoords: { x: this.x, y: this.y },
			originalCoords: { x: this.originalX, y: this.originalY },
		});
	}

	destroy(): void {
		signals.fireSignal(`${this.type}Destruction`, {
			originalCoords: { x: this.originalX, y: this.originalY },
		});
	}
}
