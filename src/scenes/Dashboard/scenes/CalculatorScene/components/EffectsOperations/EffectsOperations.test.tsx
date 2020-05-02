import React from 'react';
import renderer from 'react-test-renderer';

import { EffectsOperations } from './EffectsOperations';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<EffectsOperations performEffect={jest.fn()} />).toJSON();
  expect(tree).toMatchSnapshot();
});
