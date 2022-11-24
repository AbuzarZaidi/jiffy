import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Grid } from '@material-ui/core'
import Box from "@mui/material/Box";
import Flow from './Homepage/Flow'
import AuthenticationStyle from "../Styles/AuthenticationStyle"
import { withStyles } from "@material-ui/core/styles";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from 'react-redux';
import "../Styles/AuthenticationStyle";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import AdbIcon from "@mui/icons-material/Adb";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import {setLogout} from '../actions/checkLogin'
// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const LogoSection = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    marginRight: "145px",
      marginLeft: "160px",
      marginTop:"-7px"
  },
  [theme.breakpoints.down("xl")]: {
    marginRight: "175px",
      marginLeft: "68px",
      marginTop:"-7px"
  },

  [theme.breakpoints.down("md")]: {
   
    marginLeft: "0px",
    marginRight: "100px"
    // xs:{  marginRight: "100px",marginLeft:"0px"}
 },
}));
const HomeNav= styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
   
  },
  [theme.breakpoints.down("md")]: {
  
  },
}));
const BasicNavbar = (props) => {
  const { classes } = props;
  const { pathname }  = useLocation()
  console.log(pathname)
  const dispatch = useDispatch();
  const navigate = useNavigate();
//   const isLogin = useSelector(state => state.checkLogin.isLogin)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [anchorElNav2, setAnchorElNav2] = React.useState(null);
  const [anchorElUser2, setAnchorElUser2] = React.useState(null);
  const [open2, setOpen2] = React.useState(false);
  // const [open4, setOpen4] = React.useState(false);
  const anchorRef2 = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
const handleCloseMenu=()=>{
  setOpen(false)
  anchorRef(null)
}
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const handleToggle2 = () => {
    setOpen2((prevOpen2) => !prevOpen2);
  };

  const handleClose2 = (event) => {
    if (anchorRef2.current && anchorRef2.current.contains(event.target)) {
      return;
    }

    setOpen2(false);
  };
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const open4 = Boolean(anchorEl4);
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };
const [isActive,setIsActive]=React.useState(pathname)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
const handleLogout=()=>{
  dispatch(setLogout())
  navigate('/')
}
  return (
    <>
    <AppBar position="static" sx={{ bgcolor: "#ffffff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
                color: "#000000",
                bgcolor: "#151F4F",

              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              // sx={{backgroundColor:"#151F4F",color:"white",paddingLeft:"20%",borderRadius:"none"}}
            >
             
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              PaperProps={{
                sx: {
                  backgroundColor: "#151F4F",
                  color: "#ffffff",
                  boxShadow: "none",
                  borderRadius: "none",
                },
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                backgroundColor: "#151F4F",
                display: { xs: "block", md: "none" },
                width: "100%",
                marginTop: "12%",
              }}
            >
              <Link to="/">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "white", cursor: "pointer",fontWeight:600  }}
                >
                 Home
                </Typography>
              </Link>
              <Box
                sx={{
                  color: "white",
                  borderBottom: 1,
                  borderColor: "white",
                  width: "350px",
                  mt: 3,
                  mb: 3,
                }}
              ></Box>
              <Link to="/">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "white", cursor: "pointer",fontWeight:600 }}
                >
                  Our Services
                </Typography>
              </Link>
            
             <>
              <Link to="/">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "#b3b3b3", cursor: "pointer",fontWeight:400 }}
                >
                  Corporate Service
                </Typography>
              </Link>
              <Link to="/sendpackage">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color:"#b3b3b3", cursor: "pointer",fontWeight:400 }}
                >
                  Send/Receive Package
                </Typography>
              </Link>
              <Link to="/accompainment">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "#b3b3b3", cursor: "pointer",fontWeight:400}}
                >
                 Accompaniment
                </Typography>
              </Link>
              <Link to="/documentAttestation">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "#b3b3b3", cursor: "pointer",fontWeight:400}}
                >
                 Document Attestation
                </Typography>
              </Link>
