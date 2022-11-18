import { Elements } from "../components";
import { Element } from "./Element";

export class BoardMatrix {
	x: number;
	y: number;
	elements: Elements[] | any;
	robot: Element = new Element("robot", 0, 0);
	matrix: any;
	previousMoveId: string;
	hasStar: boolean = false;

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
					if (element.x === x + 1 && element.y === y + 1) {
						bidimensional[y][x] = new Element(
							element.element,
							element.x - 1,
							element.y - 1
						);
						if (element.element === "robot") {
							this.robot = bidimensional[y][x];
						}
						if (element.element === "star") {
							this.hasStar = true;
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

		if (this.checkMovement(newRobot, xOffset, yOffset)) {
			this.matrix[this.robot.y][this.robot.x] = undefined;

			this.robot.x = newRobot.x;
			this.robot.y = newRobot.y;

			this.robot.move();

			this.matrix[this.robot.y][this.robot.x] = this.robot;
		}
	}

	checkMovement(
		newRobot: Element,
		xOffset: number,
		yOffset: number
	): boolean {
		if (
			newRobot.x < this.x &&
			newRobot.x >= 0 &&
			newRobot.y < this.y &&
			newRobot.y >= 0
		) {
			const intendedMatrixPos = this.matrix[newRobot.y][newRobot.x];

			//no colision, movement is possible
			if (intendedMatrixPos === undefined) return true;

			//colision, movement is blocked
			if (
				intendedMatrixPos.type !== "box" &&
				intendedMatrixPos.type !== "star"
			)
				return false;

			//box ahead, PUSH IT!
			if (intendedMatrixPos.type === "box") {
				const box = new Element(
					"box",
					intendedMatrixPos.originalX,
					intendedMatrixPos.originalY
				);

				box.x = intendedMatrixPos.x + xOffset;
				box.y = intendedMatrixPos.y - yOffset;

				if (intendedMatrixPos.type === box.type) {
					if (
						box.x < this.x &&
						box.x >= 0 &&
						box.y < this.y &&
						box.y >= 0 &&
						this.matrix[box.y][box.x] === undefined
					) {
						//box will not colide, movement is possible
						this.matrix[box.y][box.x] = box;
						box.move();
						return true;
					}

					//box will colide, movement is blocked
					return false;
				}
			}

			//star ahead, TAKE IT!
			if (intendedMatrixPos.type === "star") {
				intendedMatrixPos.destroy();
				return true;
			}
		}

		//colided with boundaries
		return false;
	}
}
