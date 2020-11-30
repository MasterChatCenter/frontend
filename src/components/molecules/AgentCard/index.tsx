import Link from 'next/link';
import React, { FC } from 'react';
import { CardBorder, AvatarUser, ButtonLink } from '@/atoms';

import { Wrapper, P } from './styles';

type props = {
  uuid: string;
  avatar: string;
  name: string;
  lastname: string;
  username: string;
  handleDelete: any;
};

const AgentCard: FC<props> = ({
  uuid,
  avatar,
  name,
  lastname,
  username,
  handleDelete,
}) => {
  return (
    <CardBorder>
      <Wrapper>
        <AvatarUser avatarurl={avatar} name={name} />
        <P>{`${name} ${lastname}`}</P>
        <P>{username}</P>
        <Link href={`/agents/${encodeURIComponent(uuid)}`}>
          <a>
            <ButtonLink>Editar</ButtonLink>
          </a>
        </Link>
        <ButtonLink handleClick={handleDelete}>Eliminar</ButtonLink>
      </Wrapper>
    </CardBorder>
  );
};
export default AgentCard;
