import React from 'react';
import renderer from 'react-test-renderer';

import { NumberButton } from './NumberButton';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<NumberButton number={1} onClick={jest.fn()} />).toJSON();
  expect(tree).toMatchSnapshot();
});
