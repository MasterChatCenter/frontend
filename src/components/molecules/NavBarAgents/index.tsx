import React, { FC } from 'react';
import NavBarItem from '@/atoms/NavBarItem';
import { CSSNavBar, NavBarContainer } from './styles';

import homeIcon from './Assets/chats.png';
import settingIcon from './Assets/settings.png';


type props = {
  children: string,
  imageUrl: string,
  imageAlt: string
};


const NavBarAgents: FC<props> = ({ children, imageUrl, imageAlt }) => (
  <CSSNavBar>
    <NavBarContainer>
      <NavBarItem
        imageUrl={homeIcon}
        imageAlt='Tickes'
      />

      <NavBarItem
        imageUrl={settingIcon}
        imageAlt='Setting'
      />

      {children}
    </NavBarContainer>
  </CSSNavBar>
);


export default NavBarAgents;