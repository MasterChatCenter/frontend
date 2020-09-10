import styled from 'styled-components';

export const CardCenter = styled.div`
  width: 100%;
  max-width: 500px;

  h2 {
    margin: 10px 0 25px 0;
    text-align: center;
  }

  div > label {
    margin: auto;
    margin-bottom: 25px;
  }

  @media screen and (min-width: 800px) {
    grid-column: 5 / 9;
  }
`;
