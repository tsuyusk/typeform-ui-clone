import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input,
  textarea,
  body {
    color: #262627;
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
    color: #262627;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
