import React from 'react';
import { storiesOf } from '@storybook/react';

import Login from './index';


storiesOf('organism / Login', module)
  .add('Normal', () => (
    <Login>Here go the form</Login>
  ));
