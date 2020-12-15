import React, { FC, useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { useSelector, useDispatch } from 'react-redux';
import { AgentForm, CompanyForm, Alert, Modal } from '@/molecules';
import { AgentsService, CompaniesService } from 'root/services';
import { updateAgentAdminAction, updateCompanyAction } from 'root/actions';
import { Container } from './styles';

const Settings: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const [modal, setModal] = useState(false);
  const [messageAlert, setMessageAlert] = useState({
    title: '',
    message: '',
    icon: <FcCheckmark />,
  });

  const data = {
    image: user.image,
    name: user.name,
    last_name: user.last_name,
    username: user.username,
    role: user.role,
  };

  const company = {
    logo: user.company.logo,
    name: user.company.name,
  };

  const handleSaveCompany = (form: any) => {
    CompaniesService.save(form, user.company.id)
      .then(() => {
        dispatch(updateCompanyAction(form));
        setMessageAlert({
          title: 'Empresa guardada',
          message: 'Los datos de la empresa se guardaron con éxito',
          icon: <FcCheckmark />,
        });
        setModal(true);
      })
      .catch();
  };

  const handleSaveAgent = (form: any) => {
    AgentsService.save(form, user.id)
      .then(() => {
        dispatch(updateAgentAdminAction(form));
        setMessageAlert({
          title: 'Perfil guardado',
          message: 'Los datos de perfil se guardaron con éxito',
          icon: <FcCheckmark />,
        });
        setModal(true);
      })
      .catch();
  };

  return (
    <Container>
      <AgentForm onSave={handleSaveAgent} data={data} />
      {user.role === 'admin' ? (
        <CompanyForm onSave={handleSaveCompany} data={company} />
      ) : null}
      <Modal isModalOpen={modal} closeModal={() => setModal(false)}>
        <Alert
          title={messageAlert.title}
          message={messageAlert.message}
          icon={messageAlert.icon}
        />
      </Modal>
    </Container>
  );
};

export default Settings;
