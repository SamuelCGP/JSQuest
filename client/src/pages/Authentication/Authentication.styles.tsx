import StyleSheet from "../../utils/StyleSheet";
import ColorPalette from "../../utils/ColorPalette";

const AuthStyles: StyleSheet = {
  authentication: {
    width: "100vw",
    height: "100vh",
    backgroundColor: ColorPalette.darkBlue,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    color: ColorPalette.white,
    fontFamily: "verdana",
    textAlign: "center",
  },
  mainContainer: {
    width: "80rem",
    height: "40rem",
    backgroundColor: ColorPalette.navyBlue,
    borderRadius: "30px",
    position: "relative",
  },
  authCard: {
    width: "50%",
    backgroundColor: ColorPalette.white,
    borderRadius: "30px",
    transition: ".8s ease-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem",
    position: "absolute",
    top: "0",
    right: "42.5%",
  },
};

export default AuthStyles;
