import React from 'react';
import { AvatarUserStyle } from './styles';

const AvatarUser: React.FC<{ name: string, avatarurl: string }> = ({
  name,
  avatarurl,
}) => {
  return (
    <AvatarUserStyle src={avatarurl} alt={name} />
  )
}
export default AvatarUser