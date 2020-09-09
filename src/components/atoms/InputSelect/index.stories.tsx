import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

import { storiesOf } from '@storybook/react';

import InputSelect from '.';

storiesOf('atoms / Inputs', module).add('InputSelect', () => (
  <InputSelect label="Categoria" icon={<RiArrowDownSLine />} />
));
