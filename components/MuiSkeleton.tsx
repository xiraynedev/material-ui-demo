import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function MuiSkeleton() {
  
  const [loading, setLoading] = useState(true);

  return (
    <Stack marginY={4} width={250}>
      {
          <h1>{loading ? <Skeleton /> : 'Ready to go!' }</h1>
      }      
    </Stack>
  );
}
