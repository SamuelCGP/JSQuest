import React from "react";
import StyleSheet from "../utils/StyleSheet";
import ColorPalette from "../utils/ColorPalette";

const AuthStyles: StyleSheet = {
    authentication: {
        width: '100vw',
        height: '100vh',
        backgroundColor: ColorPalette.darkBlue,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    title: {
        color: ColorPalette.white,
        fontFamily: 'verdana',
        textAlign: 'center',
    },
    mainContainer: {
        width: '80vw',
        height: '70vh',
        backgroundColor: ColorPalette.navyBlue,
        borderRadius: '30px'
    },
    loginCard: {
        width: '30%',
        height: '100%',
        backgroundColor: ColorPalette.white,
        borderRadius: '30px',
        transition: '1s'
    },
    loginCardHover: {
        width: '30%',
        height: '100%',
        backgroundColor: ColorPalette.white,
        borderRadius: '30px',
        marginLeft: '70%',
        transition: '1s'
    }
};

export default AuthStyles;