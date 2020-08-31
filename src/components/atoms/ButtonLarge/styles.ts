import styled from 'styled-components';

export const CSSButton = styled.button`
width: 100%;
max-width: 500px;
height: 37px;
padding: 10px;
background-color: ${props => props.theme.secondary};
border: 1px solid rgba( 0, 0, 0, 0.1);
border-radius: 15px;
font-weight: 700;
cursor: pointer;
outline: none;

&:hover {
  background-color: ${props => props.theme.secondaryDark};
  color: white;
}
`;
