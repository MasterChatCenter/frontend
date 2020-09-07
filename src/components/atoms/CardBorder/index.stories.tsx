import React from 'react';
import { storiesOf } from '@storybook/react';

<<<<<<< HEAD
import { CardBorder } from './index';


storiesOf('atoms / Cards', module)
  .add('CardBorder', () => (<CardBorder />));
=======
import CardBorder from '.';

storiesOf('atoms / Cards', module).add('CardBorder', () => (
  <CardBorder>
    <h1>Hello World</h1>
  </CardBorder>
));
>>>>>>> 0b2792ea52c1d4d9782896e38cdd0fc5a5c0cae3
