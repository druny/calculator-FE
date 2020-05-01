import React from 'react';

import MaterialTableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

type HistoryType = {
  leftNumber: string;
  operation: string;
  rightNumber: string;
  _id: string;
};

type TableBodyProps = {
  history: HistoryType[];
};

export function TableBody({ history }: TableBodyProps) {
  if (!history) return null;

  return (
    <MaterialTableBody>
      {history.map(({ leftNumber, operation, rightNumber, _id }: HistoryType) => (
        <TableRow key={_id}>
          <TableCell>{leftNumber}</TableCell>
          <TableCell>{operation}</TableCell>
          <TableCell>{rightNumber}</TableCell>
        </TableRow>
      ))}
    </MaterialTableBody>
  );
}
