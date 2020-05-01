import { Dispatch } from 'react';

import { CLEAR, EQUAL } from '@/constants';

import { concatNumbers, mutateNumber, operationRequests } from '../services/operationsService';

type CalculatorHookType = {
  isLocked: boolean;
  setIsLocked: Dispatch<any>;
  leftNumber: number;
  setLeftNumber: Dispatch<any>;
  activeOperation: string;
  setActiveOperation: Dispatch<any>;
  setCalculatorResult: Dispatch<any>;
  calculatorResult: string;
};

type CalculatorHookResponseType = {
  onOperationUpdate: Dispatch<any>;
  performEffect: Dispatch<any>;
  onTypeNumber: Dispatch<any>;
  onEditNumber: Dispatch<any>;
};

export function calculatorHook({
  isLocked,
  setIsLocked,
  leftNumber,
  setLeftNumber,
  activeOperation,
  setActiveOperation,
  setCalculatorResult,
  calculatorResult,
}: CalculatorHookType): CalculatorHookResponseType {
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

  return { onOperationUpdate, performEffect, onTypeNumber, onEditNumber };
}
