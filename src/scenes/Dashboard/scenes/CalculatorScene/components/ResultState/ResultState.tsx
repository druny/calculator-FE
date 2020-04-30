import React from 'react';

type ResultStateProps = {
  result: number;
};

export function ResultState({ result }: ResultStateProps) {
  return (
    <div>
      <p>{result}</p>
    </div>
  );
}
