import React from 'react';
import renderer from 'react-test-renderer';

import { ResultState } from './ResultState';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<ResultState result="1" />).toJSON();
  expect(tree).toMatchSnapshot();
});
