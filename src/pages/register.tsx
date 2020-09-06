import { GetServerSideProps } from 'next';
import Router from 'next/router';
import { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import cookies from 'next-cookies';

import Register from '@/organisms/Register';
import RegisterForm from '@/molecules/RegisterForm';
import Modal from '@/molecules/Modal';
import Alert from '@/molecules/Alert';
import ButtonLink from '@/atoms/ButtonLink';

import { singupService } from 'root/services';

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
  const [modal, setModal] = useState(false);
  const [errors, setErrors] = useState([] as string[]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.currentTarget;
    const dataForm = {
      email: form.email.value,
      password: form.password.value,
      confirmPassword: form.confirmPassword.value,
    };

    if (
      dataForm.password === '' ||
      dataForm.confirmPassword === '' ||
      dataForm.email === ''
    ) {
      setErrors(['Profavor completa todos los campos']);
      return false;
    }

    if (dataForm.password !== dataForm.confirmPassword) {
      setErrors(['Las contraseñas no conciden']);
      return false;
    }

    singupService(dataForm)
      .then(() => {
        setModal(true);
      })
      .catch((error) => {
        alert(error.message);
        setErrors(['Nuevo error']);
      });
  };

  const closeModal = () => {
    setModal(false);
    Router.push('/login');
  };

  return (
    <CSSContainer>
      <Register>
        {errors.map((err, idx) => (
          <p key={idx}>{err}</p>
        ))}
        <RegisterForm handleSubmit={handleSubmit} />
      </Register>
      <Modal isModalOpen={modal} closeModal={closeModal}>
        <Alert
          title="Envio éxitoso"
          message="Tu registro ha sido exitoso, hemos enviado un mensaje de confirmación de registro a tu correo electronico."
          icon={<FcCheckmark />}
        >
          <p>Revisa tu bandeja o correo no deseado </p>
          <ButtonLink>Reenvia el correo de confirmación </ButtonLink>
        </Alert>
      </Modal>
    </CSSContainer>
  );
};

export default RegisterPage;
