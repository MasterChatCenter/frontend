import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';
import { useState } from 'react';
import { FcCancel } from 'react-icons/fc';
import { useSelector, useDispatch } from 'react-redux';

import { Complete } from '@/organisms';
import { CompleteForm, Modal, Alert } from '@/molecules';

import { AuthService } from 'root/services';
import { updateUserAction } from 'root/actions';
import { CSSContainer } from 'root/styles';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = cookies(context);
  if (!user) {
    context.res.writeHead(302, { Location: '/login' }).end();
  } else if (
    user &&
    (user as any).role.toLowerCase() === 'admin' &&
    (user as any).company !== null
  ) {
    context.res.writeHead(302, { Location: '/agents' }).end();
  } else if (
    user &&
    (user as any).role.toLowerCase() === 'agent' &&
    (user as any).company !== null
  ) {
    context.res.writeHead(302, { Location: '/conversations' }).end();
  }
  return {
    props: {},
  };
};

const CompletePage = (): JSX.Element => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [alertError, setAlertError] = useState('');

  const onSave = (data: any) => {
    if (
      data.category === '' ||
      data.company === '' ||
      data.facebookId === '' ||
      data.name === '' ||
      data.image === '' ||
      data.lastname === '' ||
      data.tokenFacebook === ''
    ) {
      setModal(true);
      setAlertError('Completa todos los campos y conecta con facebook');
      return false;
    }

    AuthService.updateUser(data, user.id)
      .then(() => {
        dispatch(updateUserAction(user.id));
      })
      .catch(() => {
        setModal(true);
        setAlertError('Error al completar perfil');
      });
  };

  const closeModal = () => {
    setModal(false);
    setAlertError('');
  };

  return (
    <CSSContainer>
      <Complete>
        <CompleteForm onSave={onSave} />
      </Complete>
      <Modal isModalOpen={modal} closeModal={closeModal}>
        <Alert title="Error" message={alertError} icon={<FcCancel />} />
      </Modal>
    </CSSContainer>
  );
};

export default CompletePage;
