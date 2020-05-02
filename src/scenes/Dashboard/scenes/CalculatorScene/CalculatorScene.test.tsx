import React from 'react';
import renderer from 'react-test-renderer';

import { CalculatorScene } from './CalculatorScene';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<CalculatorScene />).toJSON();
  expect(tree).toMatchSnapshot();
});
