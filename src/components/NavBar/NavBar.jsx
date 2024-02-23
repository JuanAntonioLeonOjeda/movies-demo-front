import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  const options = [
    {
      path: '/home',
      name: 'Dashboard'
    },
    {
      path: '/home/movies',
      name: 'Movies'
    },
    {
      path: '/home/genres',
      name: 'Genres'
    }
  ]

  const displayOptions = () => {
    return options.map((option, index) => {
      return (
        <Button key={index} color="inherit">
          <Link to={option.path}>
            {option.name}
          </Link>
        </Button>
      )
    })
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Movies App
          </Typography>
          { displayOptions() }
        </Toolbar>
      </AppBar>
    </Box>
  );
}