import App, { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import cookies from 'next-cookies';
import io from 'socket.io-client';
import { useStore } from 'root/store';

import { GlobalStyles, theme } from 'root/styles';

let socket: any;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const store = useStore(pageProps.initialReduxState);

  useEffect(() => {
    socket = io('https://ws.chatcenter.hyfi.dev/');
    socket.emit('join', { username: 'test1@mail.com' }, (error: any) => {
      if (error) {
        return false;
      }
    });
  }, []);

  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

MyApp.getInitialProps = async (context: any) => {
  const { user } = cookies(context.ctx);

  const props = await App.getInitialProps(context);
  if (user) {
    props.pageProps.initialReduxState = {
      ...props.pageProps.initialReduxState,
      user,
    };
  }

  return { ...props };
};

export default MyApp;
