import React from 'react';
import renderer from 'react-test-renderer';

import { CalculatorOperations } from './CalculatorOperations';

it('renders correctly when there are no items', () => {
  const tree = renderer
    .create(<CalculatorOperations onTypeNumber={jest.fn()} onEditNumber={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
