import styled from 'styled-components';

export const CSSCostumer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (min-width: 800px) {
    grid-column: 9 / 12;
    padding: 20px;
  }
`;
