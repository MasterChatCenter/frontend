import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './index';

storiesOf('molecules / Header', module).add('Header', () => (
  <Header
    avatarUrl="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_960_720.jpg"
    name="Trinity Sullivan"
  />
));
