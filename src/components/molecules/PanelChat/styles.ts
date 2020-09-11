import styled from 'styled-components';

export const CSSPanelChat = styled.div`
  p {
    padding-left: 10px;
    font-weight: bold;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  border-right: 0px;
  border-left: 0px;
  border-bottom: 1px solid #4f4f4f;
  font-size: 14px;
  font-family: 'Lato', sans-serif;

  figure {
    margin-right: 10px;
  }

  button {
    border: 0px;
    background-color: white;
    outline: none;
    cursor: pointer;
  }

  button:last-child {
    position: relative;
    bottom: 1px;
  }
`;
