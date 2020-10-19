import React from 'react';
import { ButtonLink } from '../../../src/components/atoms';
import { render } from '../../utils';

describe('atoms / ButtonLink', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <ButtonLink>ButtonLink Children</ButtonLink>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
