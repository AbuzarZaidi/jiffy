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
import BasicNavbar from './BasicNavbar'
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
    <>
    <BasicNavbar/>
    <Grid item xs={12} lg={12} md={12}>
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
         
         <AskedQuestions></AskedQuestions>
      

           <Footer></Footer>


        </div>
      </div>
    </Grid>
    </>
  )
}
export default withStyles(AuthenticationStyle)(Authentication);