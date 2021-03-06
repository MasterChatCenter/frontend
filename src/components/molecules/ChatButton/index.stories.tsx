import React from 'react';
import { storiesOf } from '@storybook/react';

import ChatButton from '.';

const IMAGEN =
  'https://c.pxhere.com/images/0f/3f/4dbc54d34a6b984a6c5f283be804-1447673.jpg!d';

storiesOf('molecules / Buttons', module).add('ChatButton', () => (
  <ChatButton
    image={IMAGEN}
    username="Darrell Steward"
    message="Amet minim mollit non deserunt..."
    handleClick={() => alert('clicked')}
    state="1"
  />
));
