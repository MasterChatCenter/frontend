import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import cookies from 'next-cookies';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import styled from 'styled-components';

import Layout from '@/templates/Layout';
import Settings from '@/organisms/Settings';

const DIV = styled.div`
  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
  }
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = cookies(context);
  if (!user) {
    context.res.writeHead(302, { Location: '/login' }).end();
    return {
      props: {},
    };
  }

  if ((user as any).role.name !== 'admin') {
    context.res.writeHead(302, { Location: '/' }).end();
  }

  return {
    props: {},
  };
};

const SettingsPage = (): JSX.Element => {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setTimeout(() => setInProp(true), 200);
  }, []);

  return (
    <Layout>
      <TransitionGroup component={DIV}>
        <Settings inProp={inProp} />
      </TransitionGroup>
    </Layout>
  );
};

export default SettingsPage;
