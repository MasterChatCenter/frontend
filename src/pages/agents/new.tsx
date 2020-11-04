import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';
import { CSSTransition } from 'react-transition-group';
import { Layout, Agent } from '@/templates';
import { useAnimate } from 'root/hooks';
import { Grid } from 'root/styles';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = cookies(context);
  if (!user) {
    context.res.writeHead(302, { Location: '/login' }).end();
    return {
      props: {},
    };
  }

  if ((user as any).role.name === 'agent') {
    context.res.writeHead(302, { Location: '/conversations' }).end();
  }

  return {
    props: {},
  };
};

const NewAgentPage = (): JSX.Element => {
  const animate = useAnimate();
  const data = {
    image: '/default-profile.jpg',
    name: '',
    lastname: '',
    username: '',
    role_id: '2',
    password: '123456',
  };

  return (
    <Layout>
      {animate ? (
        <CSSTransition in={animate} timeout={400} classNames="my-node">
          <Grid>
            <Agent data={data} />
          </Grid>
        </CSSTransition>
      ) : null}
    </Layout>
  );
};

export default NewAgentPage;
