import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Yeon Sung';
    font-family: 'Nanum Pen Script';
  }

  a {
    text-decoration-line: none;
  }

  #root {
    background-color: white;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  }
`;

export default GlobalStyle;
