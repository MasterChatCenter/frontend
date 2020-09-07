import { GetServerSideProps } from 'next';
import { useDispatch } from 'react-redux';
import cookies from 'next-cookies';

import Login from '@/organisms/Login';
import LoginForm from '@/molecules/LoginForm';
import { loginAction } from 'root/actions';

import { CSSContainer } from 'root/styles';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = cookies(context);
  if (user) {
    context.res.writeHead(302, { Location: '/' }).end();
  }

  return {
    props: {},
  };
};

const LoginPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      username: form.email.value,
      password: form.password.value,
    };
    dispatch(loginAction(formData));
  };

  return (
    <CSSContainer>
      <Login>
        <LoginForm handleSubmit={handleSubmit} />
      </Login>
    </CSSContainer>
  );
};

export default LoginPage;
