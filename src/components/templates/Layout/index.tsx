import React, { FC, ReactNode } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Header, Navbar } from '@/molecules';
import { Container, Main } from './styles';

type props = {
  children: ReactNode;
};

const Layout: FC<props> = ({ children }): JSX.Element => (
  <Container>
    <Header
      avatarUrl="https://res.cloudinary.com/dwapbqqbo/image/upload/v1599370329/default.jpg"
      name="default"
    />
    <TransitionGroup component={Main}>
      <>{children}</>
    </TransitionGroup>
    <Navbar />
  </Container>
);

export default Layout;
