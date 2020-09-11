import React from 'react';
import { storiesOf } from '@storybook/react';

import Message from '.';

storiesOf('molecules / Message', module)
  .add('Sender', () => (
    <Message type="sender" username="USERNAE" text="TEXTO 1" />
  ))
  .add('Recipient', () => (
    <Message type="recipient" username="USERNAE" text="TEXTO 1" />
  ));
