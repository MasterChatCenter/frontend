import React, { FC } from 'react';
import { ImagenStyle } from './styles';

type props = {
  imageUrl: string;
  imageAlt: string;
};

const Imagen: FC<props> = ({ imageUrl, imageAlt }) => (
  <ImagenStyle src={imageUrl} alt={imageAlt} />
);

export default Imagen;
