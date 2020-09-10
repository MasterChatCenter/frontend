import React, { FC } from 'react';

import CardBorder from '@/atoms/CardBorder';
import AvatarUser from '@/atoms/AvatarUser';

import { CSSNickName, CSSContainer, CSStatus, CSSDivider } from './styles';

type props = {
  avatarUrl: string;
  name: string;
  nickName: string;
  slug: string;
  onClick: any;
};

const ChatButton: FC<props> = ({
  avatarUrl,
  name,
  nickName,
  slug,
  children,
  onClick,
}) => (
  <CardBorder>
    <CSSContainer onClick={() => onClick('-100%')}>
      <CSSDivider>
        <AvatarUser avatarurl={avatarUrl} name={name} />
        <div>
          <CSSNickName>{nickName}</CSSNickName>
          <p>{slug}</p>
        </div>
      </CSSDivider>
      <CSStatus />
      {children}
    </CSSContainer>
  </CardBorder>
);

export default ChatButton;
