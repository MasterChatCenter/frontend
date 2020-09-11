import { GetServerSideProps } from 'next';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cookies from 'next-cookies';
import io from 'socket.io-client';

import Layout from '@/templates/Layout';
import ChatList from '@/organisms/ChatList';
import Conversation from '@/organisms/Conversation';
import Costumer from '@/organisms/Costumer';

import { ContainerChat } from 'root/styles';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = cookies(context);
  if (!user) {
    context.res.writeHead(302, { Location: '/login' }).end();
    return {
      props: {},
    };
  }

  if ((user as any).role.name !== 'agent') {
    context.res.writeHead(302, { Location: '/agents' }).end();
  }

  return {
    props: {},
  };
};

let socket: any;
const HomePage = (): JSX.Element => {
  const [margin, setMargin] = useState('0');
  const dispatch = useDispatch();

  const changeMobilePage = (width: string) => {
    const x = window.matchMedia('(min-width: 800px)');
    if (!x.matches) {
      setMargin(width);
    }
  };

  useEffect(() => {
    socket = io('https://ws.chatcenter.hyfi.dev/');
    socket.emit('join', { username: 'test1@mail.com' }, (error: any) => {
      if (error) {
        return false;
      }
    });
  }, []);

  useEffect(() => {
    socket.on('answer', (message: any) => {
      dispatch({ type: 'ADD_MESSAGE', payload: message });
    });
  }, []);

  return (
    <Layout>
      <ContainerChat style={{ marginLeft: margin }}>
        <ChatList changePage={changeMobilePage} />
        <Conversation changePage={changeMobilePage} />
        <Costumer />
      </ContainerChat>
    </Layout>
  );
};

export default HomePage;
