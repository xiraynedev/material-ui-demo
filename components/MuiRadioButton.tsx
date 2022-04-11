import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { ChangeEvent, useState } from 'react';

export default function MuiRadioButton() {
  const [value, setValue] = useState('');

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box marginY={2}>
      <FormControl>
        <FormLabel id='experience-group-label'>Years of experience</FormLabel>
        <RadioGroup
          name='experience-group'
          aria-labelledby='experience-group-label'
          value={value}
          onChange={handleValueChange}
          row
        >
          <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
          <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
          <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
