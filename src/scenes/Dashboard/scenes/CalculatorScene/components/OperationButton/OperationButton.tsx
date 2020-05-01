import React, { Dispatch } from 'react';
import { SvgIcon, Button } from '@material-ui/core';
import { SvgIconComponent } from '@material-ui/icons';

type OperationButtonPropsType = {
  onClick: Dispatch<any>;
  operationLogo: SvgIconComponent;
};

export function OperationButton({ onClick, operationLogo }: OperationButtonPropsType) {
  return (
    <Button variant="outlined" color="secondary" onClick={onClick}>
      <SvgIcon component={operationLogo} />
    </Button>
  );
}
