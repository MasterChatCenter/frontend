import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  width: 100px;
  height: 100px;
  input[type='file'] {
    display: none;
  }
`;

export const Figure = styled.figure`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 100%;
  border: 1px solid transparent;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
`;

export const Figcation = styled.figcaption`
  position: absolute;
  top: 0px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;

  svg {
    font-size: 24px;
  }
`;
