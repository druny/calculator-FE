import React, { Dispatch } from 'react';
import {
  Add as AddIcon,
  Remove as MinusIcon,
  AcUnitSharp as AcUnitSharpIcon,
  BlurOffSharp as BlurOffSharpIcon,
  DoneSharp as DoneSharpIcon,
  SvgIconComponent,
} from '@material-ui/icons';
import { OperationButton } from '../OperationButton';

import { PLUS, MINUS, MULTIPLY, DIVIDE, EQUAL } from '@/constants';

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
  {
    operationName: EQUAL,
    operationLogo: DoneSharpIcon,
  },
];

export function MathOperations({ setActiveOperation }: MathOperationsProps) {
  return (
    <div>
      {operations.map((props) => (
        <OperationButton {...props} key={props.operationName} onClick={setActiveOperation} />
      ))}
    </div>
  );
}
