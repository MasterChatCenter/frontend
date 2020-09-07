import { GetServerSideProps } from 'next';
import React from 'react';
import cookies from 'next-cookies';
import { Header } from '@/molecules/Header';
import Navbar from '@/molecules/Navbar';

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
    <div>
      <Header avatarUrl="" name="" />
      <Navbar />
    </div>
  );
};

export default HomePage;
