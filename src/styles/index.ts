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
  text: '#202336',
};

export const themeDark = {
  primary: '#0F2229',
  primaryDark: '#0F2229',
  primaryLight: 'yellow',
  secondary: '#80CBC4',
  secondaryDark: '#4F9A94',
  secondaryLight: 'green',
  booleanGreen: 'gray',
  booleanRed: '#FA3E3E',
  background: '#203A43',
  text: '#FFF',
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
.my-node-enter {
    opacity: 0;
  }
.my-node-enter-active {
  opacity: 1;
  transition: opacity 200ms;
}
.my-node-exit {
  opacity: 1;
}
.my-node-exit-active {
  opacity: 0;
}
`;

export const Grid = styled.div`
  padding: 20px;
  height: 100%;
  overflow-y: auto;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    gap: 20px;
    padding: 0;
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

export const ContainerChat = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 300%;
  height: 100%;
  margin-left: 0%;

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(11, 1fr);
    width: 100%;
    margin-left: 0%;
  }
`;

export const LoadedChat = styled.div`
  grid-column: 4 /12;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 65px 1fr;
  height: 100%;
  overflow: hidden;

  > div:first-child {
    grid-column: 1 / 9;
    grid-row: 1 / 2;
  }

  > div:last-child {
    grid-column: 1 / 9;
    grid-row: 2 / 3;
    display: inherit;
    grid-template-columns: repeat(8, 1fr);
    height: 100%;
    overflow: hidden;
  }
`;

export const MessageError = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.text};
`;
