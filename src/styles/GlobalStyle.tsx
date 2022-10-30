import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Montserrat, sans-serif;
    line-height: 1.5;
  }

  button {
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    border: none;
    /* line-height: 0; */
  }
`;
export default GlobalStyle;
