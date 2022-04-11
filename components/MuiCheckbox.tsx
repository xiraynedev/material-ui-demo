import { ChangeEvent, useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function MuiCheckbox() {
  const [acceptTnC, setAcceptTnC] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };

  return (
    <Box>
      <Box>
        <FormControl>
          <FormControlLabel
            control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
            label='Accept terms and conditions'
          ></FormControlLabel>
        </FormControl>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
}
