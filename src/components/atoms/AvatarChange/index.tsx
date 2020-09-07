import React, { FC } from 'react';
import { FaCamera } from 'react-icons/fa';
import { Label, Figure, Figcation } from './styles';

type props = {
  url: string;
  alt: string;
  handleChange?: any;
};

const AvatarUser: FC<props> = ({ url, alt, handleChange }) => {
  return (
    <Label>
      <input type="file" onChange={handleChange} />
      <Figure>
        <img src={url} alt={alt} />
        <Figcation>
          <FaCamera />
        </Figcation>
      </Figure>
    </Label>
  );
};
export default AvatarUser;
