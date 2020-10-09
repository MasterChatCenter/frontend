import styled from 'styled-components';

export const Button = styled.a`
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
  text-decoration: none;
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

export const Container = styled.div`
  padding-top: 50px;
  grid-column: 2 / 9;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
`;
