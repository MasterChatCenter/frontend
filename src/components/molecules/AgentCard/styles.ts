import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
`;

export const P = styled.p`
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
