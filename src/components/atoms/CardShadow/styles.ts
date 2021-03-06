import styled from 'styled-components';

export const CSSCard = styled.div`
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.background};
  h2 {
    color: ${(props) => props.theme.text};
  }
`;
