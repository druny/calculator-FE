import React, { Dispatch } from 'react';
import { Button } from '@material-ui/core';

type NumberButtonPropsType = {
  number: number;
  onClick: Dispatch<number>;
};

export function NumberButton({ number, onClick }: NumberButtonPropsType) {
  return (
    <Button variant="outlined" color="secondary" onClick={() => onClick(number)}>
      {number}
    </Button>
  );
}
