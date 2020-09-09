import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 20px;
  max-width: 335px;
  > div {
    margin-bottom: 20px;
  }

  > div:last-child {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0;
  }

  button {
    width: auto;
    margin-top: 10px;
    margin-left: 10px;
  }
`;
