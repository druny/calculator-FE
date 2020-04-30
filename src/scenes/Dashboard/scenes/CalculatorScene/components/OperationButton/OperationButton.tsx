import React from 'react';
import { SvgIcon, Button } from '@material-ui/core';
import { SvgIconComponent } from '@material-ui/icons';

type OperationButtonPropsType = {
  operationName: string;
  operationLogo: SvgIconComponent;
};

export function OperationButton({ operationName, operationLogo }: OperationButtonPropsType) {
  return (
    <Button variant="outlined" color="secondary">
      <SvgIcon component={operationLogo} />
    </Button>
  );
}
