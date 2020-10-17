import React from 'react';
import { storiesOf } from '@storybook/react';

import InputChat from '.';

storiesOf('atoms / Inputs', module).add('InputChat', () => (
  <InputChat onSend={() => alert('clcked')} />
));
