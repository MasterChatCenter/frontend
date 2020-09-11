import { GetServerSideProps } from 'next';
import Router from 'next/router';
import cookies from 'next-cookies';
import { useState } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useSelector } from 'react-redux';

import Complete from '@/organisms/Complete';
import AvatarChange from '@/atoms/AvatarChange';
import CompleteForm from '@/molecules/CompleteForm';
import ButtonLink from '@/atoms/ButtonLink';
import config from 'root/config';
import { completeProfileService } from 'root/services';

import { CSSContainer } from 'root/styles';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = cookies(context);
  if (!user) {
    context.res.writeHead(302, { Location: '/login' }).end();
    return {
      props: {},
    };
  }
  if ((user as any).role.name !== 'admin') {
    context.res.writeHead(302, { Location: '/' }).end();
  }
  if (typeof (user as any).company_id === 'number') {
    context.res.writeHead(302, { Location: '/agents' }).end();
  }
  return {
    props: {},
  };
};

const CompletePage = (): JSX.Element => {
  const [form, setForm] = useState({} as any);
  const user = useSelector((state: any) => state.user);

  const responseFacebook = (data: any) => {
    setForm({
      ...form,
      facebookId: data.id,
      tokenFacebook: data.accessToken,
      image: data.picture.data.url,
    });
  };

  const handleAvatar = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      return true;
    }
  };

  const handleChange = (event: any) => {
    const CForm = event.currentTarget;
    const dataForm = {
      ...form,
      [CForm.company.name]: CForm.company.value,
      [CForm.name.name]: CForm.name.value,
      [CForm.lastname.name]: CForm.lastname.value,
      [CForm.category.name]: CForm.category.value,
    };
    setForm(dataForm);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (
      !form.category ||
      form.category === '' ||
      !form.company ||
      form.company === '' ||
      !form.facebookId ||
      form.facebookId === '' ||
      !form.name ||
      form.name === '' ||
      !form.image ||
      form.image === '' ||
      !form.lastname ||
      form.lastname === '' ||
      !form.tokenFacebook ||
      form.tokenFacebook === ''
    ) {
      return false;
    }

    completeProfileService(form, user.id)
      .then(() => {
        Router.push('/agents');
      })
      .catch((error: any) => {
        if (error) {
          return false;
        }
      });
  };

  return (
    <CSSContainer>
      <Complete>
        <AvatarChange url="" alt="" handleChange={handleAvatar} />
        <CompleteForm handleSubmit={handleSubmit} handleChange={handleChange}>
          <FacebookLogin
            appId={config.appId as string}
            autoLoad={false}
            fields="name,email,picture"
            scope="public_profile,pages_messaging,pages_show_list,pages_manage_metadata"
            callback={responseFacebook}
            render={(renderProps: any) => (
              <ButtonLink handleClick={renderProps.onClick}>
                Conectar con facebook
              </ButtonLink>
            )}
          />
        </CompleteForm>
      </Complete>
    </CSSContainer>
  );
};

export default CompletePage;
