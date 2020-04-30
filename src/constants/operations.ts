export type OperationsType = {
  [key: string]: string;
};

export const MINUS: string = 'minus';
export const PLUS: string = 'plus';
export const MULTIPLY: string = 'multiply';
export const DIVIDE: string = 'divide';

export const EQUAL: string = 'equal';

export const operations: OperationsType = {
  minus: '-',
  plus: '+',
  multiply: '*',
  divide: '/',
};
