import { Elements } from "../components";

export class BoardMatrix {
	x: number;
	y: number;
	elements: Elements[] | any;
	robotPosition: number[];
	matrix: any;

	constructor(
		collumnNumber: number,
		rowNumber: number,
		elements: Elements[]
	) {
		this.x = collumnNumber;
		this.y = rowNumber;
		this.elements = elements;
		this.robotPosition = this.getInitialRobotPosition(elements);
		this.matrix = this.makeArray(collumnNumber, rowNumber, elements);
	}

	makeArray(w: number, h: number, elements: Elements[]) {
		// creating an empty matrix
		let bidimensional = new Array(w);

		for (let i = 0; i < h; i++) {
			bidimensional[i] = new Array(w);
		}

		// placing elements in matrix
		for (let x = 0; x < w; x++) {
			for (let y = 0; y < h; y++) {
				elements.forEach((element: Elements) => {
					if (element.x == x + 1 && element.y == y + 1) {
						bidimensional[y][x] = element.element;
					}
				});
			}
		}

		return bidimensional;
	}

	getInitialRobotPosition(elements: Elements[]) {
		let robotPosition = [0, 0];
		elements.forEach((element: Elements) => {
			if ((element.element = "robot")) {
				robotPosition = [element.x - 1, element.y - 1];
			}
		});
		return robotPosition;
	}

	checkMovement(xForce: number, yForce: number) {
		console.log("posição", this.robotPosition);
		console.log(
			"nova posição",
			this.robotPosition[0] + xForce,
			this.robotPosition[1] - yForce
		);
		const newRobotPosition = [
			this.robotPosition[0] + xForce,
			this.robotPosition[1] - yForce,
		];
		console.log(
			"posição na matriz",
			this.matrix[newRobotPosition[0]][newRobotPosition[1]]
		);
	}
}
