import React from 'react';
import { storiesOf } from '@storybook/react';

import { Header } from './index';


storiesOf('molecules / Header', module)
  .add('Header', () => (<Header/>));
