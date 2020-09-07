import React, { FC, ReactChild } from 'react';
import Link from 'next/link';
import { CSSNavItem } from './styles';

type props = {
  to: string;
  label: string;
  icon: ReactChild;
};

const NavItem: FC<props> = ({ to, label, icon }) => (
  <Link href={to}>
    <CSSNavItem>
      <div>
        {icon}
        <p>{label}</p>
      </div>
    </CSSNavItem>
  </Link>
);

export default NavItem;
