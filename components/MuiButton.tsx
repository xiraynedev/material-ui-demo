import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';

export default function MuiButton() {
  const [formats, setFormats] = useState<string[]>([]);
  const handleFormatChange = (
    event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[],
  ) => {
    setFormats(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://mui.com'>
          Material UI Text
        </Button>
        <Button variant='contained'>Material UI Contained</Button>
        <Button variant='outlined'>Material UI Outlined</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>
          Material UI Contained
        </Button>
        <Button variant='contained' color='secondary'>
          Material UI Contained
        </Button>
        <Button variant='contained' color='error'>
          Material UI Contained
        </Button>
        <Button variant='contained' color='success'>
          Material UI Contained
        </Button>
        <Button variant='contained' color='info'>
          Material UI Contained
        </Button>
        <Button variant='contained' color='warning'>
          Material UI Contained
        </Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction='row' alignItems='center'>
        <Button
          variant='contained'
          startIcon={<SendIcon />}
          onClick={() => alert('Clicked')}
        >
          Start Icon
        </Button>
        <Button
          variant='contained'
          endIcon={<SendIcon />}
          disableElevation
          disableRipple
        >
          End Icon
        </Button>
        <IconButton aria-label='send' color='success' size='small'>
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction='row'>
        <ButtonGroup
          variant='contained'
          orientation='vertical'
          size='small'
          color='secondary'
          aria-label='button alignment group'
        >
          <Button onClick={() => alert('Left button clicked')}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction='row'>
        <ToggleButtonGroup
          aria-label='text formatting'
          value={formats}
          onChange={handleFormatChange}
          size='small'
          orientation='vertical'
          color='success'
          exclusive
        >
          <ToggleButton value='bold' aria-label='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic' aria-label='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined' aria-label='underlined'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}
