import Login from '@/organisms/Login';
import LoginForm from '@/molecules/LoginForm';

import { CSSContainer } from 'root/styles';

const LoginPage = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Enviando Info');
  };
  
  return (
    <CSSContainer>
      <Login>
        <LoginForm handleSubmit={handleSubmit} />
      </Login>
    </CSSContainer>
  );
};

export default LoginPage;