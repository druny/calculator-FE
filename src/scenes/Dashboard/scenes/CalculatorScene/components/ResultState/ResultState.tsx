import React from 'react';

import { operations } from '../../../../../../constants';

type ResultStateProps = {
  leftNumber: number;
  rightNumber: number;
  result: number;
  operation: string;
};

export function ResultState({ leftNumber, operation, rightNumber, result }: ResultStateProps) {
  return (
    <div>
      <p>{`${leftNumber} ${operations[operation]} ${rightNumber} = ${result}`}</p>
    </div>
  );
}
