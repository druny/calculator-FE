import React from 'react';
import renderer from 'react-test-renderer';
import { SvgIcon } from '@material-ui/core';

import { OperationButton } from './OperationButton';

it('renders correctly when there are no items', () => {
  const tree = renderer
    .create(<OperationButton operationLogo={SvgIcon} onClick={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
