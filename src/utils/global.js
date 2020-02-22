import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local('.SFNSText-Light'), local('.HelveticaNeueDeskInterface-Light'),
      local('.LucidaGrandeUI'), local('Ubuntu Light'), local('Segoe UI Light'),
      local('Roboto-Light'), local('DroidSans'), local('Tahoma');
  }

  :root {
    font-size: 10px;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'system';
    margin: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.colors.textColor};
    background-color: ${props => props.theme.colors.background};
    min-height: 100vh;
    position: relative;
    font-size: 1.6rem;
  }

  ::selection {
    background-color: #08B2E3;
    color: #FFFFFF;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Aleo', serif;
  }

  h1::selection, h2::selection, h3::selection, h4::selection, h5::selection, h6::selection {
    background-color: #DA344D;
  }
  
  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 1.6rem;
  }
  
  code {
    font-family: Menlo,Monaco,"Courier New",Courier,monospace;
    word-break: break-word;
  }

  pre code {
    word-break: normal;
  }
`;

export default GlobalStyles;
