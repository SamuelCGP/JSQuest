import React from "react";
import StyleSheet from "../../utils/StyleSheet";
import ColorPalette from "../../utils/ColorPalette";

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
        width: '55vw',
        height: '70vh',
        backgroundColor: ColorPalette.navyBlue,
        borderRadius: '30px'
    },
    authCard: {
        width: '50%',
        height: '100%',
        backgroundColor: ColorPalette.white,
        borderRadius: '30px',
        transition: '.8s ease-out',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    authCardSignUp: {
        width: '50%',
        height: '100%',
        backgroundColor: ColorPalette.white,
        borderRadius: '30px',
        marginLeft: '50%',
        transition: '.8s ease-out',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default AuthStyles;
