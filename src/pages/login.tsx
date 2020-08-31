import styled from "styled-components";

import Login from '@/organisms/Login';

const CSSContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
min-height: 100vh;
padding: 20px;
background-color: ${props => props.theme.primaryDark};

@media screen and (min-width: 800px) {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}
`;

const LoginPage = () => (
  <CSSContainer>
    <Login />
  </CSSContainer>
);

export default LoginPage;