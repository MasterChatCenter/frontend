import React from 'react';

import { storiesOf } from '@storybook/react';

import PanelChat from '.';

storiesOf('molecules / Header', module).add(' PanelChat', () => (
  <PanelChat label="Darlene Robertson" />
));
