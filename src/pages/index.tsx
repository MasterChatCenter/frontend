import { GetServerSideProps } from 'next';
import React, { useState } from 'react';
import cookies from 'next-cookies';

import Layout from '@/templates/Layout';
import ChatList from '@/organisms/ChatList';

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
        <div>2</div>
        <div>3</div>
      </ContainerChat>
    </Layout>
  );
};

export default HomePage;
