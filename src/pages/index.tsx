import { GetServerSideProps } from 'next';
import React from 'react';
import styled from 'styled-components';
import cookies from 'next-cookies';
import AvatarUser from '../components/atoms/AvatarUser/index';
import { Title } from '../components/atoms/Title/index';
import Message from '@/molecules/Message';

const IMAGEN =
  'https://c.pxhere.com/images/0f/3f/4dbc54d34a6b984a6c5f283be804-1447673.jpg!d';

export const Wrapper = styled.div``;

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
    <Wrapper>
      <div>
        <div>Platzi and Next.js!</div>
        <AvatarUser avatarurl={IMAGEN} name="Trinity Sullivan" />
        <Title title="Carlos Navia" />
        <Message />
      </div>
    </Wrapper>
  );
};

export default HomePage;
