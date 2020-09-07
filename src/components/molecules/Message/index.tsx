import React, { FC } from 'react';

import AvatarUser from '@/atoms/AvatarUser';
import { CSSPanel, CSSWrapper } from './styles';

type props = {
  type?: any;
};

const Message: FC<props> = ({ type }): JSX.Element => (
  <CSSWrapper typeMessage={type}>
    <AvatarUser
      name="Gustavo"
      avatarurl="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_960_720.jpg"
    />
    <CSSPanel>
      <p>Theresa Webb</p>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <p>06/09/2020</p>
    </CSSPanel>
  </CSSWrapper>
);

Message.defaultProps = {
  type: 'sender',
};

export default Message;
