import styled, { StyledComponent } from 'styled-components';

export const CSSWrapper: StyledComponent<
  'div',
  any,
  { typeMessage: any },
  never
> = styled.div`
  display: flex;
  flex-direction: ${(props: any) =>
    props.typeMessage === 'sender' ? 'row-reverse' : 'row'};
  justify-content: space-between;
  width: 100%;

  div {
    margin-right: ${(props: any) =>
      props.typeMessage === 'sender' ? '30px' : '0px'};
    margin-left: ${(props: any) =>
      props.typeMessage === 'sender' ? '0px' : '30px'};
  }
`;

export const CSSPanel = styled.div`
  border-radius: 10px;
  background-color: #e6f9f7;

  p {
    margin: 10px;

    &:first-child {
      font-size: 10px;
      font-weight: bold;
    }

    &:last-child {
      font-size: 10px;
      text-align: right;
    }
  }
`;
