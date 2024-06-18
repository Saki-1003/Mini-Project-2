import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../Context/UserProvider';
import { useLocation } from 'react-router-dom';


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';


export default function ButtonAppBar() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const location = useLocation()

  const {user, handleUserLogin} = useContext(LoginContext)


  const menuItem = [
    {title: 'Home', path: '/'},
    {title: 'Find Books', path: '/books'},
    {title: 'Sell Books', path: '/sell'},
  ]

  function navigateToLoginPage() {
    if(user.email) {
      handleUserLogin({})
    } 
    navigate('/login')
  }

  function toggleDrawer() {
    setOpen(!open);
  }
  console.log(location.pathname)


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:'#ff6d00'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {menuItem.find((path)=>path.path===location.pathname)?.title}
          </Typography>
          <Button color="inherit" onClick={navigateToLoginPage}>{user.email? 'Log out': 'Login'}</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer}>
     {menuItem.map(item=><NavLink key={item.title} to={item.path} style={{padding: 30, color:'#d84315'}}>{item.title}</NavLink>)}
      </Drawer>
    </Box>


  );
}