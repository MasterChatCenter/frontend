import cookies from 'next-cookies';

export const getServerSideProps = async (context: any) => {
  const { user } = cookies(context);  
  if (!user) {
    context.res.writeHead(302, { Location: '/login' }).end();
  }

  return {
    props: {},
  }
}

const CompletePage = () => (<h1>Completar perfil</h1>);

export default CompletePage