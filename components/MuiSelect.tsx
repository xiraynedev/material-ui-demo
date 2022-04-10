import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { ChangeEvent, useState } from 'react';
import { valueToPercent } from '@mui/base';

export default function MuiSelect() {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);
  const handleCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const country = event.target.value;
    setCountries(typeof country === 'string' ? country.split(',') : country);
  };

  return (
    <Box width='500px' marginY={2}>
      <TextField
        label='Select Country'
        select
        value={countries}
        onChange={handleCountryChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size='medium'
        color='secondary'
        helperText='Please select a country'
      >
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='AU'>Australia</MenuItem>
        <MenuItem value='JP'>Japan</MenuItem>
      </TextField>
    </Box>
  );
}
