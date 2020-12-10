import React, { useState } from 'react';
import Link from 'next/link';
import { FaRocketchat } from 'react-icons/fa';
import { FaToggleOn } from 'react-icons/fa';
import { FaToggleOff } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { ButtonLink, AvatarUser } from '@/atoms';
import { logoutAction } from 'root/actions';

import {
  HeaderContainer,
  AvatarWraper,
  Logo,
  Menu,
  ToogleOn,
  ToogleOff,
} from './styles';

type HeaderProps = {
  avatarUrl: string;
  name: string;
};



const Header = ({ avatarUrl, name }: HeaderProps): JSX.Element => {
  const dispatch = useDispatch();
  // let [toogle, setToogle] = useState(true);

  const logout = () => {
    dispatch(logoutAction());
  };

  // const handleToogle =async (value) => {
  //   setToogle(!value);
  //   await fetch(`${config.localApi}/users/${id}`, {"active": true});
  // };

  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>
          schm
          <span>
            <FaRocketchat />
          </span>
          ze
        </Logo>
      </Link>
      {/* {toogle ? (
        <ToogleOn onClick={handleToogle(false)}>
          <span>
            <FaToggleOn />
          </span>
          Online
        </ToogleOn>
      ) : (
        <ToogleOff onClick={handleToogle(true)}>
          <span>
            <FaToggleOff />
          </span>
          Offline
        </ToogleOff>
      )} */}

      <AvatarWraper>
        <AvatarUser avatarurl={avatarUrl} name={name} />
        <Menu>
          <ButtonLink handleClick={logout}>Salir</ButtonLink>
        </Menu>
      </AvatarWraper>
    </HeaderContainer>
  );
};

export default Header;
