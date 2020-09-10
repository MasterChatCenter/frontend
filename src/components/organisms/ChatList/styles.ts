import styled from 'styled-components';

export const CSSChatContainer = styled.div`
  grid-column: 1 / 2;
  padding: 20px;
  @media screen and (min-width: 800px) {
    grid-column: 1 / 4;
  }
`;

export const CSSWrapperSearch = styled.div`
  margin-bottom: 20px;
`;
