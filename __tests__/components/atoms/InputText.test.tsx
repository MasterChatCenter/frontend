import React from 'react';
import { InputText } from '../../../src/components/atoms';
import { render } from '../../utils';

describe('atoms / InputText', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <InputText
        type="text"
        name="test"
        label="Haciendo test"
        placeholder="Este es un test"
        handleChange={() => alert('Cambio')}
        value="Test with jest"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
