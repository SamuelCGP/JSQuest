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
  // Split.js
  .gutter{
    background-color: #eee;
    opacity: 70%;
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
