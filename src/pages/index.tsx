import styled from 'styled-components';

const Container = styled.div`
text-align: center;
color: ${props => props.theme.primary}
`;

const Index = () => (
  <Container>
    <h1>Hello World</h1>
  </Container>
);

export default Index;
