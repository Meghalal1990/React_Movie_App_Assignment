import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; 


import { Link } from 'react-router-dom';
const Nav = () => {
  return (
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
     
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="lavender">
              Welcome to Bigmovies!!!
          </Typography>
          <Link to='/'><Button style={{color:'lavender'}} color="inherit">HOME </Button></Link>
          <Link to='/addmovie'><Button style={{color:'lavender'}} color="inherit">Add Movies</Button></Link>
          <Link to='/signup'><Button style={{color:'lavender'}} color="inherit">SignUp </Button></Link>
          <Link to='/login'><Button style={{color:'lavender'}} color="inherit">Login</Button></Link>






        </Toolbar>
      </AppBar>
    </Box>  )
}


export default Nav;