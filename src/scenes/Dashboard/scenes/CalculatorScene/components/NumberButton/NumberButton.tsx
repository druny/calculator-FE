import React from 'react';
import { Button } from '@material-ui/core';

type NumberButtonPropsType = {
  number: number;
};

export function NumberButton({ number }: NumberButtonPropsType) {
  return (
    <Button variant="outlined" color="secondary">
      {number}
    </Button>
  );
}
