import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';
import { useState } from 'react';

import Complete from '@/organisms/Complete';
import AvatarChange from '@/atoms/AvatarChange';
import CompleteForm from '@/molecules/CompleteForm';

import { CSSContainer } from 'root/styles';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = cookies(context);
  if (!user) {
    context.res.writeHead(302, { Location: '/login' }).end();
  }

  return {
    props: {},
  };
};

const CompletePage = (): JSX.Element => {
  const [form, setForm] = useState({});

  const handleAvatar = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      return true;
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const completeForm = event.currentTarget;
    setForm({
      [completeForm.company.name]: completeForm.company.value,
      [completeForm.firstName.name]: completeForm.firstName.value,
      [completeForm.lastName.name]: completeForm.lastName.value,
    });

    if (form) {
      return true;
    }
  };

  return (
    <CSSContainer>
      <Complete>
        <AvatarChange url="" alt="" handleChange={handleAvatar} />
        <CompleteForm handleSubmit={handleSubmit} />
      </Complete>
    </CSSContainer>
  );
};

export default CompletePage;
