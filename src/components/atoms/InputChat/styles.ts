import styled from 'styled-components';

export const CSSChatBar = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 0 10px;
  border: 1px solid #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;

export const CSSInput = styled.input`
  width: 100%;
  padding: 10px 0;
  border: none;
  outline: none;
  background-color: transparent;
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
  outline: none;
  svg {
    font-size: 15px;
  }
`;
