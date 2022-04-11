import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MailIcon from '@mui/icons-material/Mail';

export default function MuiList() {
  return (
    <Box width='400px'>
      <List>
        <ListItem sx={{}}>
          <MailIcon />
        </ListItem>
        <ListItem>
          <Avatar>
            <img src="http://source.unsplash.com/random" alt="random image" />
          </Avatar>
        </ListItem>
      </List>
    </Box>
  );
}
