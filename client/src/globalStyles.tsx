import { createGlobalStyle } from "styled-components";
import ColorPalette from "./utils/ColorPalette";

export const GlobalStyle = createGlobalStyle`
  :root{
    font-family: consolas;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    background-color: ${ColorPalette.darkBlue};
  }
  ::-webkit-scrollbar{
    width: 1.5em;
  }
  ::-webkit-scrollbar-track-piece{
    background: ${ColorPalette.blue}
  }
  ::-webkit-scrollbar-thumb{
    background: ${ColorPalette.navyBlue}
  }
`;
