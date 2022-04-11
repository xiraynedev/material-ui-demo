import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function MuiCard() {
  return (
    <Box width='400px' marginY={4}>
      <Card>
        <CardMedia component='img' height='200px' image='https://source.unsplash.com/random' alt='unsplash image' />
        <CardContent>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            dolorem repellat expedita! Adipisci odio minima soluta velit dolore
            magni veritatis at alias ipsum inventore? Officia laborum dolorem
            non ratione obcaecati.
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Share</Button>
          <Button>Feedback</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
