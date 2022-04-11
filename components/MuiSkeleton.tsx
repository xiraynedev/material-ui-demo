import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';

export default function MuiSkeleton() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <Stack marginY={4} width={250}>
      {
        loading ? (
          <Skeleton variant='rectangular' width={250} height={250} />
        ) : (
          <img src='https://source.unsplash.com/random/250x250' alt='random image' />
        )
      }
    </Stack>
  );
}
