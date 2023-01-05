import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #f5f5f5;
    --secondary-color: #232323;
    --primary-font: 'Poppins', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--primary-font), sans-serif;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    height: 100%;
  }

  a {
    text-decoration: none;
    color: var(--secondary-color);
  }
`;