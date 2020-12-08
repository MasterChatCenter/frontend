import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { FaCommentAlt, FaUserCog, FaHeadset } from 'react-icons/fa';

import { NavItem } from '@/atoms';

import { CSSNavBar, NavBarContainer } from './styles';

const Navbar: FC = () => {
  const user = useSelector((store: any) => store.user);
  const type = user ? user.role : '';
  return (
    <CSSNavBar>
      <NavBarContainer>
        {type === 'admin' ? (
          <NavItem to="/agents" icon={<FaHeadset />} label="Agents" />
        ) : null}
        {type === 'agent' ? (
          <NavItem to="/conversations" icon={<FaCommentAlt />} label="Chats" />
        ) : null}
        <NavItem to="/settings" icon={<FaUserCog />} label="Settings" />
      </NavBarContainer>
    </CSSNavBar>
  );
};

export default Navbar;
