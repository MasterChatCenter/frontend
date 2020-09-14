import styled from 'styled-components';

export const CSSCostumer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #80cbc4;

  @media screen and (min-width: 800px) {
    grid-column: 6 / 9;
    padding: 20px;
  }
`;

export const Note = styled.div`
  border-radius: 10px;
  border: 1px solid #eeeeee;
  padding: 10px;
  background-color: #eeeeee;

  p:first-child {
    font-weight: bold;
  }
  p:last-child {
    margin-top: 10px;
  }
`;

export const Tiket = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #eeeeee;
  padding: 10px;
  background-color: #eeeeee;
`;

export const Title = styled.p`
  border-bottom: solid 1px black;
  padding-bottom: 10px;
  margin-bottom: 10px;
  opacity: 0.5;
`;

export const Container = styled.div`
  margin-bottom: 30px;
  > div {
    margin-bottom: 20px;
  }
`;