</>
              <Box
                sx={{
                  color: "white",
                  borderBottom: 1,
                  borderColor: "white",
                  width: "350px",
                  mt: 3,
                  mb: 3,
                }}
              ></Box>
                
                <Link to="/allorders">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "white", cursor: "pointer" ,fontWeight:600 }}
                >
                 Track Order
                </Typography>
              </Link>


                <Link to="/">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "white", cursor: "pointer" ,fontWeight:600 }}
                >
                 Support
                </Typography>
              </Link>

              <Box
                sx={{
                  color: "white",
                  borderBottom: 1,
                  borderColor: "white",
                  width: "350px",
                  mt: 3,
                  mb: 3,
                }}
              ></Box>
   <><Link to="/allorders">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "white", cursor: "pointer" ,fontWeight:600 }}
                >
                Notification (12)
                </Typography>
              </Link>
              <Box
                sx={{
                  color: "white",
                  borderBottom: 1,
                  borderColor: "white",
                  width: "350px",
                  mt: 3,
                  mb: 3,
                }}
              ></Box> </>
             
             {pathname!=="/"&&   <Link to="/">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "white", cursor: "pointer" ,fontWeight:600 }}
                  onClick={handleLogout}
                >
                Logout 
                </Typography>
              </Link>}
              
              {pathname==="/"&&  <Link to="/">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "white", cursor: "pointer" ,fontWeight:600 }}
                  onClick={handleLogout}
                >
                Login
                </Typography>
              </Link>}
              <Box
                sx={{
                  color: "white",
                  borderBottom: 1,
                  borderColor: "white",
                  width: "350px",
                  mt: 3,
                  mb: 3,
                }}
              ></Box>
              {/* <MenuItem  onClick={handleCloseNavMenu} sx={{bgcolor:"#151F4F",color:"#ffffff"}}>
                  <Typography textAlign="center">Our Services</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu} sx={{bgcolor:"#151F4F",color:"#ffffff"}}>
                  <Typography textAlign="center">Support</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu} sx={{bgcolor:"#151F4F",color:"#ffffff"}}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem> */}
            </Menu>
          </Box>
          <LogoSection
            style={{
              display: "flex",
              justifyContent: "flexStart",
            
            }}
          >
            <img src="/Images/icon.png" className="logo"></img>
          </LogoSection>
