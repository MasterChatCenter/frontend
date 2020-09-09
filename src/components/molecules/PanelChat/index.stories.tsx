import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

import { storiesOf } from '@storybook/react';

import PanelChat from '.';

storiesOf('molecules / Header', module).add(' PanelChat', () => (
  <PanelChat label="Darlene Robertson" icon={<RiArrowDownSLine />} />
));
