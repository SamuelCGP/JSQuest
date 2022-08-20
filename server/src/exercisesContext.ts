export class Context {
    constructor() {}
    
    contextObj = {
        _yPos: 0,
        _xPos: 0,
        andar: (direcao: string) => {
            switch(direcao) {
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
        }
    }
}