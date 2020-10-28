import styled from 'styled-components';

export const Form = styled.form`
  grid-column: 2 / 9;
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 50px;
  padding-bottom: 50px;
  padding-top: 50px;

  h2 {
    border-bottom: solid 1px gray;
    padding-bottom: 10px;
    margin-bottom: 30px;
    color: ${(props) => props.theme.text};
  }

  div {
    div {
      margin-bottom: 20px;
      max-width: 500px;
    }
  }
`;
