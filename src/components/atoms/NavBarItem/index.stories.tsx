import React from 'react';
import { storiesOf } from '@storybook/react';
import homeIcon from './Assets/home.png';

import NavBarItem from '.';

//const IMAGEN = './Assets/home.png'

storiesOf('atoms / NavBarItem', module)
  .add('Images', () => (
    <NavBarItem
      imageUrl={homeIcon}
      imageAlt='Logo'
    />
  ));