import Register from '@/organisms/Register';
import RegisterForm from '@/molecules/RegisterForm';

import { CSSContainer } from './styles';

const RegisterPage = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('REGISTRANDO');
  };

  return (
    <CSSContainer>
      <Register>
        <RegisterForm handleSubmit={handleSubmit}/>
      </Register>
    </CSSContainer>
  );
};


export default RegisterPage;
