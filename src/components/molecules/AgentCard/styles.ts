import styled from 'styled-components';

export const CSSAvatar = styled.div`
  margin-right: 15px;
`;

export const CSSNickName = styled.h2`
  position: relative;
  margin-top: 0;
  margin-bottom: 10px;
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000000;

  &:before {
    content: '';
    position: absolute;
    right: 0;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.booleanGreen};
  }

  @media screen and (min-width: 800px) {
    margin-bottom: 0px;

    &:before {
      right: 50px;
    }
  }
`;

export const CSSDivider = styled.div`
  display: flex;
  img {
    margin-right: 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  button {
    width: auto;
    margin-top: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
  }
`;
