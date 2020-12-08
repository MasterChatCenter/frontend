import React, { FC } from 'react';
import { AvatarUser } from '@/atoms';
import { CSSPanel, CSSWrapper } from './styles';

type props = {
  username: string;
  text: string;
  isAgent: boolean;
  createdAt: Date;
};

const Message: FC<props> = ({
  username,
  text,
  isAgent,
  createdAt: date,
}): JSX.Element => (
  <CSSWrapper isAgent={isAgent}>
    <AvatarUser
      name={username}
      avatarurl="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_960_720.jpg"
    />
    <CSSPanel>
      <p>{username}</p>
      <p>{text}</p>
      <p>{`${date.getUTCDay()}/${date.getUTCMonth()}/${date.getFullYear()}`}</p>
    </CSSPanel>
  </CSSWrapper>
);

export default Message;
