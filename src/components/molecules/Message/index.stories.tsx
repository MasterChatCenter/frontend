import React from 'react';
import { storiesOf } from '@storybook/react';

import Message from '.';

storiesOf('molecules / Messages', module)
  .add('Message', () => (
    <Message
      title="Envio éxitoso"
      message="Tu registro ha sido exitoso, hemos enviado un mensaje de confirmación de registro a tu correo electronico."
    >
      <p>Revisa tu bandeja o correo no deseado </p>
    </Message>
  ));
