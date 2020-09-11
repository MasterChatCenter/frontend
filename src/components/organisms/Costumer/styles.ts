import styled from 'styled-components';

export const CSSCostumer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #80cbc4;

  @media screen and (min-width: 800px) {
    grid-column: 6 / 9;
    padding: 20px;
  }
`;
