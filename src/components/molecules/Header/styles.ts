import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

export const AvatarWraper = styled.figure`
  position: relative;
  display:flex;
  cursor: pointer;

  div {
    transform: scale(0);
    transition: all 0.2s;
  }

  &:hover div {
    transform: scale(1);
  }
`;

export const AvatarCard = styled.span`
  cursor: pointer;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin:0 16px;
  display: flex;
  font-size:20px;
  color:#00695C;
`;

export const RoleCard = styled.span`
  color:grey;
`;

export const Separator = styled.span`
  height:45px;
  width:3px;
  border-radius:1px;
  background-color:#E5F0EE;
`;

export const Logo = styled.a`
height:100%;
  display: flex;
  align-items: center;
  color: #00695C;
  font-size: 38px;
  cursor: pointer;
  span{
   position:relative;
   font-size:50px;
   top:3px;
  }
  svg {
    font-size: 36px;
  }
`;

export const Button = styled.div`
  margin:16px;
  height:100%;
  cursor: pointer;
  margin-left: auto;
`;

export const ToogleOn = styled.div`
  display:flex;
  align-items:center;
  height:100%;
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
  display:flex;
  align-items:center;
  height:100%;
  color: grey;
  font-size: 18px;
  & :hover{
    color:#439889;
  }
  span{
    margin-right:8px;
  }
  svg {
    font-size: 34px;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top:55px;
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
