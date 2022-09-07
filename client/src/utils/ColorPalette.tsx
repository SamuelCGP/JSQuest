import Color from "./Color";

interface ColorPaletteObject {
	secondaryDark: Color;
	secondary: Color;
	secondaryLight: Color;
	primaryDark: Color;
	primary: Color;
	primaryLight: Color;
	blueWhite: Color;
	blueGray: Color;
	white: Color;
	yellowOrange: Color;
	black: Color;
}

const ColorPalette: ColorPaletteObject = {
	secondaryDark: "#240043",
	secondary: "#3800e0",
	secondaryLight: "#c067e9",
	primaryDark: "#00547a",
	primary: "#009ec2",
	primaryLight: "#52f7e1",
	blueWhite: "#dfe7f8",
	blueGray: "#787ca9",
	white: "#fcfcfc",
	yellowOrange: "#ffd900",
	black: "#030716",
};

export default ColorPalette;
