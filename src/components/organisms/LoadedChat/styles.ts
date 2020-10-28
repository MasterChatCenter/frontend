import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 4 /12;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 65px 1fr;
  height: 100%;
  overflow: hidden;
`;

export const H1 = styled.h1`
  grid-column: 1 / 9;
  grid-row: 1 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
