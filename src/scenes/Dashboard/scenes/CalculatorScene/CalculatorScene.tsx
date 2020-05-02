import React from 'react';

import { ResultState } from './components/ResultState';
import { MathOperations } from './components/MathOperations';
import { EffectsOperations } from './components/EffectsOperations';
import { CalculatorOperations } from './components/CalculatorOperations';

import { CalculatorHook } from './hooks/CalculatorHook';

export function CalculatorScene() {
  const {
    calculatorResult,
    onTypeNumber,
    onEditNumber,
    performEffect,
    onOperationUpdate,
  } = CalculatorHook();

  return (
    <>
      <ResultState result={calculatorResult} />
      <MathOperations setActiveOperation={onOperationUpdate} />
      <CalculatorOperations onTypeNumber={onTypeNumber} onEditNumber={onEditNumber} />
      <EffectsOperations performEffect={performEffect} />
    </>
  );
}
