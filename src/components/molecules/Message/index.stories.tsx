import React from 'react';
import { storiesOf } from '@storybook/react';
import { FaCheck } from 'react-icons/fa';

import Message from '.';

storiesOf('molecules / Messages', module)
  .add('Message', () => (
    <Message
      title="Envio éxitoso"
      message="Tu registro ha sido exitoso, hemos enviado un mensaje de confirmación de registro a tu correo electronico."
      icon={<FaCheck />}
    >
      <p>Revisa tu bandeja o correo no deseado </p>
    </Message>
  ));