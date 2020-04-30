import React, { useState, useCallback, Dispatch } from 'react';

import { ResultState } from './components/ResultState';
import { MathOperations } from './components/MathOperations';
import { CalculatorOperations } from './components/CalculatorOperations';

export function CalculatorScene() {
  const [activeOperation, setActiveOperation] = useState('plus');
  const [activeNumber, setActiveNumber] = useState('leftNumber');

  const [calculatorResult, setCalculatorResult] = useState('0');

  const [leftNumber, setLeftNumber] = useState(0);
  const [rightNumber, setRightNumber] = useState(0);

  const onTypeNumber = (number: number) => {
    const concatNumbers = String(Number(calculatorResult + number));

    setCalculatorResult(concatNumbers);
  };

  const onEditNumber = (callback: Dispatch<any>) => () => {
    const result = String(callback(calculatorResult));

    if (!(Number(result) + 1)) {
      setCalculatorResult(calculatorResult);
    }

    setCalculatorResult(result);
  };

  return (
    <>
      <ResultState result={calculatorResult} />
      <MathOperations setActiveOperation={setActiveOperation} />
      <CalculatorOperations onTypeNumber={onTypeNumber} onEditNumber={onEditNumber} />
    </>
  );
}
