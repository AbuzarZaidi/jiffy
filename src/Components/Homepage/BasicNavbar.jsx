import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const BasicNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{bgcolor:"#ffffff"}}> 
      <Container maxWidth="xl">
        <Toolbar disableGutters>
      
         

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',color:"#000000" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                width:"100%",
                bgcolor:"#151F4F"
              }}
            >
              <Typography textAlign="center">Our Services</Typography>
                <MenuItem  onClick={handleCloseNavMenu} sx={{bgcolor:"#151F4F",color:"#ffffff"}}>
                  <Typography textAlign="center">Our Services</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu} sx={{bgcolor:"#151F4F",color:"#ffffff"}}>
                  <Typography textAlign="center">Support</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu} sx={{bgcolor:"#151F4F",color:"#ffffff"}}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
            
            </Menu>
          </Box>
          <img src='./Images/icon.png' className='logo' style={{marginLeft:"60px"}}></img>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:"space-around",ml:3 } }}>
            
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#000000', display: 'block' ,fontWeight: 'bold' }}
              >
                Our Services
              </Button>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#000000', display: 'block' ,fontWeight: 'bold' }}
              >
                Support
              </Button>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#000000', display: 'block',fontWeight: 'bold' }}
              >
                Login
              </Button>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
           
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,display: { xs: 'flex', md: 'none',lg:'none' }, }}>
                
                <NotificationsNoneIcon  sx={{mr:3}}/>   
                <PermIdentityIcon/>
              </IconButton>
                        
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default BasicNavbar;