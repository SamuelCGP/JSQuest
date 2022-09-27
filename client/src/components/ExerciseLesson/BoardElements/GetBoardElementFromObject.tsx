import {Robot} from "../BoardElements";
import { Elements } from "../LessonBoard/LessonBoard";

export default (elementObj: Elements) => {
    switch(elementObj.element){
        case "robot" || "Robot":
            return <Robot positionX={elementObj.x} positionY={elementObj.y} />
    }
}