import React from 'react';
import {
  Add as AddIcon,
  Remove as MinusIcon,
  AcUnitSharp as AcUnitSharpIcon,
  BlurOffSharp as BlurOffSharpIcon,
  DoneSharp as DoneSharpIcon,
  SvgIconComponent,
} from '@material-ui/icons';
import { OperationButton } from '../OperationButton';

type OperationType = {
  operationName: string;
  operationLogo: SvgIconComponent;
};

const operations: OperationType[] = [
  {
    operationName: 'plus',
    operationLogo: AddIcon,
  },
  {
    operationName: 'minus',
    operationLogo: MinusIcon,
  },
  {
    operationName: 'multiply',
    operationLogo: AcUnitSharpIcon,
  },
  {
    operationName: 'divide',
    operationLogo: BlurOffSharpIcon,
  },
  {
    operationName: 'equally',
    operationLogo: DoneSharpIcon,
  },
];

export function MathOperations() {
  return (
    <div>
      {operations.map((props) => (
        <OperationButton {...props} key={props.operationName} />
      ))}
    </div>
  );
}
