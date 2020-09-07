import React from 'react';
import { storiesOf } from '@storybook/react';

import Imagen from '.';
const IMAGEN =
  'https://regalosdeempresasequio.com/blog/wp-content/uploads/2017/06/branding.jpg';
storiesOf('atoms / Images', module).add('Normal', () => (
  <Imagen imageUrl={IMAGEN} imageAlt="Logo" />
));
