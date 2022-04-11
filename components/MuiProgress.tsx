import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect, useState } from 'react';

export default function MuiProgress() {
  const [count, setCount] = useState(0);
  let intervalID: any;

  const stopCounter = () => {
    clearInterval(intervalID);
  };

  const startCounter = () => {
    intervalID = setInterval(() => {
      setCount(prev => {
        if (prev === 90) {
          stopCounter();
        }
        return prev + 10;
      });
    }, 1000);
  };

  useEffect(() => {
    startCounter();
  }, []);

  return (
    <Stack marginY={4}>
      <Stack direction='row' spacing={2}>
        <CircularProgress color='primary' />
        <CircularProgress color='secondary' />
        <CircularProgress color='inherit' />
        <CircularProgress variant='determinate' value={count} />
      </Stack>

      <Stack width='200px' marginY={4}>
        <LinearProgress color='info' />
      </Stack>
    </Stack>
  );
}
