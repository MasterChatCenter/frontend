import React from 'react';
import { storiesOf } from '@storybook/react';

import Conversation from '.';

storiesOf('organisms / Conversacion', module).add('List', () => (
  <Conversation customerId="1" />
));
