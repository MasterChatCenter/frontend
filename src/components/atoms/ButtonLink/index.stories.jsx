import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonLink from '.';

storiesOf('atoms / Buttons', module)
  .add('ButtonLink', () => (
    <ButtonLink>Continuar</ButtonLink>
  ));
