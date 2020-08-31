import React from 'react'
import styled from 'styled-components';

import AvatarUser from '../components/atoms/AvatarUser'
import { Title } from '../components/atoms/Title'


const IMAGEN = 'https://c.pxhere.com/images/0f/3f/4dbc54d34a6b984a6c5f283be804-1447673.jpg!d'

export const Wrapper = styled.div`
  text-align: center;
  color: ${props => props.theme.primary};
`;

const HomePage = () => {
  return (
    <Wrapper>
      <div>
        <div>Platzi and Next.js!</div>
        <AvatarUser
          avatarurl={IMAGEN}
          name='Trinity Sullivan'
        />
        <Title title="Carlos Navia" />
      </div>
    </Wrapper>
  )
}


export default HomePage