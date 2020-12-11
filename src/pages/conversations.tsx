import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { Layout, Conversations } from '@/templates';
import { addMessageAction, loadConversationsAction } from 'root/actions';

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
    dispatch(loadConversationsAction(user.id));
    socket = io('ws://localhost:3000');
    socket.emit('join', { token: user.token }, (error: any) => {
      if (error) {
        return false;
      }
    });
  }, []);

  useEffect(() => {
    socket.on('join', () => {
      //
    });

    socket.on('answer', (message: any) => {
      dispatch(addMessageAction(message.data));
    });
  }, []);

  return (
    <Layout>
      <Conversations />
    </Layout>
  );
};

export default ConversationsPage;
