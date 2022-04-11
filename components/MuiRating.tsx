import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { ChangeEvent, useState } from 'react';

export default function MuiRating() {
  const [value, setValue] = useState<number | null>(null);
  console.log(`The value you chose was ${value}`);

  const handleChange = (event: ChangeEvent, newValue: number | null) => {
    setValue(newValue);
  }

  return (
    <Stack spacing={2} marginY={4}>
      <Rating
        size='large'
        value={value}
      onChange={handleChange}
      precision={0.5}
      sx={{
        color: 'blue',
      }}
      />
    </Stack>
  );
}
