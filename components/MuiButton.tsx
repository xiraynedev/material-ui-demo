import SendIcon from '@mui/icons-material/Send';
import {IconButton} from '@mui/material/';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';

export default function MuiButton() {
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
        <Button variant='contained' color='primary'>Material UI Contained</Button>
        <Button variant='contained' color='secondary'>Material UI Contained</Button>
        <Button variant='contained' color='error'>Material UI Contained</Button>
        <Button variant='contained' color='success'>Material UI Contained</Button>
        <Button variant='contained' color='info'>Material UI Contained</Button>
        <Button variant='contained' color='warning'>Material UI Contained</Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='large'>Large</Button>
      </Stack>
      <Stack spacing={2} direction='row' alignItems='center'>
        <Button variant='contained' startIcon={<SendIcon />} onClick={() => alert('Clicked')}>Start Icon</Button>
        <Button variant='contained' endIcon={<SendIcon />} disableElevation disableRipple>End Icon</Button>
        <IconButton aria-label='send' color='success' size='small'>
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
