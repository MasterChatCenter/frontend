import React, { FC } from 'react';
import NavBarItem from '@/atoms/NavBarItem';
import { CSSNavBar, NavBarContainer } from './styles';
import agentIcon from './Assets/agents.png';
import homeIcon from './Assets/home.png';
import settingIcon from './Assets/settings.png';
import stadisticIcon from './Assets/stadistics.png';

type props = {
  children: string,
  imageUrl: string,
  imageAlt: string
};


const NavBarAdmin: FC<props> = ({ children, imageUrl, imageAlt }) => (
  <CSSNavBar>
    <NavBarContainer>
      <NavBarItem
        imageUrl={homeIcon}
        imageAlt='Tickes'
      />

      <NavBarItem
        imageUrl={stadisticIcon}
        imageAlt='Stadistics'
      />

      <NavBarItem
        imageUrl={agentIcon}
        imageAlt='Agent'
      />

      <NavBarItem
        imageUrl={settingIcon}
        imageAlt='Setting'
      />

      {children}
    </NavBarContainer>
  </CSSNavBar>
);


export default NavBarAdmin;