import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  primary: '#00695C',
  primaryDark: '#003D33',
  primaryLight: '#439889',
  secondary: '#80CBC4',
  secondaryDark: '#4F9A94',
  secondaryLight: '#B2FEF7',
  booleanGreen: '#42B72A',
  booleanRed: '#FA3E3E',
  background: '#FFF',
  text: '#000',
};

export const GlobalStyles = createGlobalStyle`
* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: normal;
}

h1 {
  font-size: 50px;
  font-weight: bold;
}

h2 {
  font-size: 24px;
  font-weight: bold;
}

h3 {
  font-size: 14px;
  font-weight: bold;
}
small {
  font-size: 10px;
  font-weight: normal;
}
`;

export const CSSContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  padding: 20px;
  background-color: ${(props) => props.theme.primaryDark};

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
  }
`;
