import { Dispatch } from 'react';

import { DIVIDE, MINUS, MULTIPLY, PLUS } from '@/constants';

import {
  divideAPIAdapter,
  minusAPIAdapter,
  multiplyAPIAdapter,
  plusAPIAdapter,
} from './apiAdapters';

export type OperationsServiceType = {
  operationRequests: () => Dispatch<any>;
  mutateNumber: Dispatch<any>;
  concatNumbers: Dispatch<any>;
  changeOfSign: Dispatch<any>;
  makeDecimal: Dispatch<string>;
};

export type ConcatNumbersType = {
  leftNumber: number;
  calculatorResult: string;
  isLocked: boolean;
  number: number;
};

export const operationRequests = {
  [PLUS]: plusAPIAdapter,
  [MINUS]: minusAPIAdapter,
  [MULTIPLY]: multiplyAPIAdapter,
  [DIVIDE]: divideAPIAdapter,
};

export function mutateNumber(callback: Dispatch<any>) {
  return (calculatorResult: string): string => {
    const result = String(callback(calculatorResult));

    return !(Number(result) + 1) ? calculatorResult : result;
  };
}

export function concatNumbers({
  isLocked,
  leftNumber,
  calculatorResult,
  number,
}: ConcatNumbersType): string {
  let activeNumber: string = calculatorResult;

  if (leftNumber === Number(activeNumber) || isLocked) {
    activeNumber = '0';
  }

  return String(Number(String(activeNumber) + number));
}

export function changeOfSign(number: number) {
  return -number;
}

export function makeDecimal(number: number): string {
  if (parseInt(String(number)) !== parseFloat(String(number))) {
    return String(number);
  }

  return String(number + '.');
}
