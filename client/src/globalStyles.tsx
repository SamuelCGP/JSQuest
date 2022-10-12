import { createGlobalStyle } from "styled-components";
import ColorPalette from "./utils/ColorPalette";

export const GlobalStyle = createGlobalStyle`
  :root{
    font-family: calibri;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: calibri;
  }
  body{
    background-color: ${ColorPalette.primary};
    height: 100vh;
  }
  ::-webkit-scrollbar{
    width: .5rem;
    padding: 20px;
  }
  ::-webkit-scrollbar-track-piece{
    background: ${ColorPalette.secondaryDark + "a4"};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb{
    background: ${ColorPalette.white};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-button {
    width: 8px;
    height: 8px;
}
  // Split.js
  .gutter{
    background-color: #000000;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .gutter.gutter-vertical{
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
    cursor: row-resize;
  }
  .gutter.gutter-horizontal{
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
    cursor: col-resize;
  }
`;
