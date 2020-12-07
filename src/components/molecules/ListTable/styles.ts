import styled from 'styled-components';

export const CSSContainer = styled.div`
  width: 100%;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 7px;
  overflow: hidden;
`;

export const CSSTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody {
    background-color: rgb(255, 255, 255);
  }
`;

export const CSSThead = styled.thead`
  tr th {
    padding: 12px 24px;
    background-color: rgba(75, 90, 138, 0.07);
    text-align: left;
    text-transform: uppercase;
    line-height: 14px;
  }
`;
