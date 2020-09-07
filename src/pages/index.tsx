import { GetServerSideProps } from 'next';
import React from 'react';
import cookies from 'next-cookies';

import Layout from '@/templates/Layout';
import ChatList from '@/organisms/ChatList';

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
  return (
    <Layout>
      <ChatList />
    </Layout>
  );
};

export default HomePage;
