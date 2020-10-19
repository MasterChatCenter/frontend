import React from 'react';
import { CardShadow } from '../../../src/components/atoms';
import { render } from '../../utils';

describe('atoms / CardShadow', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <CardShadow>CardShadow Children</CardShadow>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
