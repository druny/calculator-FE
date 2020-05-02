import { renderHook, cleanup, act, HookResult, WaitOptions } from '@testing-library/react-hooks';

import { MINUS, EQUAL, CLEAR } from '@/constants';

import { CalculatorHook, CalculatorHookResponseType } from './CalculatorHook';

const operationRequestsResponse = { result: 123 };

jest.mock('../services/operationsService', () => ({
  mutateNumber: jest.fn().mockImplementation(() => '123'),
  concatNumbers: jest.fn().mockImplementation(() => '123'),
  operationRequests: { minus: jest.fn().mockImplementation(() => ({ result: 123 })) },
}));

let calculatorHookResult: HookResult<CalculatorHookResponseType>;
let waitForCalculatorUpdate: (options?: WaitOptions) => Promise<void>;

describe('CalculatorHook', () => {
  beforeEach(() => {
    const { result, waitForNextUpdate } = renderHook(() => CalculatorHook());

    calculatorHookResult = result;
    waitForCalculatorUpdate = waitForNextUpdate;
  });

  afterEach(() => {
    cleanup();
  });

  describe('onOperationUpdate', () => {
    describe('Success', () => {
      it('leftNumber is 0 | activeOperation is empty | isLocked false | calculatorResult is 10', async () => {
        expect.hasAssertions();

        await act(async () => {
          calculatorHookResult.current.setCalculatorResult('10');

          await waitForCalculatorUpdate();

          calculatorHookResult.current.onOperationUpdate(MINUS);
        });

        expect(calculatorHookResult.current.activeOperation).toEqual(MINUS);
        expect(calculatorHookResult.current.calculatorResult).toEqual('10');
      });

      it('leftNumber is 10 | activeOperation is empty | isLocked false | calculatorResult is 20', async () => {
        expect.hasAssertions();

        await act(async () => {
          calculatorHookResult.current.setCalculatorResult('20');
          calculatorHookResult.current.setLeftNumber(10);

          await waitForCalculatorUpdate();

          calculatorHookResult.current.onOperationUpdate(MINUS);
        });

        expect(calculatorHookResult.current.activeOperation).toEqual(MINUS);
        expect(calculatorHookResult.current.isLocked).toBeTruthy();
        expect(calculatorHookResult.current.calculatorResult).toEqual(
          operationRequestsResponse.result
        );
        expect(calculatorHookResult.current.leftNumber).toEqual(operationRequestsResponse.result);
      });
    });
  });

  describe('resetValues', () => {
    it('Success', async () => {
      expect.hasAssertions();

      await act(async () => {
        calculatorHookResult.current.setIsLocked(true);
        calculatorHookResult.current.setLeftNumber(23);
        calculatorHookResult.current.setActiveOperation(MINUS);
        calculatorHookResult.current.setCalculatorResult('20');

        await waitForCalculatorUpdate();

        calculatorHookResult.current.resetValues();
      });

      expect(calculatorHookResult.current.leftNumber).toEqual(0);
      expect(calculatorHookResult.current.isLocked).toEqual(false);
      expect(calculatorHookResult.current.activeOperation).toEqual('');
      expect(calculatorHookResult.current.calculatorResult).toEqual('0');
    });
  });

  describe('onTypeNumber', () => {
    it('Success', async () => {
      expect.hasAssertions();

      await act(async () => {
        calculatorHookResult.current.onTypeNumber(1);
      });

      expect(calculatorHookResult.current.isLocked).toEqual(false);
      expect(calculatorHookResult.current.calculatorResult).toEqual('123');
    });
  });

  describe('performEffect', () => {
    describe(`${EQUAL}`, () => {
      it('activeOperation is empty', async () => {
        expect.hasAssertions();

        await act(async () => {
          calculatorHookResult.current.setLeftNumber('23');

          await waitForCalculatorUpdate();

          calculatorHookResult.current.performEffect(EQUAL);
        });

        expect(calculatorHookResult.current.activeOperation).toEqual('');

        expect(calculatorHookResult.current.isLocked).toBeFalsy();
        expect(calculatorHookResult.current.leftNumber).toEqual('23');
        expect(calculatorHookResult.current.calculatorResult).toEqual('0');
      });

      it(`activeOperation is ${MINUS}`, async () => {
        expect.hasAssertions();

        await act(async () => {
          calculatorHookResult.current.setLeftNumber(23);
          calculatorHookResult.current.setActiveOperation(MINUS);

          await waitForCalculatorUpdate();

          calculatorHookResult.current.performEffect(EQUAL);
        });

        expect(calculatorHookResult.current.activeOperation).toEqual('');

        expect(calculatorHookResult.current.isLocked).toBeTruthy();
        expect(calculatorHookResult.current.leftNumber).toEqual(operationRequestsResponse.result);
        expect(calculatorHookResult.current.calculatorResult).toEqual(
          operationRequestsResponse.result
        );
      });
    });

    it(`${CLEAR}`, async () => {
      expect.hasAssertions();

      await act(async () => {
        calculatorHookResult.current.setLeftNumber(23);
        calculatorHookResult.current.setActiveOperation(MINUS);

        await waitForCalculatorUpdate();

        calculatorHookResult.current.performEffect(CLEAR);
      });

      expect(calculatorHookResult.current.leftNumber).toEqual(0);
      expect(calculatorHookResult.current.isLocked).toEqual(false);
      expect(calculatorHookResult.current.activeOperation).toEqual('');
      expect(calculatorHookResult.current.calculatorResult).toEqual('0');
    });
  });
});
