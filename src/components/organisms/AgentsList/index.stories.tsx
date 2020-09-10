import React from 'react';
import { storiesOf } from '@storybook/react';

import ChatList from './index';

storiesOf('organisms / List', module).add('ChatList', () => (
  <ChatList
    users={[]}
    onEdit={() => alert('clicked')}
    onDelete={() => alert('clicked')}
  />
));
