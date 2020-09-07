import React, { FC } from 'react';
import { FaCommentAlt, FaUserCog } from 'react-icons/fa';

import NavItem from '@/atoms/NavItem';

import { CSSNavBar, NavBarContainer } from './styles';

const Navbar: FC = () => (
  <CSSNavBar>
    <NavBarContainer>
      <NavItem to="/chat" icon={<FaCommentAlt />} label="Chat" />
      <NavItem to="/settings" icon={<FaUserCog />} label="Settings" />
    </NavBarContainer>
  </CSSNavBar>
);

export default Navbar;
