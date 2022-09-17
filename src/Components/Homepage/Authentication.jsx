import React, { useEffect, useRef, useState } from 'react'
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
import AuthContent from './AuthContent';
import Services from './Services';
import Flow from './Flow';
import Purpose from './Purpose';
import Payments from './Payments';
import AskedQuestions from './AskedQuestions';
import Feedback from './Feedback';
import Footer from './Footer';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import Avatar from '@mui/material/Avatar';

import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
//import { initializeApp } from 'firebase/app';
//import { getFirestore,onSnapshot,collection } from '@firebase/firestore';

//import firebase from "../../firebase/index"
//import {getDatabase} from "https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js"

const Authentication = (props) => {
  const { classes } = props;

  //  const app = initializeApp(firebaseConfig);
  //const db = app.firestore();
  // const db = getFirestore(app);
  //const ref = db.collection('jiffy-e579d')
  //console.log(JSON.stringify(db))
  //const ref = collection('/location')
  //const col = collection(db, 'location');
  //console.log(JSON.stringify(ref))
  //async function getCities(db) {
  // useEffect(() => {

  //  onSnapshot(collection(getFirestore(),"location"),(snapshot) =>{
  //    console.log(snapshot.docs.map(doc=> doc.data()))
  //  });
  // })
  //const citySnapshot = await getDocs(citiesCol);
  //const cityList = citySnapshot.docs.map(doc => doc.data());
  //return cityList;
  //}

  const listElement = useRef(null);
  const navElement = useRef(null);
  const listElement1 = useRef(null);
  const navElement1 = useRef(null);

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

  const [currentView, setCurrentView] = useState("services")

  React.useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        setCurrentView("services")
      }
    }

    return () => (window.onscroll = null);
  });


  function support() {
    setCurrentView("support")
    const element = document.getElementById("contents");
    console.log("🚀 ~ file: Authentication.jsx ~ line 81 ~ support ~ element", element)

    element.scrollIntoView();
  }
  function goOn() {

  }
  ;


  function mobileMenu() {

  }
  return (
    <><Grid item xs={12} lg={12} md={12}>
      <div className={classes.root}>
        <div>
          {/*} <Navbar className={classes.navbar}>
            <Grid container spacing={3}>
              <Grid item sm={4} xs={12} md={4} className='logo-grid'>
                <img src='./Images/icon.png' className='logo'></img>
              </Grid>
              <Grid item xs={5} sm={5} md={5} lg={5}>
                <Grid container className={classes.nav_align}>
                  <Grid item xs={3} sm={3} md={3} lg={3} className={classes.btn_navbar}>
             
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
                <Grid item xs={3} sm={3} md={3} lg={3} className={classes.btn_navbar}>
                 <Button  className={classes.newbtn}>
                   Track Order
                 </Button>
                 </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} className={classes.btn_navbar}>
                <Button  className={classes.newbtn} >
                  Pricing
                </Button>
              
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} className={classes.btn_navbar} >
                <Button  className={classes.newbtn} >
                  Support
                </Button>
              
                </Grid>navigate('/services')
              </Grid>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <Grid container spacing={3} className={classes.nav_align}>

                
                <Grid item xs={2} sm={2} md={2} className="notification">
               <img className='notification-icon' src='./Images/notification.png'></img>
                &nbsp;<div className="btn-noti">Notication</div>
                
                </Grid>
                <Grid item xs={4} md={4} sm={4} >
                 
                </Grid>
                <Grid item xs={2} md={2} sm={2} className="notification">
               <img className='notification-icon' src='./Images/user.png'></img>
                &nbsp;<div  className="btn-noti">LogIn/Signup</div>
                
                </Grid>
                <Grid item xs={4} md={4} sm={4} >
                 
                </Grid>
                
              </Grid>
            </Grid>
            
          </Grid>
          
          </Navbar>*/}
          {/*## <div className={classes.ht1}>
            <nav className="navbar" ref={navElement}>
              <a href="" class="nav-logo">
                <img src='./Images/icon.png' className='logo'></img>
              </a>
              <ul class="nav-menu">
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
                          <Grid item >
                            <Button className={classes.newbtn} {...bindTrigger(popupState)}>
                              Our Services<img className={classes.ared} src='./Images/arrowed.svg'></img>

                            </Button>
                          </Grid> */}
                          {/* <Grid item >
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


                      </Grid>*/}

                        {/*## </Grid>
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem onClick={popupState.close}>
                            <a className={classes.drp} href='#comps'>Send/Recieve Package</a></MenuItem>
                          <MenuItem onClick={popupState.close}>
                            <a className={classes.drp} href='#comps'> Document Attestation</a>
                          </MenuItem>
                          <MenuItem onClick={popupState.close}>
                            <a className={classes.drp} href='#comps'> Accompaniment</a></MenuItem>

                        </Menu>

                      </React.Fragment>
                    )}
                  </PopupState>

                </li> */}
                {/*}  <li class="nav-item">
                <Button  className={classes.newbtn}>
                   Track Order
                 </Button>
                      </li>
                <li class="nav-item">
                <Button  className={classes.newbtn} >
                  Pricing
                </Button>
                </li>*/}
                {/*## <li class="nav-item">
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item >
                      <Button onClick={() => support()} id="contents">
                        <a className={classes.newbtn} href='#co'>Support</a>
                      </Button>
                    </Grid> */}
                    {/* <Grid item >
                          {currentView === "support" && (
                            <hr
                            style={{
                              color: "goldenrod",
                              backgroundColor: "goldenrod",
                              height: 5,
                              width: "30px",
                              borderRadius: "10px",
                              marginTop: 5
                              
                              }}
                              />
                          )}
                      </Grid>*/}
                  {/*## </Grid>
                </li>
                <li>

                </li> */}
                {/*} <li class="nav-item-last">
                <img className='notification-icon' src='./Images/notification.png'></img>
                &nbsp; <Button  className={classes.newbtn} >
                  Notification
                </Button>
                 <PopupState variant="popover" popupId="demo-popup-menu">
                      {(popupState) => (
                    <React.Fragment>
                      <Button  className={classes.newbtn} {...bindTrigger(popupState)}>
                      <img className='notification-icon' src='./Images/notification.png'></img>&nbsp;&nbsp;Notification
                        
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
              </li>*/}
                {/*## <div></div>
                <li class="nav-item-last1"> */}
                  {/*} <PersonOutlineIcon className={classes.personel}></PersonOutlineIcon>
                &nbsp;<Button  className={classes.newbtn} >
                  Login/Signup
                      </Button>*/}
                  {/*## <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <PersonOutlineIcon className={classes.personel}></PersonOutlineIcon>
                        &nbsp;<Button className={classes.newbtn}{...bindTrigger(popupState)} >
                          Login
                        </Button>


                      </React.Fragment>
                    )}
                  </PopupState>
                </li>
              </ul>
              <div id="ham" className="hamburger" onClick={onKeyUp} ref={listElement}>
                <span className="bar" ></span>
                <span className="bar" ></span>
                <span className="bar"></span>
              </div>
            </nav>
          </div>*/}
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
           <div id='comps'>
            <AuthContent></AuthContent>
          </div>

           <Services></Services>
          <div id='co'>
            <Flow></Flow>
          </div>
           <Purpose></Purpose>
          {/*<Payments></Payments>*/}
          <AskedQuestions></AskedQuestions>
          {/*<Feedback></Feedback>*/}

           <Footer></Footer>


        </div>
      </div>
    </Grid>
    </>
  )
}
export default withStyles(AuthenticationStyle)(Authentication);
