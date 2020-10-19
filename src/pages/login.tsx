import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { FcCancel } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import cookies from 'next-cookies';

import { Login } from '@/organisms';
import { LoginForm, Modal, Alert } from '@/molecules';
import { AuthService } from 'root/services';
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
  const [modal, setModal] = useState(false);
  const [alertError, setAlertError] = useState('');

  const onSave = (data: any) => {
    if (data.username === '' || data.password === '') {
      setModal(true);
      setAlertError('Porfavor complete todos los campos');
      return false;
    }

    AuthService.login(data)
      .then((res: any) => {
        const { token, user_id: id } = res;
        dispatch(loginAction({ token, id }));
      })
      .catch(() => {
        setModal(true);
        setAlertError('Error al iniciar sessión');
      });
  };

  const closeModal = () => {
    setModal(false);
    setAlertError('');
  };

  return (
    <CSSContainer>
      <Login>
        <LoginForm onSave={onSave} />
      </Login>
      <Modal isModalOpen={modal} closeModal={closeModal}>
        <Alert title="Error" message={alertError} icon={<FcCancel />} />
      </Modal>
    </CSSContainer>
  );
};

export default LoginPage;
