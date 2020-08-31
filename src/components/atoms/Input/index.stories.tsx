import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './index';


storiesOf('atoms / input / Input', module)
  .add('Normal', () => (<Input title="Usuario:" typeInput="Text" placeholder="Escribe tu Email" />));
