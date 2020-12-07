import Link from 'next/link';
import React, { FC } from 'react';
import { AvatarUser, ButtonLink } from '@/atoms';

import { CSSUser, CSSLabel, P, CSSTr } from './styles';

type props = {
  uuid: string;
  avatar: string;
  name: string;
  lastname: string;
  username: string;
  roleId: string | number;
  handleDelete: any;
};

const AgentCard: FC<props> = ({
  uuid,
  avatar,
  name,
  lastname,
  username,
  roleId,
  handleDelete,
}) => {
  return (
    <CSSTr>
      <td>
        <CSSUser>
          <AvatarUser avatarurl={avatar} name={name} />
          <div>
            <P>{`${name} ${lastname}`}</P>
            <P>{username}</P>
          </div>
        </CSSUser>
      </td>
      <td>
        {roleId === 1 ? (
          <CSSLabel role>Admin</CSSLabel>
        ) : (
          <CSSLabel>Agente</CSSLabel>
        )}
      </td>
      <td>
        <Link href={`/agents/${encodeURIComponent(uuid)}`}>
          <a>
            <ButtonLink>Editar</ButtonLink>
          </a>
        </Link>
      </td>
      <td>
        <ButtonLink handleClick={handleDelete}>Eliminar</ButtonLink>
      </td>
    </CSSTr>
  );
};
export default AgentCard;

/*
<tr class="sc-iJuUWI fTbwUB">
  <td>
    <div class="sc-giIncl gHUUHu"><img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
        alt="">
      <div>
        <p>Francisco Gustavo</p>
        <p>jane.cooper@example.com</p>
      </div>
    </div>
  </td>
  <td>
    <p class="sc-ezrdKe bAYFRD">Como implementar una lista enlazada en JavaScript</p>
    <p class="sc-bYEvPH khGBIg">Optimization</p>
  </td>
  <td><span class="sc-kLgntA gQptxA">Publicado</span></td>
  <td><a href="/dashboard/edit/como-implementar-una-lista-enlazada-en-javascript">Edit</a></td>
</tr>


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
*/
