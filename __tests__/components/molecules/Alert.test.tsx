import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Alert } from '../../../src/components/molecules';
import { render } from '../../utils';

describe('molecules / InputText', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Alert title="Alert" message="Alert test" icon={<FaCheck />}></Alert>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
