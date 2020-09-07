import React from 'react';
import { storiesOf } from '@storybook/react';

import Message from '.';

storiesOf('molecules / Message', module)
  .add('Sender', () => <Message type="sender" />)
  .add('Recipient', () => <Message type="recipient" />);
