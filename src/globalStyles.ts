import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@500;600;700;800&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: all .3s ease;
    scroll-behavior: smooth;

    font-family: 'Manrope', sans-serif;
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
`;
export default GlobalStyle;
