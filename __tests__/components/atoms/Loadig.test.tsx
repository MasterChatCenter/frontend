import React from 'react';
import { Loading } from '../../../src/components/atoms';
import { render } from '../../utils';

describe('atoms / Loading', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Loading />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
