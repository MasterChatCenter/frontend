import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';

import Layout from '@/templates/Layout';
import Settings from '@/organisms/Settings';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = cookies(context);
  if (!user) {
    context.res.writeHead(302, { Location: '/login' }).end();
  }

  return {
    props: {},
  };
};

const SettingsPage = (): JSX.Element => {
  return (
    <Layout>
      <Settings />
    </Layout>
  );
};

export default SettingsPage;
