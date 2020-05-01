export type OperationsType = {
  [key: string]: string;
};

export const MINUS: string = 'minus';
export const PLUS: string = 'plus';
export const MULTIPLY: string = 'multiply';
export const DIVIDE: string = 'divide';

export const DOT: string = 'dot';
export const CHANGE_OF_SIGN: string = 'changeOfSign';

export const EQUAL: string = 'equal';
export const CLEAR: string = 'clear';

export const TYPING: string = 'typing';

export const operations: OperationsType = {
  minus: '-',
  plus: '+',
  multiply: '*',
  divide: '/',
};
