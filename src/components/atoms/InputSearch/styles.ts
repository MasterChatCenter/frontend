import styled from 'styled-components';

export const CSSChatBar = styled.div`
  border-radius: 15px;
  border: 1px solid #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

export const CSSInput = styled.input`
  width: 245px;
  height: 35px;
  border-radius: 15px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.text};
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
    color: ${(props) => props.theme.text};
  }
`;
