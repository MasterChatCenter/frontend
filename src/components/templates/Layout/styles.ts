import styled from 'styled-components';

export const Main = styled.main`
  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr 60px;
  height: 100vh;
  background: ${(props) => props.theme.background};

  main {
    overflow: hidden;
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: 70px repeat(11, 1fr);
    grid-template-rows: 50px 1fr;
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
