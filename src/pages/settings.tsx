import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';
import { CSSTransition } from 'react-transition-group';
import { useAnimate } from 'root/hooks';
import Layout from '@/templates/Layout';
import Settings from '@/organisms/Settings';

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
  const animate = useAnimate();

  return (
    <Layout>
      {animate ? (
        <CSSTransition in={animate} timeout={400} classNames="my-node">
          <Settings />
        </CSSTransition>
      ) : null}
    </Layout>
  );
};

export default SettingsPage;
