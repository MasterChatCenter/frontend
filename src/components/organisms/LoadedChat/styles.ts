import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 4 /12;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 65px 1fr;
  height: 100%;
  overflow: hidden;
`;
