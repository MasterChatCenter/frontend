import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  background-color: #fff;
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
height:100%;
  display: flex;
  align-items: center;
  color: #00695C;
  font-size: 38px;
  span{
   position:relative;
   font-size:50px;
   top:3px;
  }

  svg {
    font-size: 36px;
  }
`;

export const ToogleOn = styled.div`
  height:100%;
  display: flex;
  align-items: center;
  color: #00695C;
  font-size: 18px;
  span{
    margin-right:8px;
  }
  svg {
    font-size: 34px;
  }
`;
export const ToogleOff = styled.div`
  height:100%;
  display: flex;
  align-items: center;
  color: grey;
  font-size: 18px;
  span{
    margin-right:8px;
  }
  svg {
    font-size: 34px;
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
