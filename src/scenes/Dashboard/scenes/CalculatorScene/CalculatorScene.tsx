import React, { useState, useCallback } from 'react';

import { ResultState } from './components/ResultState';
import { MathOperations } from './components/MathOperations';
import { CalculatorOperations } from './components/CalculatorOperations';

export function CalculatorScene() {
  const [activeOperation, setActiveOperation] = useState('plus');
  const [activeNumber, setActiveNumber] = useState('leftNumber');

  const [calculatorResult, setCalculatorResult] = useState(0);

  const [leftNumber, setLeftNumber] = useState(0);
  const [rightNumber, setRightNumber] = useState(0);

  return (
    <>
      <ResultState result={calculatorResult} />
      <MathOperations setActiveOperation={setActiveOperation} />
      <CalculatorOperations />
    </>
  );
}
