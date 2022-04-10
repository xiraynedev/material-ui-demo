import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function MuiTextField() {
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='Enter name' variant='outlined' />
        <TextField label='Enter name' variant='filled' />
        <TextField label='Enter name' variant='standard' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='Small label' size='small' color='secondary' />
        <TextField label='Required' size='small' color='secondary' required />
        <TextField
          label='Enter password'
          type='password'
          helperText='Save password for later use'
        />
        <TextField label='Read only field' InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='Amount'
          type='number'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />
        <TextField
          label='Weight'
          type='number'
          InputProps={{
            endAdornment: <InputAdornment position='start'>kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}
