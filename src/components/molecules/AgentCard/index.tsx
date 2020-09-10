import React, { FC } from 'react';

import CardBorder from '../../atoms/CardBorder/index';
import AvatarUser from '../../atoms/AvatarUser/index';
import ButtonLarge from '../../atoms/ButtonLarge';
import ButtonLink from '../../atoms/ButtonLink';

import {
  CSSNickName,
  CSSContainer,
  CSStatus,
  CSSDivider,
  Container,
  Wrapper,
} from './styles';

type props = {
  avatarUrl: string;
  name: string;
  nickName: string;
  type: string;
};

const AgentCard: FC<props> = ({ avatarUrl, name, nickName, children }) => {
  return (
    <CardBorder>
      <CSSContainer>
        <CSSDivider>
          <AvatarUser avatarurl={avatarUrl} name={name} />
          <Wrapper>
            <CSSNickName>{nickName}</CSSNickName>
            <Container>
              <ButtonLarge type="submit">Editar</ButtonLarge>
              <ButtonLink>Eliminar</ButtonLink>
            </Container>
          </Wrapper>
        </CSSDivider>
        <CSStatus />
        {children}
      </CSSContainer>
    </CardBorder>
  );
};
export default AgentCard;
