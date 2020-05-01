import React from 'react';

type ResultStateProps = {
  result: string;
};

export function ResultState({ result }: ResultStateProps) {
  return (
    <div>
      <p>{result || 'Hey?!!!'}</p>
    </div>
  );
}
