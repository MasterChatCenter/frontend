import React from 'react';
import { storiesOf } from '@storybook/react';

import Message from '.';

storiesOf('molecules / Message', module)
  .add('Sender', () => (
    <Message
      isAgent={true}
      username="USERNAE"
      text="TEXTO 1"
      createdAt={new Date()}
    />
  ))
  .add('Recipient', () => (
    <Message
      isAgent={false}
      username="USERNAE"
      text="TEXTO 1"
      createdAt={new Date()}
    />
  ));
