import { robotMethods } from "./robotMethods";

export const runCode = () => {
	const random = Math.floor(Math.random() * 4);
	console.log(random);
	switch (random) {
		case 0:
			robotMethods.andar("esquerda");
			break;
		case 1:
			robotMethods.andar("cima");
			break;
		case 2:
			robotMethods.andar("baixo");
			break;
		case 3:
			robotMethods.andar("direita");
			break;
	}
};
