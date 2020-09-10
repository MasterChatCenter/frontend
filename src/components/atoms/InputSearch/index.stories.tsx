import React from 'react';
import { storiesOf } from '@storybook/react';

import InputSearch from '.';

storiesOf('atoms / Inputs', module).add('InputSearch', () => (
  <InputSearch handleChange={() => alert('Changed')} />
));
