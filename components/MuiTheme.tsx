import { colors, createTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffff00',
      darker: colors.orange[900],
    },
  },
});

export default function MuiTheme() {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction='row' width={400} height={400} spacing={4} marginY={4}>
        <Box
          width={400}
          height={400}
          sx={{
            backgroundColor: 'primary.main',
          }}
        ></Box>
        <Box
          width={400}
          height={400}
          sx={{
            backgroundColor: 'primary.darker',
          }}
        ></Box>
      </Stack>
    </ThemeProvider>
  );
}
