import React, { Dispatch } from 'react';
import { SvgIcon, Button } from '@material-ui/core';
import { SvgIconComponent } from '@material-ui/icons';

type OperationButtonPropsType = {
  onClick: Dispatch<string>;
  operationName: string;
  operationLogo: SvgIconComponent;
};

export function OperationButton({
  onClick,
  operationName,
  operationLogo,
}: OperationButtonPropsType) {
  return (
    <Button variant="outlined" color="secondary" onClick={() => onClick(operationName)}>
      <SvgIcon component={operationLogo} />
    </Button>
  );
}
