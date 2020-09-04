import App, { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import cookies from 'next-cookies';
import { useStore } from 'root/store';

import { GlobalStyles, theme } from 'root/styles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
       <Provider store={store}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
       </Provider>
    </>
  )
}

MyApp.getInitialProps = async (context: any) => {
  const { user } = cookies(context.ctx);

  const props = await App.getInitialProps(context);
  if (user) {
    props.pageProps.initialReduxState = {
      ...props.pageProps.initialReduxState,
      user,
    }
  }

  return { ...props };
}

export default MyApp;
