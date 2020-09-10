import { GetServerSideProps } from 'next';
import React, { useState } from 'react';
import cookies from 'next-cookies';

import Layout from '@/templates/Layout';
import ChatList from '@/organisms/ChatList';
import Conversation from '@/organisms/Conversation';
import Costumer from '@/organisms/Costumer';

import { ContainerChat } from 'root/styles';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = cookies(context);
  if (!user) {
    context.res.writeHead(302, { Location: '/login' }).end();
  }

  return {
    props: {},
  };
};

const HomePage = (): JSX.Element => {
  const [margin, setMargin] = useState('0');

  const changeMobilePage = () => {
    setMargin('-100%');
  };

  return (
    <Layout>
      <ContainerChat style={{ marginLeft: margin }}>
        <ChatList changePage={changeMobilePage} />
        <Conversation />
        <Costumer />
      </ContainerChat>
    </Layout>
  );
};

export default HomePage;
