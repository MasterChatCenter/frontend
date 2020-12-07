import React from 'react';
import { storiesOf } from '@storybook/react';

import Conversation from '.';

storiesOf('organisms / Conversacion', module).add('List', () => (
  <Conversation messages={[]} senderId="123456" conversationId="2" />
));
