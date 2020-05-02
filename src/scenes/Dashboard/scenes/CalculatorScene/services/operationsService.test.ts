import { mutateNumber, concatNumbers, changeOfSign, makeDecimal } from './operationsService';

describe('OperationsService', () => {
  describe('mutateNumber', () => {
    describe('Success', () => {
      it('Callback send regular result', () => {
        expect.hasAssertions();

        const callback = jest.fn().mockImplementation((value) => Number(value));

        const result = mutateNumber(callback)('1');

        expect(result).toEqual('1');
      });

      it('Callback send NaN', () => {
        expect.hasAssertions();

        const callback = jest.fn().mockImplementation((value) => NaN);

        const result = mutateNumber(callback)('TestString');

        expect(result).toEqual('TestString');
      });
    });
  });

  describe('concatNumbers', () => {
    describe('Success', () => {
      it('isLocked false', () => {
        expect.hasAssertions();

        const concatArguments = {
          isLocked: false,
          leftNumber: 1,
          calculatorResult: '23',
          number: 1,
        };

        const result = concatNumbers(concatArguments);

        expect(result).toEqual('231');
      });

      it('isLocked true', () => {
        expect.hasAssertions();

        const concatArguments = {
          isLocked: true,
          leftNumber: 1,
          calculatorResult: '23',
          number: 1,
        };

        const result = concatNumbers(concatArguments);

        expect(result).toEqual('1');
      });

      it('leftNumber is equal to calculatorResult and isLocked false', () => {
        expect.hasAssertions();

        const concatArguments = {
          isLocked: false,
          leftNumber: 23,
          calculatorResult: '23',
          number: 1,
        };

        const result = concatNumbers(concatArguments);

        expect(result).toEqual('1');
      });
    });
  });

  describe('changeOfSign', () => {
    describe('Success', () => {
      it('integer', () => {
        expect.hasAssertions();

        const result = changeOfSign(1);

        expect(result).toEqual(-1);
      });

      it('negative integer', () => {
        expect.hasAssertions();

        const result = changeOfSign(-1);

        expect(result).toEqual(1);
      });
    });
  });

  describe('makeDecimal', () => {
    describe('Success', () => {
      it('integer', () => {
        expect.hasAssertions();

        const result = makeDecimal(1);

        expect(result).toEqual('1.');
      });

      it('already have decimal', () => {
        expect.hasAssertions();

        const result = makeDecimal(1.1);

        expect(result).toEqual('1.1');
      });
    });
  });
});
