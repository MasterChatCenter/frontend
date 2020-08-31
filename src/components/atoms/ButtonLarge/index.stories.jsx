import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonLarge from '.';

storiesOf('atoms / Buttons', module)
  .add('ButtonLarge', () => (
    <ButtonLarge>Continuar</ButtonLarge>
  ));
