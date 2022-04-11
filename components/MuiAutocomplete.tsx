import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useState } from 'react';

export default function MuiAutocomplete() {
  const skills = ['react', 'typescript', 'next.js'];
  const [value, setValue] = useState<string | null>('react');

  const handleChange = (event: ChangeEvent<{}>, newValue: string | null) => {
    setValue(newValue);
  };

  return (
    <Stack width='250px' marginY={4}>
      <Autocomplete
        options={skills}
        renderInput={params => <TextField {...params} label='Skills' />}
        value={value}
        onChange={handleChange}
      />
    </Stack>
  );
}
