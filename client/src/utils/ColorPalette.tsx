import Color from "./Color";

interface ColorPaletteObject{
    darkBlue: Color,
    blue: Color,
    navyBlue: Color,
    lightCyan: Color,
    blueWhite: Color,
    blueGray: Color,
    white: Color,
    orange: Color
}

const ColorPalette: ColorPaletteObject = {
    darkBlue: "#16215b",
    blue: "#1f299c",
    navyBlue: "#0373ff",
    lightCyan: "#30d1ff",
    blueWhite: "#a3a9f5",
    blueGray: "#787ca9",
    white: "#e0eaf8",
    orange: "#f25929"
}

export default ColorPalette;