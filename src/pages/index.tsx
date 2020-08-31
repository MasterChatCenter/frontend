import styled from 'styled-components';
import ButtonLarge from '../components/atoms/ButtonLarge';

const Container = styled.div`
text-align: center;
color: ${props => props.theme.primary}
`;


const Index = () => (
  <Container>
    <h1>Hello World</h1>
    <ButtonLarge>HOLA</ButtonLarge>
  </Container>
);

export default Index;
