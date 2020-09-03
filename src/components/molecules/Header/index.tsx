import React from 'react';
import AvatarUser from '../../atoms/AvatarUser';

import { HeaderContainer, AvatarWraper } from './styles';
import logo from './Assets/Branding.svg';

interface HeaderProps {
  avatarurl: string,
  name: string
}

export const Header = ({ avatarurl, name  }: HeaderProps) => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Chat" />
      <AvatarWraper>
        <AvatarUser
          avatarurl='https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_960_720.jpg'
          name='Trinity Sullivan'
        />
      </AvatarWraper>
    </HeaderContainer>
  )
}


