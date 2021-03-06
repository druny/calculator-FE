import React, { Dispatch } from 'react';
import {
  SvgIconComponent,
  Exposure as ExposureIcon,
  FiberManualRecordSharp as FiberManualRecordSharpIcon,
} from '@material-ui/icons';

import { DOT, CHANGE_OF_SIGN } from '@/constants';

import { NumberButton } from '../NumberButton';
import { OperationButton } from '../OperationButton';

import { changeOfSign, makeDecimal } from '../../services/operationsService';

import './CalculatorOperations.scss';

type OperationType = {
  operationName: string;
  operationLogo: SvgIconComponent;
  onClick?: Dispatch<number>;
};

type CalculatorOperationsProps = {
  onTypeNumber: Dispatch<number>;
  onEditNumber: any;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operations: OperationType[] = [
  {
    operationName: DOT,
    operationLogo: FiberManualRecordSharpIcon,
    onClick: makeDecimal,
  },
  {
    operationName: CHANGE_OF_SIGN,
    operationLogo: ExposureIcon,
    onClick: changeOfSign,
  },
];

export function CalculatorOperations({ onTypeNumber, onEditNumber }: CalculatorOperationsProps) {
  return (
    <div className="numbersContainer">
      {numbers.map((number) => (
        <NumberButton key={number} number={number} onClick={onTypeNumber} />
      ))}
      {operations.map((props) => (
        <OperationButton
          {...props}
          key={props.operationName}
          onClick={onEditNumber(props.onClick)}
        />
      ))}
    </div>
  );
}
