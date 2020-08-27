import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

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
  font-size: 24px
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

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
