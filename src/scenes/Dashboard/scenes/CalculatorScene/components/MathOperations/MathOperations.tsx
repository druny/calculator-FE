import React, { Dispatch } from 'react';
import {
  Add as AddIcon,
  Remove as MinusIcon,
  AcUnitSharp as AcUnitSharpIcon,
  BlurOffSharp as BlurOffSharpIcon,
  SvgIconComponent,
} from '@material-ui/icons';

import { PLUS, MINUS, MULTIPLY, DIVIDE } from '@/constants';

import { OperationButton } from '../OperationButton';

type OperationType = {
  operationName: string;
  operationLogo: SvgIconComponent;
};

type MathOperationsProps = {
  setActiveOperation: Dispatch<string>;
};

const operations: OperationType[] = [
  {
    operationName: PLUS,
    operationLogo: AddIcon,
  },
  {
    operationName: MINUS,
    operationLogo: MinusIcon,
  },
  {
    operationName: MULTIPLY,
    operationLogo: AcUnitSharpIcon,
  },
  {
    operationName: DIVIDE,
    operationLogo: BlurOffSharpIcon,
  },
];

export function MathOperations({ setActiveOperation }: MathOperationsProps) {
  return (
    <div>
      {operations.map(({ operationName, operationLogo }) => (
        <OperationButton
          key={operationName}
          operationLogo={operationLogo}
          onClick={() => setActiveOperation(operationName)}
        />
      ))}
    </div>
  );
}
