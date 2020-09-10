import React from 'react';
import { storiesOf } from '@storybook/react';
import NewAgent from '.';

storiesOf('organisms / Forms', module).add('NewAgent', () => (
  <NewAgent
    closeModal={() => {
      alert('Clicked');
    }}
  />
));