<Box   sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
                ml: 2,
                height:"70px"
              },
            }}>
{pathname==="/"&&<>  <Button
              // onClick={handleCloseNavMenu}
              onClick={handleToggle}
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              sx={{
                my: "12px",
                
                display: "flex",
                
                textTransform:"none",
                marginRight:"80px",
             
              }}
            ><Typography sx={{color: "#000000",fontWeight:500, fontFamily:"Montserrat",fontSize:"13px",letterSpacing:"0.4px",marginTop:"2px"}}>Our Services</Typography> 
             <img src="/images/dropdown.svg" alt="" style={{width:"8px",height:"15px",marginLeft:"3px",margingTop:"5px"}}/>
            
             {/* <KeyboardArrowDownIcon /> */}
            
            </Button>
             <Popper
             open={open}
             anchorEl={anchorRef.current}
             role={undefined}
             placement="bottom-start"
             transition
             disablePortal
           >
             {({ TransitionProps, placement }) => (
               <Grow
                 {...TransitionProps}
                 style={{
                   transformOrigin:
                     placement === 'bottom-start' ? 'left top' : 'left bottom',
                 }}
               >
                 <Paper>
                   <ClickAwayListener onClickAway={handleClose}>
                     <MenuList
                       autoFocusItem={open}
                       id="composition-menu"
                       aria-labelledby="composition-button"
                       onKeyDown={handleListKeyDown}
                     >
                      <a href="#comps" onClick={handleCloseMenu}> <MenuItem sx={{color:"#AEB2C6",fontFamily:"Montserrat",}} >Send Package</MenuItem> </a>
                      <a href="#comps" onClick={handleCloseMenu}>  <MenuItem sx={{color:"#AEB2C6",fontFamily:"Montserrat",}} >Collect Package</MenuItem> </a>
                      <a href="#comps" onClick={handleCloseMenu}> <MenuItem sx={{color:"#AEB2C6",fontFamily:"Montserrat",}} >Document Attestation</MenuItem></a>
                      <a href="#comps" onClick={handleCloseMenu}>  <MenuItem sx={{color:"#B2B6C8",fontFamily:"Montserrat",}} >Accompaniment</MenuItem></a>
                     </MenuList>
                   </ClickAwayListener>
                 </Paper>
               </Grow>
             )}
           </Popper></>}
           {pathname==="/"&& <Button
              onClick={()=>{handleCloseNavMenu()}}
              sx={{
                my: "12px",
                color: "#000000",
                display: "block",
                // fontWeight: "small",
                textTransform:"none",
                marginRight:"180px",
                fontFamily:"Montserrat",
              }}
            >
           
           <a href="#co"><Typography sx={{ color: "#000000", fontWeight:500, fontFamily:"Montserrat",fontSize:"13px",letterSpacing:"0.4px",marginTop:"3px"}}>Support</Typography>  </a> 
              
            </Button>}
{pathname==="/"&& <Button
              onClick={()=>{handleCloseNavMenu();}}
              sx={{
                my: "10px",
                color: "#000000",
                display: "flex",
                // fontWeight: "small",
                textTransform:"none",
               
              }}
              href="/"
            >
               <PermIdentityIcon />
               <Typography sx={{ marginLeft:"17px",fontWeight:500, fontFamily:"Montserrat",fontSize:"13px",letterSpacing:"0.4px",marginTop:"2px"}}>Login</Typography>
              
            </Button>}
</Box>
        
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              
              },
              // justifyContent: "center",
              // ml: 2,
              height:"70px"
            }}
          >
           
       
       
          
            {pathname!=="/"&& <Button
               onClick={()=>{setIsActive("/");navigate('/services') ;}}
              sx={{
                // my: 1,
                // marginTop:1,
                color: "#000000",
                display: "block",
                fontWeight: "small",
                textTransform:"none",
                marginRight:"70px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                fontFamily:"Montserrat",
                fontSize:"13px"
              }}
              
            >
            Home 
            {isActive=="/"||isActive=="/services"?<hr
                            style={{
                              marginTop:"7px",
                              color: "goldenrod",
                              backgroundColor: "goldenrod",
                              height: "5px",
                              width: "30px",
                              borderRadius: "10px",
                              display:"flex",
                              justifyContent:"center"
                              }}
                              />:""}
            </Button>}
            
            {pathname!=="/"&& <><Button
              // onClick={handleToggle}
              // ref={anchorRef}
              // onClick={handleClick}
              sx={{
                my: 2,
                color: "#000000",
                display: "block",
                fontWeight: "small",
                textTransform:"none",
                marginRight:"70px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                fontSize:"13px",
                fontFamily:"Montserrat",
              }}
              id="basic-button"
              aria-controls={open4 ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open4 ? 'true' : undefined}
              onClick={handleClick4}
             
            >
              {/* <Typography sx={{color: "#000000",fontWeight:500, fontFamily:"Montserrat",fontSize:"13px",letterSpacing:"0.4px",marginTop:"2px"}}>Our Services</Typography> 
             <img src="/images/dropdown.svg" alt="" style={{width:"8px",height:"15px",marginLeft:"3px",margingTop:"5px"}}/> */}
            {/* <p style={{display:"flex"}}>Our Services <KeyboardArrowDownIcon /></p>   */}
              <Typography sx={{display:"flex",fontFamily:"Montserrat",fontSize:"13px",}}>Our Services  <img src="/images/dropdown.svg" alt="" style={{width:"8px",height:"15px",marginLeft:"3px"}}/></Typography>
             
             {(isActive=="/sendpackage"||isActive=="/collectpackage"
             ||isActive=="/documentAttestation"||isActive=="/accompainment")?
             <hr
             style={{
              color: "goldenrod",
              backgroundColor: "goldenrod",
              height: "10px",
              width: "30px",
              borderRadius: "10px",
              display:"flex",
              justifyContent:"center"
              }}
                              />:""}
            
            </Button>
          
            <Menu
        id="basic-menu"
        anchorEl={anchorEl4}
        open={open4}
        onClose={handleClose4}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{color:"#AEB2C6",fontFamily:"Montserrat",}} onClick={()=>{navigate('/sendpackage');handleCloseMenu();}}>Send Package</MenuItem>
                    <MenuItem sx={{color:"#AEB2C6",fontFamily:"Montserrat",}} onClick={()=>{navigate('/collectpackage');handleCloseMenu();}}>Collect Package</MenuItem>
                    <MenuItem sx={{color:"#AEB2C6",fontFamily:"Montserrat",}} onClick={()=>{handleCloseMenu();}}>Document Attestation</MenuItem>
                    <MenuItem sx={{color:"#B2B6C8",fontFamily:"Montserrat",}} onClick={()=>{navigate('/accompainment');handleCloseMenu();}}>Accompaniment</MenuItem>
      </Menu>
    </>         
          }
       {pathname!=="/"&& <Button
              onClick={()=>{setIsActive("/allorders");navigate('/allorders') }}
              sx={{
                // marginTop:1,
                color: "#000000",
                display: "block",
                fontWeight: "small",
                textTransform:"none",
                marginRight:"80px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                fontFamily:"Montserrat",
fontSize:"13px"
              }}
            >
              Track Order
              {isActive=="/allorders"? 
                      <hr
                          style={{
                            marginTop:"7px",
                            color: "goldenrod",
                            backgroundColor: "goldenrod",
                            height: "5px",
                            width: "30px",
                            borderRadius: "10px",
                            display:"flex",
                            justifyContent:"center"
                            }}
                              />:""}
            </Button>}
       
