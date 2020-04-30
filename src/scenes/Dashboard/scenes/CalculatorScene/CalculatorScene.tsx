import React, { useState } from 'react';

import { ResultState } from './components/ResultState';
import { MathOperations } from './components/MathOperations';
import { CalculatorOperations } from './components/CalculatorOperations';

export function CalculatorScene() {
  const [activeOperation, setActiveOperation] = useState('plus');
  const [calculatorResult, setCalculatorResult] = useState(0);

  const [leftNumber, setLeftNumber] = useState(0);
  const [rightNumber, setRightNumber] = useState(0);

  return (
    <>
      <MathOperations />
      <CalculatorOperations />
      <ResultState
        leftNumber={leftNumber}
        rightNumber={rightNumber}
        result={calculatorResult}
        operation={activeOperation}
      />
    </>
  );
}
