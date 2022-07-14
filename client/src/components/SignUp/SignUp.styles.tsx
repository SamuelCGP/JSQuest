import React from "react";
import StyleSheet from "../../utils/StyleSheet";
import ColorPalette from "../../utils/ColorPalette";

const SignUpStyles: StyleSheet = {
    title: {
        fontFamily: 'verdana',
        userSelect: 'none'
    },
    signUp: {
        width: '80%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center'
    },
    textFields: {
        padding: '20px',
    },
    signUpButton: {
        padding: '20px',
        fontSize: '1em',
        marginBottom: '10px'
    },
    signInCall: {
        fontFamily: 'consolas',
        userSelect: 'none'
    }
};

export default SignUpStyles;