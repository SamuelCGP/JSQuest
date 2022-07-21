import { createGlobalStyle } from "styled-components";
import ColorPalette from "./utils/ColorPalette";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: consolas;
  }
  body{
    background-color: ${ColorPalette.darkBlue};
  }
`;