{/*           
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 1,
                color: "#000000",
                display: "flex",
                fontWeight: "small",
                textTransform:"none"
              }}
            >
                        
              <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, display: { xs: "none", md: "flex", lg: "flex",color:"#000000",},}}
              >
                <NotificationsNoneIcon  sx={{fontSize: "18px",}}/>  <Typography sx={{fontSize: "16px",}} >Notification</Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
               <div className='noti-des'>
                       
                       <span className='not-desc'>3 New Notification</span>
                       <div className='huge'>
                       <div className='whole'>
                       <img className='el-icon' src='./Images/ellipse.svg'/>
                       <div className='half'>
                       Courier person Hikmat Ansari
                        should arrive between <br/>12:00 PM to 1:00 PM
                        </div>
                        
                       </div>
                       <div className='order'>
                           <span>OrderID:</span>&nbsp;<b className='orderval'>4432</b><b>.</b>&nbsp;<span>1hour ago</span>&nbsp;<span>Active order</span>
                         </div>
                       </div>
                       <div className='huge'>
                       <div className='whole'>
                       <img className='el-icon' src='./Images/ellipse.svg'/>
                       <div className='half'>
                       Courier person Naseer Ahmed arrived
                       
                        </div>
                        
                       </div>
                       <div className='order'>
                           <span>OrderID:</span>&nbsp;<b className='orderval'>4432</b><b>.</b>&nbsp;<span>1hour ago</span>&nbsp;<span>Active order</span>
                         </div>
                       </div>
                       <div className='huge'>
                       <div className='whole'>
                       <img className='el-icon' src='./Images/eligrey.svg'/>
                       <div className='half'>
                       Courier person Sharad Vasu delivered the parcel
                        </div>
                        
                       </div>
                       <div className='order'>
                           <span>OrderID:</span>&nbsp;<b className='orderval'>4432</b><b>.</b>&nbsp;<span>1hour ago</span>&nbsp;<span>Active order</span>
                         </div>
                       </div>
                      
                         </div> 
            </Menu>
          </Box>
               
              
            </Button> */}
             
        {pathname!=="/"&&  <>
      <Button
        id="basic-button"
        aria-controls={open3 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open3 ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          my: 2,
          color: "#000000",
          // display: "block",
          fontWeight: "small",
          textTransform:"none",
          // marginRight:"75px",
          marginLeft:"125px",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center"
        }}
      >
        <Box sx={{display:"flex",fontFamily:"Montserrat",fontSize:"13px"}}><PermIdentityIcon/>/Logout  <KeyboardArrowDownIcon /></Box>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl3}
        open={open3}
        onClose={handleClose3}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{color:"#AEB2C6",fontFamily:"Montserrat",}} onClick={()=>{navigate("/profile")}}>Profile</MenuItem>
        <MenuItem sx={{color:"#AEB2C6",fontFamily:"Montserrat",}} onClick={()=>{navigate("/change/null")}}>Change/Reset password</MenuItem>
        <MenuItem sx={{color:"#AEB2C6",fontFamily:"Montserrat",}} onClick={()=>{navigate("/")}}>Logout</MenuItem>
      </Menu>
    </>}
       
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                // onClick={handleOpenUserMenu}
                sx={{ p: 0, display: { xs: "flex", md: "none", lg: "none" } }}
              >
                <PermIdentityIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              // open={Boolean(anchorElUser)}
              // onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, display: { xs: "flex", md: "none", lg: "none" } }}
              >
                <NotificationsNoneIcon sx={{ mr: 3 }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
               <div className='noti-des'>
                       
                       <span className='not-desc'>3 New Notification</span>
                       <div className='huge'>
                       <div className='whole'>
                       <img className='el-icon' src='./Images/ellipse.svg'/>
                       <div className='half'>
                       Courier person Hikmat Ansari
                        should arrive between <br/>12:00 PM to 1:00 PM
                        </div>
                        
                       </div>
                       <div className='order'>
                           <span>OrderID:</span>&nbsp;<b className='orderval'>4432</b><b>.</b>&nbsp;<span>1hour ago</span>&nbsp;<span>Active order</span>
                         </div>
                       </div>
                       <div className='huge'>
                       <div className='whole'>
                       <img className='el-icon' src='./Images/ellipse.svg'/>
                       <div className='half'>
                       Courier person Naseer Ahmed arrived
                       
                        </div>
                        
                       </div>
                       <div className='order'>
                           <span>OrderID:</span>&nbsp;<b className='orderval'>4432</b><b>.</b>&nbsp;<span>1hour ago</span>&nbsp;<span>Active order</span>
                         </div>
                       </div>
                       <div className='huge'>
                       <div className='whole'>
                       <img className='el-icon' src='./Images/eligrey.svg'/>
                       <div className='half'>
                       Courier person Sharad Vasu delivered the parcel
                        </div>
                        
                       </div>
                       <div className='order'>
                           <span>OrderID:</span>&nbsp;<b className='orderval'>4432</b><b>.</b>&nbsp;<span>1hour ago</span>&nbsp;<span>Active order</span>
                         </div>
                       </div>
                      
                         </div> 
            </Menu>
          </Box>
     
        </Toolbar>
      </Container>
    </AppBar>
    <div className={classes.root}>
        <div>
    <Grid container> 


    
<Grid item xs={12} md={12} lg={12} sm={12} className="location">
 <Grid container className={classes.ht}  >

   <div className={classes.location}>
     <p className='location-text'>
       <span className={classes.ht}>
         <div className='flexed'>
           <LocationOnIcon className={classes.locIcon}></LocationOnIcon> <span>United Arab Emirates</span>
         </div>

       </span>
     </p>
   </div>
 </Grid>
</Grid> </Grid>
</div>
</div>
    </>
  );
};
export default withStyles(AuthenticationStyle)(BasicNavbar);