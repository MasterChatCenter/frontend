import React from 'react';
import { storiesOf } from '@storybook/react';

import { Title } from './index';


storiesOf('atoms / Texts', module)
  .add('Title', () => (<Title title="Carlos" />));
