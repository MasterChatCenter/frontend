import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './index';


storiesOf('atoms / Inputs', module)
  .add('InputText', () => (<Input title="Usuario" typeInput="Text" placeholder="Escribe tu Email" />));
