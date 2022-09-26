import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from 'react-redux';
import "../../Styles/AuthenticationStyle";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import {setLogout} from '../../actions/checkLogin'
// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const LogoSection = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    marginRight: "280px",
      marginLeft: "70px",
  },
  [theme.breakpoints.down("md")]: {
   
     marginLeft: "0px",
     marginRight: "100px"
     // xs:{  marginRight: "100px",marginLeft:"0px"}
  },
}));
const BasicNavbar = () => {
  const { pathname }  = useLocation()
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(state => state.checkLogin.isLogin)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
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

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
const handleLogout=()=>{
  dispatch(setLogout())
  navigate('/')
}
  return (
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
             {isLogin &&
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
</>}
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
                {isLogin &&
                <Link to="/allorders">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "white", cursor: "pointer" ,fontWeight:600 }}
                >
                 Track Order
                </Typography>
              </Link>
}
{!isLogin &&
                <Link to="/">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "white", cursor: "pointer" ,fontWeight:600 }}
                >
                 Support
                </Typography>
              </Link>
}
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
  {isLogin && <><Link to="/allorders">
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
              ></Box> </>}
             {isLogin&&
              <Link to="/">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "white", cursor: "pointer" ,fontWeight:600 }}
                  onClick={handleLogout}
                >
                Logout 
                </Typography>
              </Link>}
              {!isLogin&&
              <Link to="/">
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
            <img src="./Images/icon.png" className="logo"></img>
          </LogoSection>

          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Typography
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
          </Typography> */}
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                // justifyContent: "center",
                ml: 2,
              },
            }}
          >
           
           {!isLogin &&<><Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 1,
                color: "#000000",
                display: "block",
                fontWeight: "small",
                textTransform:"none",
                marginRight:"75px"
              }}
            >
              Our Services
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 1,
                color: "#000000",
                display: "block",
                fontWeight: "small",
                textTransform:"none",
                marginRight:"200px"
              }}
            >
              Support
            </Button>
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
               <PermIdentityIcon />
               <Typography >Login</Typography>
              
            </Button></>}
           {isLogin&& <>
            <Button
               onClick={()=>{setIsActive("/");navigate('/services') ;}}
              sx={{
                my: 2,
                color: "#000000",
                display: "block",
                fontWeight: "small",
                textTransform:"none",
                marginRight:"80px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center"
              }}
              
            >
            Home
            {isActive=="/"?<hr
                            style={{
                              color: "goldenrod",
                              backgroundColor: "goldenrod",
                              height: "5px",
                              width: "30px",
                              borderRadius: "10px",
                              display:"flex",
                              justifyContent:"center"
                              }}
                              />:""}
            </Button>
            <Button
              onClick={()=>{setIsActive("/services");navigate('/services');}}
              sx={{
                my: 2,
                color: "#000000",
                display: "block",
                fontWeight: "small",
                textTransform:"none",
                marginRight:"85px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center"
              }}
            >
             Our Service
             {isActive=="/services"?<hr
                            style={{
                              color: "goldenrod",
                              backgroundColor: "goldenrod",
                              height: "5px",
                              width: "30px",
                              borderRadius: "10px",
                              display:"flex",
                              justifyContent:"center"
                              }}
                              />:""}
            </Button>
            <Button
              onClick={()=>{setIsActive("/allorders");navigate('/allorders') }}
              sx={{
                my: 2,
                color: "#000000",
                display: "block",
                fontWeight: "small",
                textTransform:"none",
                marginRight:"125px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center"
              }}
            >
              Track Order
              {isActive=="/allorders"? <hr
                            style={{
                              color: "goldenrod",
                              backgroundColor: "goldenrod",
                              height: "5px",
                              width: "30px",
                              borderRadius: "10px",
                              display:"flex",
                              justifyContent:"center"
                              }}
                              />:""}
            </Button>
       
          
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
                sx={{ p: 0, display: { xs: "none", md: "flex", lg: "flex",color:"#000000"} }}
              >
                <NotificationsNoneIcon  />  <Typography >Notification</Typography>
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
               
              
            </Button>
            
            <Button
              onClick={handleLogout}
              sx={{
                my: 1,
                color: "#000000",
                display: "flex",
                fontWeight: "small",
                
              }}
            >
               <PermIdentityIcon />
               <Typography >Admin/Logout</Typography>
              
            </Button>
           
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
  );
};
export default BasicNavbar;
