import styled from 'styled-components';

export const CSSContainer = styled.div`
  max-width: 335px;
  text-align: center;

  h2,
  svg,
  p {
    margin-bottom: 20px;
    color: ${(props) => props.theme.text};
  }

  svg {
    font-size: 71px;
  }
`;
