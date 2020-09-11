import React, { FC } from 'react';

import AvatarUser from '@/atoms/AvatarUser';
import { CSSPanel, CSSWrapper } from './styles';

type props = {
  type?: any;
  username: string;
  text: string;
};

const Message: FC<props> = ({ type, username, text }): JSX.Element => (
  <CSSWrapper typeMessage={type}>
    <AvatarUser
      name={username}
      avatarurl="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_960_720.jpg"
    />
    <CSSPanel>
      <p>{username}</p>
      <p>{text}</p>
      <p>06/09/2020</p>
    </CSSPanel>
  </CSSWrapper>
);

Message.defaultProps = {
  type: 'sender',
};

export default Message;
