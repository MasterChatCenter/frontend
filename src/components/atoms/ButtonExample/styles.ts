import styled from 'styled-components';

export const CSSButton = styled.button`
border: 0;
border-radius: 10px;
padding: 10px 20px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
outline: none;
cursor: pointer;
text-transform: uppercase;
background-color: orange;
transition: transform 0.2s;

&:active {
  transform: scale(1.1);
}
`;