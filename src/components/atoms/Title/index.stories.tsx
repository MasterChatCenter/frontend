import React from 'react';
import { storiesOf } from '@storybook/react';

import { Title } from './index';


storiesOf('atoms / title / Title', module)
  .add('Normal', () => (<Title title="Carlos" />));
