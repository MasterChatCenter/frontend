import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: ${(props) => props.theme.text};
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    border: 0;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    svg {
      font-size: 15px;
      color: ${(props) => props.theme.text};
    }
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  background-color: transparent;
  border-left: 0px;
  border-top: 0px;
  border-right: 0px;
  border-bottom: 1px solid ${(props) => props.theme.text};
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.text};

  &:disabled {
    opacity: 0.5;
  }
`;
