import React from 'react';
import { storiesOf } from '@storybook/react';

import CardShadow from '.';

storiesOf('atoms / Cards', module)
  .add('CardShadow', () => (
    <CardShadow>
      <h1>Title Here</h1>
    </CardShadow>
  ));
 