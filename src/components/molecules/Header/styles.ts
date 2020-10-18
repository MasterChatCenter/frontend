import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;
`;

export const AvatarWraper = styled.figure`
  position: relative;
  div {
    transform: scale(0);
    transition: all 0.2s;
  }

  &:hover div {
    transform: scale(1);
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  color: #fff;

  p {
    margin-left: 10px;
    font-size: 20px;
  }

  svg {
    font-size: 30px;
  }
`;

export const Menu = styled.div`
  position: absolute;
  right: 0;
  width: 100px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.background};
  overflow: hidden;

  button {
    padding: 10px;
  }
`;
