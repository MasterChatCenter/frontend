import React from 'react';
import { ButtonLarge } from '../../../src/components/atoms';
import { render } from '../../utils';

describe('atom / ButtonLarge', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <ButtonLarge>ButtonLarge children</ButtonLarge>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
