import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    font-family: "Inter", sans-serif;
    margin: 0px;
    padding: 0px 10px;
    box-sizing: border-box;
    background: #fff;
  }
  a {
    text-decoration: none;
  }
  h1 {
    margin: 16px 16px;
    font-size: bold;
  }
`;
