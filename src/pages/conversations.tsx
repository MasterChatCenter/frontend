import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { Layout, Conversations } from '@/templates';
import { addMessageAction } from 'root/actions';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = cookies(context);
  if (!user) {
    context.res.writeHead(302, { Location: '/login' }).end();
  } else if (user && (user as any).role.name === 'admin') {
    context.res.writeHead(302, { Location: '/agents' }).end();
  }
  return {
    props: {},
  };
};

let socket: any;

const ConversationsPage = (): JSX.Element => {
  const user = useSelector((store: any) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    socket = io('https://ws.chatcenter.hyfi.dev/');
    socket.emit('client', `${user.token}`, (error: any) => {
      if (error) {
        return false;
      }
    });
    socket.emit('join', { username: 'test1@mail.com' }, (error: any) => {
      if (error) {
        return false;
      }
    });
  }, []);

  useEffect(() => {
    socket.on('answer', (message: any) => {
      dispatch(addMessageAction({ ...message, type: 'recipient' }));
    });
  }, []);

  return (
    <Layout>
      <Conversations />
    </Layout>
  );
};

export default ConversationsPage;
