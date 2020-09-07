import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr 60px;
  height: 100vh;

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 70px 1fr;
    gap: 0 20px;

    header {
      grid-column: 1 / 13;
      grid-row: 1 / 3;
    }

    main {
      grid-column: 2 / 13;
      grid-row: 2 / 3;
    }

    nav {
      width: 100%;
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }
`;
