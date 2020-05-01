import React from 'react';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

type TableHeaderProps = {
  cells: string[];
};

export function TableHeader({ cells }: TableHeaderProps) {
  return (
    <TableHead>
      <TableRow>
        {cells.map((cellName: string) => (
          <TableCell key={cellName}>{cellName}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
