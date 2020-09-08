import styled from 'styled-components';

export const NotAgents = styled.div`
  margin-top: 120px;
  text-align: center;
  svg {
    margin-top: 10px;
    font-size: 50px;
  }
`;

export const Button = styled.div`
  position: absolute;
  right: 20px;
  bottom: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #80cbc4;
  cursor: pointer;

  p {
    display: none;
  }

  svg {
    font-size: 35px;
  }

  @media screen and (min-width: 800px) {
    position: relative;
    right: 0px;
    bottom: 0px;
    width: auto;
    height: auto;
    padding: 10px 20px;
    border-radius: 10px;

    p {
      display: block;
    }

    svg {
      display: none;
    }
  }
`;

export const Div = styled.div`
  padding: 20px;
  height: 100%;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 30px 50px 1fr;
    gap: 20px;
    padding: 0;

    div:first-child {
      grid-column: 2 / 8;
      grid-row: 2 / 3;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    div:last-child {
      grid-column: 2 / 8;
      grid-row: 3 / 4;
    }
  }
`;
