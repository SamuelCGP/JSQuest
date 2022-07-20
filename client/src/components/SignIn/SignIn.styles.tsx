import React from "react";
import StyleSheet from "../../utils/StyleSheet";
import ColorPalette from "../../utils/ColorPalette";

const SignInStyles: StyleSheet = {
    motherDiv: {
        width: '80%',
    },
    title: {
        fontFamily: 'verdana',
        userSelect: 'none'
    },
    signIn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center'
    },
    textFields: {
        padding: '20px',
    },
    groupButtonAndForgotPassword: {
        display: 'flex',
        flexDirection: 'column'
    },
    signInButton: {
        padding: '20px',
        fontSize: '1em',
        marginBottom: '10px'
    },
    forgotPassword: {
        fontFamily: 'consolas',
        color: ColorPalette.orange,
        userSelect: 'none'
    },
    signUpCall: {
        fontFamily: 'consolas',
        userSelect: 'none'
    }
};

export default SignInStyles;