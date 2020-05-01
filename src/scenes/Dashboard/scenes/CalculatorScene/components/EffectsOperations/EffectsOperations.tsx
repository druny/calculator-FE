import React, { Dispatch } from 'react';
import {
  Delete as DeleteIcon,
  DragHandle as DragHandleIcon,
  SvgIconComponent,
} from '@material-ui/icons';

import { CLEAR, EQUAL } from '@/constants';

import { OperationButton } from '../OperationButton';

type EffectType = {
  effectName: string;
  effectLogo: SvgIconComponent;
};

type EffectsOperationsProps = {
  performEffect: Dispatch<string>;
};

const effects: EffectType[] = [
  {
    effectName: EQUAL,
    effectLogo: DragHandleIcon,
  },
  {
    effectName: CLEAR,
    effectLogo: DeleteIcon,
  },
];

export function EffectsOperations({ performEffect }: EffectsOperationsProps) {
  return (
    <div>
      {effects.map(({ effectName, effectLogo }) => (
        <OperationButton
          key={effectName}
          operationLogo={effectLogo}
          onClick={() => performEffect(effectName)}
        />
      ))}
    </div>
  );
}
