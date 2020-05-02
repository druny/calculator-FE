import React from 'react';
import renderer from 'react-test-renderer';

import { MathOperations } from './MathOperations';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<MathOperations setActiveOperation={jest.fn()} />).toJSON();
  expect(tree).toMatchSnapshot();
});
