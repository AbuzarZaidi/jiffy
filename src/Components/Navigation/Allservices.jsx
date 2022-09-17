import React, { useRef , useState} from 'react'
import { Navbar, Container, Offcanvas, Nav, Dropdown, NavDropdown } from "react-bootstrap";
import AuthenticationStyle from "../../Styles/AuthenticationStyle";
import { withStyles } from "@material-ui/core/styles";
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
const Allservices = (props) => {
  const { classes } = props;

  const navigate = useNavigate();
  const { pathname }  = useLocation()
  console.log("🚀 ~ file: Allservices.jsx ~ line 21 ~ Allservices ~ pathname", pathname)

  const [currentView, setCurrentView] = useState("home")
  function logout() {
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
  function gotoDoc(){
    navigate('/documentAttestation')
  }
  function gotoAcc(){
    navigate('/accompainment')
  }
  const listElement = useRef(null);
  const navElement = useRef(null);


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
                          <MenuItem className={classes.drp} onClick={()=>gotoSend()}>Send/Recieve Package</MenuItem>
                          <MenuItem className={classes.drp} onClick={()=>gotoDoc()}>Document Attestation</MenuItem>
                          <MenuItem className={classes.drp} onClick={()=>gotoAcc()}>Accompaniment</MenuItem>

                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                </li>
                 <li class="nav-item">
                 <Grid
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
                      </Grid>
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
                  <PopupState variant="popover" popupId="demo-popup-menu">
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
                      
                    </React.Fragment>
                      )}
                      </PopupState>
              </li>
               
                <li class="nav-item1">
                  {/*<PersonOutlineIcon className={classes.personel}></PersonOutlineIcon>*/}
                  <img className='notification-icon2' src='./Images/user.svg'></img>
                  &nbsp;<Button className={classes.newbtn} onClick={() => logout()}>
                    Admin/Logout
                  </Button>
                </li>
              </ul>
              </div>
              <div id="ham" className="hamburger" onClick={onKeyUp} ref={listElement}>
                <span className="bar" ></span>
                <span className="bar" ></span>
                <span className="bar"></span>
              </div>
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
