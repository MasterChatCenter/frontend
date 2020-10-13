import styled from 'styled-components';

export const Section = styled.div`
  margin-bottom: 40px;
  grid-column: 2 / 9;
`;

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

export const Title = styled.h2`
  border-bottom: solid 1px black;
  padding-bottom: 10px;
  margin-bottom: 30px;
  opacity: 0.5;
`;

export const ConnectFacebook = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  outline: none;
  background-color: transparent;

  p:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.booleanGreen};
    svg {
      color: #fff;
      font-size: 10px;
    }
  }
`;
