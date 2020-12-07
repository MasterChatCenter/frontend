import styled from 'styled-components';

export const CSSUser = styled.div`
  display: flex;

  div {
    margin-left: 14px;

    p {
      line-height: 21px;
      &:first-child {
        font-weight: bold;
      }
      &:last-child {
        opacity: 0.5;
      }
    }
  }
`;

export const P = styled.p`
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const CSSLabel = styled.span`
  display: inline-flex;
  padding: 0px 12px;
  border-radius: 7px;
  background-color: ${(props) =>
    (props as any).role ? 'rgba(255, 0, 255, 0.14)' : 'rgba(0, 255, 0, 0.14)'};
  color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
  line-height: 21px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CSSTr = styled.tr`
  border-top: 1px solid rgba(0, 0, 0, 0.14);
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);

  td {
    padding: 12px 24px;
    white-space: nowrap;
  }
`;
