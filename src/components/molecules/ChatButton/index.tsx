import React, { FC } from 'react';

import CardBorder from '@/atoms/CardBorder';
import AvatarUser from '@/atoms/AvatarUser';

import { CSSNickName, CSSContainer, CSStatus, CSSDivider } from './styles';

type props = {
  image: string;
  username: string;
  message: string;
  handleClick: any;
};

const ChatButton: FC<props> = ({ image, username, message, handleClick }) => (
  <CardBorder>
    <CSSContainer onClick={handleClick}>
      <CSSDivider>
        <AvatarUser avatarurl={image} name={username} />
        <div>
          <CSSNickName>{username}</CSSNickName>
          <p>{message}</p>
        </div>
      </CSSDivider>
      <CSStatus />
    </CSSContainer>
  </CardBorder>
);

export default ChatButton;
