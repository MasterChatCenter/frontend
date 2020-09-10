import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    padding: 20px 0;
  }

  h3 + div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  button {
    &:first-child {
      margin-right: 10px;
    }
    width: auto;
    margin-top: 0;
  }
`;
