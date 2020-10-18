import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;
export const CardCenter = styled.div`
  width: 100%;
  max-width: 500px;

  h2 {
    margin: 10px 0 25px 0;
    text-align: center;
  }

  p:last-child {
    text-align: center;
    margin: 20px 0 10px 0;
    color: ${(props) => props.theme.text};
    a {
      margin-left: 5px;
      text-decoration: none;
      font-weight: bold;
      color: #003d33;
    }
  }

  @media screen and (min-width: 800px) {
    grid-column: 5 / 9;
  }
`;
