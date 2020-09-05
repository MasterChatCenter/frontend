import React from 'react';
import { storiesOf } from '@storybook/react';

import { CardBorder } from './index';


storiesOf('atoms / Cards', module)
  .add('CardBorder', () => (<CardBorder />));
