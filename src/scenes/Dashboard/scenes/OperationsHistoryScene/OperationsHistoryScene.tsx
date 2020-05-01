import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { getAllHistoryAdapter } from './services/apiAdapters';

export function OperationsHistoryScene() {
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function getHistory() {
      setIsLoading(true);

      const historyResponse: any = await getAllHistoryAdapter();

      historyResponse.reverse();
      historyResponse.length = 10;

      setHistory(historyResponse);

      setIsLoading(false);
    }

    getHistory();
  }, [getAllHistoryAdapter]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>LeftNumber</TableCell>
            <TableCell>Operation</TableCell>
            <TableCell>RightNumber</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map(({ leftNumber, operation, rightNumber }) => (
            <TableRow>
              <TableCell>{leftNumber}</TableCell>
              <TableCell>{operation}</TableCell>
              <TableCell>{rightNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
