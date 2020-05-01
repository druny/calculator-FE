import React, { useState, useCallback, Dispatch } from 'react';

import { PLUS, MINUS, MULTIPLY, DIVIDE, EQUAL, CLEAR, TYPING } from '@/constants';

import { ResultState } from './components/ResultState';
import { MathOperations } from './components/MathOperations';
import { EffectsOperations } from './components/EffectsOperations';
import { CalculatorOperations } from './components/CalculatorOperations';

import {
  plusAPIAdapter,
  minusAPIAdapter,
  divideAPIAdapter,
  multiplyAPIAdapter,
} from './services/apiAdapters';

const operationRequests = {
  [PLUS]: plusAPIAdapter,
  [MINUS]: minusAPIAdapter,
  [MULTIPLY]: multiplyAPIAdapter,
  [DIVIDE]: divideAPIAdapter,
};

export function CalculatorScene() {
  const [leftNumber, setLeftNumber] = useState(0);
  const [activeOperation, setActiveOperation] = useState('');
  const [calculatorResult, setCalculatorResult] = useState('0');

  const resetValues = () => {
    setLeftNumber(0);
    setActiveOperation('');

    setCalculatorResult('0');
  };

  const performRequest = async () => {
    const { result }: any = await operationRequests[activeOperation](
      leftNumber,
      Number(calculatorResult)
    );

    setLeftNumber(result);

    setCalculatorResult(result);
  };

  const onTypeNumber = async (number: number) => {
    let activeNumber: string = calculatorResult;

    if (leftNumber === Number(activeNumber)) {
      activeNumber = '0';
    }

    const concatNumbers = String(Number(String(activeNumber) + number));

    setCalculatorResult(concatNumbers);
  };

  const onEditNumber = (callback: Dispatch<any>) => () => {
    const result = String(callback(calculatorResult));

    if (!(Number(result) + 1)) {
      return setCalculatorResult(calculatorResult);
    }

    setCalculatorResult(result);
  };

  const onOperationUpdate = async (operation: string) => {
    let mutatedOperation = activeOperation;

    if (!leftNumber || mutatedOperation !== operation) {
      setLeftNumber(Number(calculatorResult));
      setActiveOperation(operation);
    }

    if (mutatedOperation !== operation) {
      mutatedOperation = '';
    }

    if (leftNumber && mutatedOperation) {
      await performRequest();
    }
  };

  const performEffect = async (effect: string) => {
    if (effect === EQUAL && leftNumber) {
      setActiveOperation('');

      if (!activeOperation) return;

      await performRequest();

      return;
    }

    if (effect === CLEAR) {
      return resetValues();
    }
  };

  return (
    <>
      <ResultState result={calculatorResult} />
      <MathOperations setActiveOperation={onOperationUpdate} />
      <CalculatorOperations onTypeNumber={onTypeNumber} onEditNumber={onEditNumber} />
      <EffectsOperations performEffect={performEffect} />
    </>
  );
}
