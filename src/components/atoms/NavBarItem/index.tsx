import React, { FC } from 'react';
import { IconStyle } from './styles';

type props = {
  imageUrl: string,
  imageAlt: string,
};

const NavBarItem: FC<props> = ({ imageUrl, imageAlt }) => (
  <IconStyle src={imageUrl} alt={imageAlt} />
);

export default NavBarItem;