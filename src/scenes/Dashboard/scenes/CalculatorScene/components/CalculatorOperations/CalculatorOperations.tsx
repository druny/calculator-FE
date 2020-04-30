import React from 'react';
import {
  SvgIconComponent,
  Exposure as ExposureIcon,
  FiberManualRecordSharp as FiberManualRecordSharpIcon,
} from '@material-ui/icons';

import { NumberButton } from '../NumberButton';
import { OperationButton } from '../OperationButton';

import './CalculatorOperations.scss';

type OperationType = {
  operationName: string;
  operationLogo: SvgIconComponent;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operations: OperationType[] = [
  {
    operationName: 'dot',
    operationLogo: FiberManualRecordSharpIcon,
  },
  {
    operationName: 'exposure',
    operationLogo: ExposureIcon,
  },
];

export function CalculatorOperations() {
  return (
    <div className="numbersContainer">
      {numbers.map((number) => (
        <NumberButton key={number} number={number} />
      ))}
      {operations.map((props) => (
        <OperationButton {...props} key={props.operationName} onClick={(res) => console.log} />
      ))}
    </div>
  );
}
