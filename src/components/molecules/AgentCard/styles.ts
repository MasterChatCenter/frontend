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

export const CSStatus = styled.div`
  margin-top: 10px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: #42b72a;
`;

export const CSSDivider = styled.div`
  display: flex;

  img {
    margin-right: 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  height: 20px;
  width: 100%;

  button {
    margin-top: 0;
    margin-right: 110px;
  }
`;

export const Wrapper = styled.div`
  height: 70px;
  width: 220px;
`;
