import React, { FC } from 'react';

import CardBorder from '../../atoms/CardBorder';
import AvatarUser from '../../atoms/AvatarUser';

import { CSSAvatar, CSSNickName, CSSContainer, CSStatus, AvatarUserStyle, CSSDivider } from './styles';

type props = {
  avatarUrl: string,
  name: string,
  nickName: string,
  slug: string
};


const ChatButton: FC<props> = ({ avatarUrl, name, nickName, slug, children }) => (
    <CardBorder>
      <CSSContainer>
          <CSSAvatar>
            <AvatarUserStyle src={avatarUrl} alt={name} />
          </CSSAvatar>
          <CSSDivider>
            <CSSNickName>
              {nickName}
            </CSSNickName>
            <p>{slug}</p>
          </CSSDivider>
          <CSStatus />
          {children}
        </CSSContainer>
    </CardBorder>
);

export default ChatButton;
