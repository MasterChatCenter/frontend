import styled from 'styled-components';

export const CSSAvatar = styled.div`
  margin-right: 15px;
`;

export const CSSNickName = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const CSSContainer = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const CSSStatusGreen = styled.div`
  margin-top: 10px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: ${(props) => props.theme.booleanGreen};
`;

export const CSSStatusRed = styled.div`
  margin-top: 10px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: ${(props) => props.theme.booleanRed};
`;

export const CSSDivider = styled.div`
  display: flex;

  img {
    margin-right: 15px;
  }
`;
