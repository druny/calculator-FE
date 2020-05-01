import React, { useState } from 'react';

import { ResultState } from './components/ResultState';
import { MathOperations } from './components/MathOperations';
import { EffectsOperations } from './components/EffectsOperations';
import { CalculatorOperations } from './components/CalculatorOperations';

import { calculatorHook } from './hooks/calculatorHooks';

export function CalculatorScene() {
  const [isLocked, setIsLocked] = useState(false);

  const [leftNumber, setLeftNumber] = useState(0);
  const [activeOperation, setActiveOperation] = useState('');

  const [calculatorResult, setCalculatorResult] = useState('0');

  const { onOperationUpdate, onTypeNumber, onEditNumber, performEffect } = calculatorHook({
    isLocked,
    setIsLocked,
    leftNumber,
    setLeftNumber,
    activeOperation,
    setActiveOperation,
    setCalculatorResult,
    calculatorResult,
  });

  return (
    <>
      <ResultState result={calculatorResult} />
      <MathOperations setActiveOperation={onOperationUpdate} />
      <CalculatorOperations onTypeNumber={onTypeNumber} onEditNumber={onEditNumber} />
      <EffectsOperations performEffect={performEffect} />
    </>
  );
}
