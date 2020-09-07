import React from 'react';
import { storiesOf } from '@storybook/react';
import { FaCommentAlt } from 'react-icons/fa';

import NavBarItem from '.';

storiesOf('atoms / Buttons', module).add('NavItem', () => (
  <NavBarItem to="/" icon={<FaCommentAlt />} label="Tickes" />
));
