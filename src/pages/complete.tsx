import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = cookies(context);
  if (!user) {
    context.res.writeHead(302, { Location: '/login' }).end();
  }

  return {
    props: {},
  };
};

const CompletePage = (): JSX.Element => <h1>Completar perfil</h1>;

export default CompletePage;
