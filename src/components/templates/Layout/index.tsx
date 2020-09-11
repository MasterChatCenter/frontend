import React, { FC, ReactNode } from 'react';

import { Header } from '@/molecules/Header';
import Navbar from '@/molecules/Navbar';

import { Container } from './styles';

type props = {
  children: ReactNode;
};

const Layout: FC<props> = ({ children }): JSX.Element => (
  <Container>
    <Header
      avatarUrl="https://res.cloudinary.com/dwapbqqbo/image/upload/v1599370329/default.jpg"
      name="default"
    />
    <main>{children}</main>
    <Navbar />
  </Container>
);

export default Layout;
