import React from 'react';
import Link from 'next/link';
import { FaRocketchat } from 'react-icons/fa';
import AvatarUser from '../../atoms/AvatarUser';

import { HeaderContainer, AvatarWraper, Logo } from './styles';

type HeaderProps = {
  avatarUrl: string;
  name: string;
};

export const Header = ({ avatarUrl, name }: HeaderProps): JSX.Element => {
  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>
          <FaRocketchat />
          <p>Chat-Center</p>
        </Logo>
      </Link>
      <AvatarWraper>
        <AvatarUser avatarurl={avatarUrl} name={name} />
      </AvatarWraper>
    </HeaderContainer>
  );
};
