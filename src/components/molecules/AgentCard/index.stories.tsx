import React from 'react';
import { storiesOf } from '@storybook/react';

import AgentCard from './index';

const IMAGEN =
  'https://c.pxhere.com/images/0f/3f/4dbc54d34a6b984a6c5f283be804-1447673.jpg!d';

storiesOf('atoms / Cards', module).add('AgentCard', () => (
  <AgentCard
    avatarUrl={IMAGEN}
    name="Darrell Steward"
    nickName="Darrell Steward"
    type=""
  />
));
