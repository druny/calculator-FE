import React from 'react';

import { CalculatorScene } from './scenes/CalculatorScene';
import { OperationsHistoryScene } from './scenes/OperationsHistoryScene';

export function Dashboard() {
  return (
    <>
      <CalculatorScene />
      <OperationsHistoryScene />
    </>
  );
}
