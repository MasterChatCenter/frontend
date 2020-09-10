import React, { FC } from 'react';

import CardBorder from '../../atoms/CardBorder/index';
import AvatarUser from '../../atoms/AvatarUser/index';
import ButtonLarge from '../../atoms/ButtonLarge';
import ButtonLink from '../../atoms/ButtonLink';

import { CSSNickName, CSSDivider, Container, Wrapper } from './styles';

type props = {
  avatarUrl: string;
  name: string;
  nickName: string;
  handleEdit: any;
  handleDelete: any;
};

const AgentCard: FC<props> = ({
  avatarUrl,
  name,
  nickName,
  handleEdit,
  handleDelete,
}) => {
  return (
    <CardBorder>
      <CSSDivider>
        <AvatarUser avatarurl={avatarUrl} name={name} />
        <Wrapper>
          <CSSNickName>{nickName}</CSSNickName>
          <Container>
            <ButtonLarge handleClick={handleEdit}>Editar</ButtonLarge>
            <ButtonLink handleClick={handleDelete}>Eliminar</ButtonLink>
          </Container>
        </Wrapper>
      </CSSDivider>
    </CardBorder>
  );
};
export default AgentCard;
