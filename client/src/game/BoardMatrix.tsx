import { Elements } from "../components";
import { Element } from "./Element";

export class BoardMatrix {
	x: number;
	y: number;
	elements: Elements[] | any;
	robot: Element = new Element("robot", 0, 0);
	matrix: any;
	previousMoveId: string;

	constructor(
		collumnNumber: number,
		rowNumber: number,
		elements: Elements[]
	) {
		this.x = collumnNumber;
		this.y = rowNumber;
		this.elements = elements;
		this.matrix = this.makeMatrix(collumnNumber, rowNumber, elements);
		this.previousMoveId = "";
	}

	makeMatrix(w: number, h: number, elements: Elements[]) {
		// creating an empty matrix
		let bidimensional = new Array();

		for (let i = 0; i < h; i++) {
			bidimensional[i] = new Array(w);
		}

		// placing elements in matrix
		for (let x = 0; x < w; x++) {
			for (let y = 0; y < h; y++) {
				elements.forEach((element: Elements) => {
					if (element.x == x + 1 && element.y == y + 1) {
						bidimensional[y][x] = new Element(
							element.element,
							element.x - 1,
							element.y - 1
						);
						if (element.element === "robot") {
							this.robot = bidimensional[y][x];
						}
					}
				});
			}
		}

		return bidimensional;
	}

	attemptMovement(xOffset: number, yOffset: number, moveId: string) {
		// prevents method from running more than one time per request of attempt
		if (moveId === this.previousMoveId) return;
		this.previousMoveId = moveId;

		const newRobot = new Element(
			"robot",
			this.robot.x + xOffset,
			this.robot.y - yOffset
		);

		if (this.checkMovement(newRobot, this.robot)) {
			this.matrix[this.robot.y][this.robot.x] = undefined;

			this.robot.x = newRobot.x;
			this.robot.y = newRobot.y;

			this.robot.move();

			this.matrix[this.robot.y][this.robot.x] = this.robot;

			console.log(this.matrix);
		}
	}

	checkMovement(newRobot: Element, oldRobot: Element): boolean {
		const intendedMatrixPos = this.matrix[newRobot.y][newRobot.x];

		if (
			intendedMatrixPos === undefined &&
			newRobot.x < this.x &&
			newRobot.x >= 0 &&
			newRobot.y < this.y &&
			newRobot.y >= 0
		) {
			return true;
		} else {
			return false;
		}
	}
}
