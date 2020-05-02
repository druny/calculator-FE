import { Dispatch, useState } from 'react';

import { CLEAR, EQUAL } from '@/constants';

import { concatNumbers, mutateNumber, operationRequests } from '../services/operationsService';

export type CalculatorHookResponseType = {
  isLocked: boolean;
  leftNumber: number;
  activeOperation: string;
  calculatorResult: string;
  resetValues: () => void;
  setIsLocked: Dispatch<any>;
  setLeftNumber: Dispatch<any>;
  onOperationUpdate: Dispatch<any>;
  setActiveOperation: Dispatch<any>;
  setCalculatorResult: Dispatch<any>;
  performEffect: Dispatch<any>;
  onTypeNumber: Dispatch<any>;
  onEditNumber: Dispatch<() => any>;
};

export function CalculatorHook(): CalculatorHookResponseType {
  const [isLocked, setIsLocked] = useState(false);

  const [leftNumber, setLeftNumber] = useState(0);
  const [activeOperation, setActiveOperation] = useState('');

  const [calculatorResult, setCalculatorResult] = useState('0');

  const resetValues = () => {
    setIsLocked(false);
    setLeftNumber(0);
    setActiveOperation('');
    setCalculatorResult('0');
  };

  const performRequest = async (operation = '') => {
    const { result }: any = await operationRequests[activeOperation || operation](
      leftNumber,
      Number(calculatorResult)
    );

    setLeftNumber(result);
    setIsLocked(true);

    setCalculatorResult(result);
  };

  const onTypeNumber = async (number: number) => {
    setCalculatorResult(concatNumbers({ leftNumber, calculatorResult, number, isLocked }));
    setIsLocked(false);
  };

  const onEditNumber = (callback: Dispatch<any>) => () => {
    if (isLocked) return;

    setCalculatorResult(mutateNumber(callback)(calculatorResult));
  };

  const onOperationUpdate = async (operation: string) => {
    if (!leftNumber) {
      setLeftNumber(Number(calculatorResult));
    }

    if (activeOperation !== operation) {
      setActiveOperation(operation);
    }

    if (leftNumber && calculatorResult && !isLocked) {
      await performRequest(operation);
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

  return {
    isLocked,
    leftNumber,
    activeOperation,
    calculatorResult,
    setLeftNumber,
    setIsLocked,
    setActiveOperation,
    setCalculatorResult,
    resetValues,
    onTypeNumber,
    onEditNumber,
    performEffect,
    onOperationUpdate,
  };
}
