import React from 'react';
import renderer from 'react-test-renderer';

import { OperationsHistoryScene } from './OperationsHistoryScene';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<OperationsHistoryScene />).toJSON();
  expect(tree).toMatchSnapshot();
});
