import Link from 'next/link';
import React, { FC } from 'react';
import { CardBorder, AvatarUser } from '@/atoms';

import { Wrapper, P } from './styles';

type props = {
  uuid: string;
  avatar: string;
  name: string;
  lastname: string;
  username: string;
};

const AgentCard: FC<props> = ({ uuid, avatar, name, lastname, username }) => {
  return (
    <CardBorder>
      <Wrapper>
        <AvatarUser avatarurl={avatar} name={name} />
        <P>{`${name} ${lastname}`}</P>
        <P>{username}</P>
        <a>
          <Link href={`agents/edit/${uuid}`}>Editar</Link>
        </a>
      </Wrapper>
    </CardBorder>
  );
};
export default AgentCard;
