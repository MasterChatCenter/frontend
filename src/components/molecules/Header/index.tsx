import React from 'react';
import Link from 'next/link';
import { FaRocketchat } from 'react-icons/fa';
import { FaToggleOn } from 'react-icons/fa';
import { FaToggleOff } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonLink, AvatarUser } from '@/atoms';
import { logoutAction, activeUserAction } from 'root/actions';
import { MessagesService } from '../../../services/index';

import {
  HeaderContainer,
  AvatarWraper,
  AvatarCard,
  RoleCard,
  Logo,
  Menu,
  Button,
  ToogleOn,
  ToogleOff,
  Separator,
} from './styles';

type HeaderProps = {
  avatarUrl: string;
  name: string;
};

const Header = ({ avatarUrl, name }: HeaderProps): JSX.Element => {
  const dispatch = useDispatch();
  const user = useSelector((store: any) => store.user);

  const logout = () => {
    dispatch(logoutAction());
  };

  const handleToogle = (): any => {
    MessagesService.toogleUser(user.id, !user.active)
      .then(() => {
        dispatch(activeUserAction(!user.active));
      })
      .catch((err: any) => {
        alert(`Hay un error, ${err.message}`);
      });
  };

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
      <Button>
        {user.role === 'agent' &&
          (user.active ? (
            <ToogleOn onClick={handleToogle}>
              <span>
                <FaToggleOn />
              </span>
              Online
            </ToogleOn>
          ) : (
            <ToogleOff onClick={handleToogle}>
              <span>
                <FaToggleOff />
              </span>
              Offline
            </ToogleOff>
          ))}
      </Button>
      <Separator></Separator>
      <AvatarWraper>
        <AvatarCard>
          {user.name}
          <RoleCard>{user.role}</RoleCard>
        </AvatarCard>
        <AvatarUser avatarurl={avatarUrl} name={name} />
        <Menu>
          <ButtonLink handleClick={logout}>Salir</ButtonLink>
        </Menu>
      </AvatarWraper>
    </HeaderContainer>
  );
};

export default Header;
