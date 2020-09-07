import React from 'react';
import { storiesOf } from '@storybook/react';

import CardBorder from '.';

storiesOf('atoms / Cards', module).add('CardBorder', () => (
  <CardBorder>
    <h1>Hello World</h1>
  </CardBorder>
));
