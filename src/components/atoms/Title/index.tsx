import React from 'react';
import styled from 'styled-components';

export const TitleStyle = styled.h1`
  font-size: 12px;
  font-weight: bold;
  color: black;
`;

export const Title: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <TitleStyle>
      <h1>{title}</h1>
      {children}
    </TitleStyle>
  );
};
