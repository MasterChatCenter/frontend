import styled from 'styled-components';

export const CSSRegister = styled.div`
width: 100%;
max-width: 500px;

> div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  h2 {
    margin: 10px 0 25px 0;
  }

  > p {
    margin: 0px 0 10px 0;
    text-align: center;
  }
}

@media screen and (min-width: 800px) {
  grid-column: 5 / 9;
}
`;