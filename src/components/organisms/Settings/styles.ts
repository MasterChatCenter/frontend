import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 2 / 9;
  height: 100%;
  overflow-y: auto;
  padding: 20px;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    gap: 20px;
    padding: 0;
    padding-top: 50px;
  }
`;
