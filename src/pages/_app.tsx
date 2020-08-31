import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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

const theme = {
  primary: '#00695C',
  primaryDark: '#003D33',
  primaryLight: '#439889',
  secondary: '#80CBC4',
  secondaryDark: '#4F9A94',
  secondaryLight: '#B2FEF7',
  booleanGreen: '#42B72A',
  booleanRed: '#FA3E3E',
  background: "#FFF",
  text: '#000',
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp;
