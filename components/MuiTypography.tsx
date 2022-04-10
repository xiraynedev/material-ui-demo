import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function MuiTypography() {
  return (
    <Stack spacing={2}>
      <Typography variant='h2'>This is an h2</Typography>
      <Typography variant='h3'>This is an h3.</Typography>
      <Typography variant='h4'>This is an h4</Typography>
      <Typography variant='h5'>This is an h5</Typography>
      <Typography variant='h6'>This is an h6</Typography>
      <Typography variant='subtitle1'>This is a subtitle 1</Typography>
      <Typography variant='subtitle2'>This is a subtitle 2</Typography>
      <Typography variant='body1'>This is body 1</Typography>
      <Typography variant='body2'>This is body 2</Typography>
    </Stack>
  );
}
