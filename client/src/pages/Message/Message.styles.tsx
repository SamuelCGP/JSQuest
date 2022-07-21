import StyleSheet from "../../utils/StyleSheet";
import ColorPalette from "../../utils/ColorPalette";

const MessageStyles: StyleSheet = {
    wrapper: {
        width: '100vw',
        height: '100vh',
        textAlign: 'center'
    },
    title: {
        fontSize: '3em',
        color: ColorPalette.orange,
        fontFamily: 'consolas',
        margin: '0',
        padding: '50px'
    },
    message: {
        fontSize: '2em',
        color: ColorPalette.white,
        fontFamily: 'consolas',
        margin: '20px'
    },
    link: {
        fontSize: '1em',
        color: ColorPalette.orange,
        fontFamily: 'consolas',
        margin: '20px'
    }
};

export default MessageStyles;