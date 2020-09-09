import styled from 'styled-components';

export const CSSChatBar = styled.div`
  width: 100%;
  border-radius: 15px;
  border: 1px solid #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CSSInput = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 15px;
  border: none;
  outline: none;
`;

export const CSSChatAction = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border: 0;
  padding: 0;
  margin: 3px;
  background-color: transparent;
  cursor: pointer;

  svg {
    font-size: 15px;
  }
`;
