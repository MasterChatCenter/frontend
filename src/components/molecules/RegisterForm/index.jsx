import React from 'react';

const RegisterForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Input
      typeInput="text"
      title="Correo electronico:"
      placeholder="Escribe un correo"
      />
    <Input
      typeInput="password"
      title="Contraseña:"
      placeholder="Escribe una contraseña"
    />
    <Input
      typeInput="password"
      title="Confirma ontraseña:"
      placeholder="Repite tu contraseña"
      />
    <ButtonLarge>Continuar</ButtonLarge>
  </form>
);

export default RegisterForm;
