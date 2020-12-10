import React, { FC } from 'react';
import { CardBorder, AvatarUser } from '@/atoms';
import {
  CSSNickName,
  CSSContainer,
  CSSStatusGreen,
  CSSStatusRed,
  CSSDivider,
} from './styles';

type props = {
  image: string;
  username: string;
  message: string;
  state: string | number;
  handleClick: any;
};

const ChatButton: FC<props> = ({
  image,
  username,
  message,
  state,
  handleClick,
}) => (
  <CardBorder>
    <CSSContainer onClick={handleClick}>
      <CSSDivider>
        <AvatarUser avatarurl={image} name={username} />
        <div>
          <CSSNickName>{username}</CSSNickName>
          <p>{message}</p>
        </div>
      </CSSDivider>
      {state === 'active' ? <CSSStatusGreen /> : <CSSStatusRed />}
    </CSSContainer>
  </CardBorder>
);

export default ChatButton;
