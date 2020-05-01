import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

import { TableBody } from './components/TableBody';
import { TableHeader } from './components/TableHeader';

import { getAllHistoryAdapter } from './services/apiAdapters';

type HistoryType = {
  leftNumber: string;
  operation: string;
  rightNumber: string;
  _id: string;
};

const useStyles = makeStyles({
  table: {
    marginTop: 25,
    maxHeight: '50vh',
  },
});

const cells = ['LeftNumber', 'Operation', 'RightNumber'];

export function OperationsHistoryScene() {
  const [, setIsLoading] = useState(false);
  const [history, setHistory] = useState<HistoryType[]>([]);

  const classes = useStyles();

  useEffect(() => {
    async function getHistory() {
      setIsLoading(true);

      const historyResponse: any = await getAllHistoryAdapter();

      historyResponse.reverse();
      historyResponse.length = 10;

      setHistory(historyResponse);

      setIsLoading(false);
    }

    setInterval(() => {
      getHistory();
    }, 5000);

    getHistory();
  }, []);

  return (
    <TableContainer component={Paper} className={classes.table}>
      <LinearProgress variant="determinate" value={100} color="secondary" />
      <Table stickyHeader>
        <TableHeader cells={cells} />
        <TableBody history={history} />
      </Table>
    </TableContainer>
  );
}
