import styled from "styled-components";

import Register from '@/organisms/Register';

const CSSContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
min-height: 100vh;
padding: 20px;
background-color: ${props => props.theme.primaryDark};
`;

const RegisterPage = () => (
  <CSSContainer>
    <Register />
  </CSSContainer>
);

export default RegisterPage;
