import React from 'react';
import { storiesOf } from '@storybook/react';

import AgentCard from './index';

storiesOf('atoms / Cards', module).add('AgentCard', () => (
  <AgentCard
    uuid="uuid"
    avatar="avatar"
    name="name"
    lastname="lastname"
    username="username"
    roleId="1"
    handleDelete={() => alert('Handle Delete')}
  />
));
