import React from 'react';
import AvatarUser from '../../atoms/AvatarUser';

import { HeaderContainer, AvatarWraper } from './styles';

type HeaderProps = {
  avatarUrl: string;
  name: string;
};

export const Header = ({ avatarUrl, name }: HeaderProps): JSX.Element => {
  return (
    <HeaderContainer>
      <img
        src="https://res.cloudinary.com/dwapbqqbo/image/upload/v1599214196/Branding_ckbcho.svg"
        alt="Chat"
      />
      <AvatarWraper>
        <AvatarUser avatarurl={avatarUrl} name={name} />
      </AvatarWraper>
    </HeaderContainer>
  );
};
