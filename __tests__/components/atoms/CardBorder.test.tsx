import React from 'react';
import { CardBorder } from '../../../src/components/atoms';
import { render } from '../../utils';

describe('atoms / CardBorder', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <CardBorder>CardBorder Children</CardBorder>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
