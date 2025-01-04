import React from 'react';
import {
  AppBar,
  Box,
  Typography,
  Button,
  Toolbar,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';
const Navbar = () => {
  //create dark colour theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#121212',
      },
    },
  });

  return (
    <Box>
      <ThemeProvider theme={darkTheme}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Button color='inherit' sx={{ paddingRight: '1rem' }}>
              <Typography sx={{ textTransform: 'capitalize' }}>
                Shuffle
              </Typography>
            </Button>
            <Button color='inherit' sx={{ paddingRight: '1rem' }}>
              <Typography sx={{ textTransform: 'capitalize' }}>
                Latest
              </Typography>
            </Button>

            <Typography sx={{ flexGrow: 1 }}>News</Typography>

            <Button color='inherit' LinkComponent={Link} to='/register'>
              Sign Up
            </Button>
            <Button color='inherit' LinkComponent={Link} to='/login'>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
};

export default Navbar;
