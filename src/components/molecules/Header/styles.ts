import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  background-color: #00695c;
  cursor: pointer;
`;

export const AvatarWraper = styled.figure`
  position: relative;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  color: #fff;

  p {
    margin-left: 10px;
    font-size: 28px;
  }

  svg {
    font-size: 34px;
  }
`;
