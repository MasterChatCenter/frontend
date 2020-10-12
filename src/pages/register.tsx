import { GetServerSideProps } from 'next';
import Router from 'next/router';
import { useState } from 'react';
import { FcCheckmark, FcCancel } from 'react-icons/fc';
import cookies from 'next-cookies';

import { Register } from '@/organisms';
import { RegisterForm, Modal, Alert } from '@/molecules';
import { ButtonLink } from '@/atoms';

import { AuthService } from 'root/services';
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

const RegisterPage = (): JSX.Element => {
  const [registered, setRegistered] = useState(false);
  const [modal, setModal] = useState(false);
  const [alertError, setAlertError] = useState('');

  const onSave = (data: any) => {
    if (
      data.password === '' ||
      data.confirmPassword === '' ||
      data.username === ''
    ) {
      setModal(true);
      setAlertError('Porfavor complete todos los campos');
      return false;
    }
    if (data.password !== data.confirmPassword) {
      setModal(true);
      setAlertError('Las contraseñas no conciden');
      return false;
    }

    AuthService.register(data)
      .then(() => {
        setModal(true);
        setRegistered(true);
      })
      .catch(() => {
        setAlertError('Nuevo error');
      });
  };

  const closeModal = () => {
    setModal(false);
    setAlertError('');
    if (registered) {
      Router.push('/login');
    }
  };

  return (
    <CSSContainer>
      <Register>
        <RegisterForm onSave={onSave} />
      </Register>
      <Modal isModalOpen={modal} closeModal={closeModal}>
        {alertError !== '' ? (
          <Alert title="Error" message={alertError} icon={<FcCancel />} />
        ) : (
          <Alert
            title="Envio éxitoso"
            message="Tu registro ha sido exitoso, hemos enviado un mensaje de confirmación de registro a tu correo electronico."
            icon={<FcCheckmark />}
          >
            <p>Revisa tu bandeja o correo no deseado</p>
            <ButtonLink>Reenvia el correo de confirmación</ButtonLink>
          </Alert>
        )}
      </Modal>
    </CSSContainer>
  );
};

export default RegisterPage;
