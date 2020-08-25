import React from 'react'; 
import { storiesOf } from '@storybook/react';

import ButtonExample from '.';

storiesOf('atoms / buttons / ButtonExample', module)
  .add('Normal', () => (
    <ButtonExample>Push me!</ButtonExample>
  ));