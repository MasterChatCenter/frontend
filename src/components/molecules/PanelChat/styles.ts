import styled from 'styled-components';

export const CSSPanelChat = styled.div`
  p {
    font-weight: bold;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  border-right: 0px;
  border-left: 0px;
  border-bottom: 1px solid #4f4f4f;
  padding: 0 20px;
  figure {
  }

  button {
    border: 0px;
    background-color: white;
    outline: none;
    cursor: pointer;
    svg {
      font-size: 16px;
    }
  }

  button:last-child {
    margin-left: 10px;
  }
`;

export const NewNote = styled.div`
  padding-top: 20px;
  textarea {
    width: 100%;
    height: 80px;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    resize: none;
    outline: none;
    background-color: #eee;
  }
`;
