import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { FaCommentAlt, FaUserCog, FaHeadset } from 'react-icons/fa';

import NavItem from '@/atoms/NavItem';

import { CSSNavBar, NavBarContainer } from './styles';

const Navbar: FC = () => {
  const user = useSelector((store: any) => store.user);
  if (!user) {
    return null;
  }
  const type = user.role.name;
  return (
    <CSSNavBar>
      <NavBarContainer>
        {type === 'admin' ? (
          <>
            <NavItem to="/agents" icon={<FaHeadset />} label="Agents" />
            <NavItem to="/settings" icon={<FaUserCog />} label="Settings" />
          </>
        ) : (
          <NavItem to="/" icon={<FaCommentAlt />} label="Chat" />
        )}
      </NavBarContainer>
    </CSSNavBar>
  );
};

export default Navbar;
