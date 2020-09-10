import React from 'react';
import { storiesOf } from '@storybook/react';
import DeleteAgent from '.';

storiesOf('organisms / Forms', module).add('DeleteAgent', () => (
  <DeleteAgent
    closeModal={() => {
      alert('Clicked');
    }}
    onDelete={() => {
      alert('Clicked');
    }}
  />
));
