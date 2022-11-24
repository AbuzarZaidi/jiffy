import React, { useRef , useState} from 'react'
import { Navbar, Container, Offcanvas, Nav, Dropdown, NavDropdown } from "react-bootstrap";
import AuthenticationStyle from "../../Styles/AuthenticationStyle";
import { withStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ServiceOptions from './ServiceOptions';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Allservices = (props) => {
  const { classes } = props;
  const user = localStorage.getItem("name")
  const navigate = useNavigate();
  const { pathname }  = useLocation()
  console.log("🚀 ~ file: Allservices.jsx ~ line 21 ~ Allservices ~ pathname", pathname)
  const [open, setOpen] = React.useState(false);
  const [currentView, setCurrentView] = useState("home")
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  function logout() {
    localStorage.removeItem('userId');
    navigate('/')
  }
  function gotrack() {
    setCurrentView("trackOrder")
    navigate('/allorders')
  }
  function goHome() {
    setCurrentView("home")
    navigate('/services')
  }
  function goService() {
    setCurrentView("services");
   
    
  }
  function gotoSend(){
    navigate('/sendpackage')
  }
  function gotoCollect()
{
  navigate('/collectpackage')
}

  function gotoDoc(){
    //navigate('/documentAttestation')
  }
  function gotoAcc(){
    navigate('/accompainment')
  }
  const listElement = useRef(null);
  const navElement = useRef(null);
const changePass = () => {
  navigate('/change/' + localStorage.getItem('userId'))
}
const profile = () => {
  navigate('/profile')
}

  const onKeyUp = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    setTimeout(function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      listElement.current.classList.toggle("active")
      navElement.current.classList.toggle("active")
      console.log(listElement)

    }, 500)

  }
  const HomeNav= styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("xl")]: {
     display:"none"
    },
    [theme.breakpoints.down("md")]: {
    display:"flex"
    },
  }));
  React.useEffect(() => {
      if(pathname === "/allorders"){
        setCurrentView("trackOrder")
      } 
  },[pathname]);


    React.useEffect(() => {
      window.onscroll = () => {
        if(window.pageYOffset === 0 && pathname !== "/allorders"){
          setCurrentView("services")
        }
      }

      return () => (window.onscroll = null);
    });
    const handleLogout=()=>{
      // dispatch(setLogout())
      navigate('/')
    }
  return (
    <>
      <div className={classes.root}>
        <div>
          {/*<Navbar className={classes.navbar}>
            <Grid container spacing={3}>
              <Grid item xs={3} md={3} className='logo-grid'>
                <img src='../Images/icon.png' className='logo'></img>
              </Grid>
              <Grid item xs={6} md={6}>
                <Grid container spacing={3}>
                  <Grid item xs={3} md={3}>
             
                    <PopupState variant="popover" popupId="demo-popup-menu">
                      {(popupState) => (
                    <React.Fragment>
                      <Button  className={classes.newbtn} {...bindTrigger(popupState)}>
                        Our Services
                      </Button>
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}><b>Corporate Service</b></MenuItem>
                        <MenuItem onClick={popupState.close}>Document Attestation</MenuItem>
                        <MenuItem onClick={popupState.close}>Accompaniment</MenuItem>
                        <MenuItem onClick={popupState.close}>Send/Recieve Package</MenuItem>
                      </Menu>
                    </React.Fragment>
                      )}
                    </PopupState>
                  </Grid>
                <Grid item xs={3} md={3}>
                 <Button  className={classes.newbtn} onClick={()=>gotrack()}>
                   Track Order
                 </Button>
               </Grid>
             {/*} <Grid item xs={3} md={3} >
                <Button  className={classes.newbtn} >
                  Pricing
                </Button>
              
                      </Grid>
              <Grid item xs={3} md={3} >
               <Button  className={classes.newbtn} >
                  Support
                </Button>
              
              </Grid>
            </Grid>
            </Grid>
            <Grid item xs={3} md={3}>
              <Grid container spacing={3}>

                
                <Grid item xs={2} md={2} className="notification">
               <img className='noti-icon' src='./Images/notification.png'></img>
                &nbsp;<div className="btn-noti">Notication</div>
                
                </Grid>
                <Grid item xs={4} md={4} >
                 
                </Grid>
                <Grid item xs={2} md={2} className="notification" onClick={()=>logout()}>
               <img className='noti-icon' src='./Images/user.png'></img>
                &nbsp;<div  className="btn-noti btn-1" onClick={()=>logout()}>Admin/Logout</div>
                
                </Grid>
                
                
              </Grid>
            </Grid>
            
          </Grid>
          
          </Navbar>*/}
          <div className={classes.ht}>
            <nav className="navbar" ref={navElement}>
            <div id="ham" className="hamburger" onClick={handleOpenNavMenu} ref={listElement}>
                <span className="bar" ></span>
                <span className="bar" ></span>
                <span className="bar"></span>
              </div>
              <a href="" class="nav-logo">
                <img src='./Images/icon.png' className='logo'></img>
              </a>
              <div className={classes.ht}>
              <ul class="nav-menu">
              <li class="nav-item">
                 <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                          <Grid item >


                <Button  className={classes.newbtn} onClick={()=>goHome()}>
                   Home
                 </Button>
                          </Grid>
                          <Grid item >
                          {currentView === "home" && pathname === "/services" && (
                            <hr
                            style={{
                              color: "goldenrod",
                              backgroundColor: "goldenrod",
                              height: 5,
                              width: "30px",
                              borderRadius: "10px"
                              }}
                              />
                          )}
                      </Grid>
                      </Grid>
                      </li>
                <li class="nav-item">
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                            <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                          <Grid item onClick={()=>goService()}>

                        <Button className={classes.newbtn} { ...bindTrigger(popupState)} >
                          Our Services<img className={classes.ared} src='./Images/arrowed.svg'></img>
                        </Button>
                          </Grid>
                          <Grid item >
                          {currentView === "services" && (
                            <hr
                            style={{
                              color: "goldenrod",
                              backgroundColor: "goldenrod",
                              height: 5,
                              width: "30px",
                              borderRadius: "10px"
                              }}
                              />
                          )}
                      </Grid>
                        </Grid>
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem className={classes.drp} onClick={()=>gotoSend()}>Send Package</MenuItem>
                          <MenuItem className={classes.drp} onClick={()=>gotoCollect()}>Collect Package</MenuItem>
                          <MenuItem className={classes.drp} onClick={()=>gotoDoc()}>Document Attestation(Coming soon)</MenuItem>
                          <MenuItem className={classes.drp} onClick={()=>gotoAcc()}>Accompaniment</MenuItem>

                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                </li>
                 <li class="nav-item">
                {pathname !== "/" &&<Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                          <Grid item >


                <Button  className={classes.newbtn} onClick={()=>gotrack()}>
                   Track Order
                 </Button>
                          </Grid>
                          <Grid item >
                          {currentView === "trackOrder" && pathname === "/allorders" && (
                            <hr
                            style={{
                              color: "goldenrod",
                              backgroundColor: "goldenrod",
                              height: 5,
                              width: "30px",
                              borderRadius: "10px"
                              }}
                              />
                          )}
                      </Grid>
                      </Grid>}
                      </li>
               {/*} <li class="nav-item">
                <Button  className={classes.newbtn} >
                  Pricing
                </Button>
                    </li>*/}
               {/*} <li class="nav-item">
                  <Button className={classes.newbtn} >
                    Support
                  </Button>
                </li>*/}
                <li class="nav-item-last">
                {/*<img className='notification-icon' src='./Images/notification.png'></img>
                &nbsp; <Button  className={classes.newbtn} >
                  Notification
                  </Button>*/}
                 {/*<PopupState variant="popover" popupId="demo-popup-menu">
                      {(popupState) => (
                    <React.Fragment>
                      <Button  className={classes.newbtn} {...bindTrigger(popupState)}>
                      <img className='notification-icon' src='./Images/nots.svg'></img>&nbsp;&nbsp;Notification
                        
                      </Button>
                      
                      <Menu {...bindMenu(popupState)}>
                       <div className='noti-des'>
                       
                      <span className='not-desc'>3 New Notification</span>
                      <div className='huge'>
                      <div className='whole'>
                      <img className='el-icon' src='./Images/ellipse.svg'/>
                      <div className='half'>
                      Courier person Arshad
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
                      Courier person sahid arrived
                      
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
                      Courier person shahid delivered the parcel
                       </div>
                       
                      </div>
                      <div className='order'>
                          <span>OrderID:</span>&nbsp;<b className='orderval'>4432</b><b>.</b>&nbsp;<span>1hour ago</span>&nbsp;<span>Active order</span>
                        </div>
                      </div>
                     
                        </div> 
                      </Menu>
                      
                    </React.Fragment>
                      )}
                      </PopupState>*/}
              </li>
               
              {/*}  <li class="nav-item1">
                 
                  <img className='notification-icon2' src='./Images/user.svg'></img>
                  &nbsp;<Button className={classes.newbtn} onClick={() => logout()}>
                   
                  </Button>
                </li>*/}
                <li class="nav-item">
                <img className='notification-icon2' src='./Images/user.svg'></img>
                  <PopupState variant="popover" popupId="demo-popup-menu"
                  >
                    {(popupState) => (
                      <React.Fragment>
                            <Grid
                            
                            
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                          <Grid item>

                        <Button className={classes.newbtn} { ...bindTrigger(popupState)} >
                        {user}/Logout<img className={classes.ared} src='./Images/arrowed.svg'></img>
                        </Button>
                          </Grid>
                        
                        </Grid>
                        {/* <Menu {...bindMenu(popupState)}   
                              
                            
                >
                          <MenuItem className={classes.drp} onClick={()=>profile()}>Profile</MenuItem>
                          <MenuItem className={classes.drp} onClick={()=>changePass()}>Change/Reset password</MenuItem>
                          <MenuItem className={classes.drp} onClick={()=>logout()}>Logout</MenuItem>

                        </Menu> */}
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
                      </React.Fragment>
                    )}
                  </PopupState>
                </li>
              </ul>
              </div>
              {/* <Box sx={{ flexGrow: 0 }}>
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
          </Box> */}
          <Box sx={{display: { xs: "flex", md: "none", lg: "none" }}}>
            <PermIdentityIcon sx={{display: { xs: "flex", md: "none", lg: "none" }}}/>
            <NotificationsNoneIcon  />
            
             
            </Box>
          
            </nav>
          </div>
          {/*} <Grid container>
            <Grid item xs={12} md={12} lg={12} className="location"> 
                  <div className={classes.location}>
                    <p className='location-text'>
                     <LocationOnIcon className={classes.locIcon}></LocationOnIcon> Dubai | 112,Sheikh Zayed Rd- Trade Centre- Trade Center 2
                    </p>
                  </div>     
            </Grid>

          </Grid>*/}
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
            </Grid>


          </Grid>

        </div>
      </div>
    </>
  )
}
export default withStyles(AuthenticationStyle)(Allservices);
