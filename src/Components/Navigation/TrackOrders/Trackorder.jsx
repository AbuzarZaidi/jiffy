import React, { useEffect } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Grid } from '@mui/material';
import Allservices from '../Allservices';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled'
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';
import TrackorderStyle from './TrackorderStyle';
import SimpleMap, { MapContainer } from './Trackmap';
import VerticalLinearStepper from './TrackStepper';
import { getAPI } from '../../../api/apiManagement';
import { useDispatch, useSelector } from "react-redux";
import DeliveryNote from './DeliverNote/DeliveryNote';
import Map from './Track';
import MapComponent from './DeliveryTracking';
import { useParams } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getFirestore, onSnapshot, collection } from '@firebase/firestore';
import axios from 'axios';
import Trackmap from './Trackmap';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
const blue = {
  50: '#131C4C',
  100: '#C2E0FF',
  200: '#FFFFFF',
  300: '#66B2FF',
  400: '#EBE3CA',
  500: '#EBE3CA',
  600: '#FFFFFF',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    color: black;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
    padding: 12px 16px;
    border: none;
    border-radius: 20px;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: ${blue[400]};
    }
  
    &:focus {
      color: #fff;
      border-radius: 20px;
      outline: 2px solid ${blue[200]};
      outline-offset: 2px;
    }
  
    &.${tabUnstyledClasses.selected} {
      background-color: ${blue[50]};
      color: ${blue[600]};
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
  `;

const TabsList = styled(TabsListUnstyled)`
    min-width: 320px;
    background-color: ${blue[500]};
    border-radius: 20px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

  `;

const green = {
  500: '#000000',
};

const grey = {
  400: '#BFC7CF',
  500: '#AAB4BE',
  600: '#6F7E8C',
};

const Root = styled('span')(
  ({ theme }) => `
    font-size: 0;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin: 12px;
    cursor: pointer;
  
    &.${switchUnstyledClasses.disabled} {
      opacity: 0.4;
      cursor: not-allowed;
    }
  
    & .${switchUnstyledClasses.track} {
      background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
      border-radius: 10px;
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  
    & .${switchUnstyledClasses.thumb} {
      display: block;
      width: 14px;
      height: 14px;
      top: 3px;
      left: 3px;
      border-radius: 16px;
      background-color: #fff;
      position: relative;
      transition: all 200ms ease;
    }
  
    &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
      background-color: ${grey[500]};
      box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
    }
  
    &.${switchUnstyledClasses.checked} {
      .${switchUnstyledClasses.thumb} {
        left: 22px;
        top: 3px;
        background-color: #fff;
      }
  
      .${switchUnstyledClasses.track} {
        background: ${green[500]};
      }
    }
  
    & .${switchUnstyledClasses.input} {
      cursor: inherit;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 1;
      margin: 0;
    }
    `,
);





const Trackorder = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = React.useState();
  const firebaseConfig = {
    apiKey: "AIzaSyD1lQJtp4gTlOYWAfvCuBZH6nZ45f0FBKk",
    authDomain: "jiffy-e579d.firebaseapp.com",
    projectId: "jiffy-e579d",
    storageBucket: "jiffy-e579d.appspot.com",
    messagingSenderId: "736043927471",
    appId: "1:736043927471:web:463a4e99625f6f593c515a",
    measurementId: "G-S2ZKMM1N69"
  };
  const app = initializeApp(firebaseConfig);
  //const db = app.firestore();
  const db = getFirestore(app);
  React.useEffect(() => {
  
   
  },[data])

  const { classes } = props;
  const [alignment, setAlignment] = React.useState('web');
  const [mainData, setMainData] = React.useState();
  const [delData, setdelData] = React.useState();
  const url = "https://apis.jiffy.ae/vendor/api/v1/parcel"
  const [show, showTrack] = React.useState(false)
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  function gotoTrack() {
    onSnapshot(collection(getFirestore(), "location"), (snapshot) => {
      setData(snapshot.docs.map(doc => doc.data()));
      console.log(data)

    });
   
    setTimeout(() => {
      if(!show){
      showTrack(true)
      }
      else{
        showTrack(false)
      }
      return;
    }, 1000);



  }
  function gotrack(){
    navigate('/allorders')
  }
  useEffect(() => {
    let isMounted = true;
    //let res;
    axios.get(url, {
      params: {
        _id: id
      }
    }).then((response) => {
      console.log(response)
      if (isMounted) {

       // res = response.data.parcel[0];
        setMainData(response.data.parcel[0]);
        if (data && data.length) {
          for (let i = 0; i < data.length; i++) {
            data[i].customerId = mainData.customerId
            setdelData(data[i])

          }
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [url])
  




  //getAPI()
  return (
    <>
      {/* <Allservices></Allservices> */}
      <Grid container className={classes.section_start}>
        <Grid item xs={4} md={4} lg={4}>
          <div className={classes.heading}>
            <h2>Track Orders</h2>
          </div>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <div className={classes.heading_header}>

          </div>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <TabsUnstyled defaultValue={0}>
              <TabsList>
                <Tab >Active Orders</Tab>
                <Tab >Completed Orders</Tab>
                <Tab >Cancelled Orders</Tab>
                <Tab >Chat Messages</Tab>
                <Tab >Delivery Note</Tab>
                {/*<Tab >Invoices</Tab>*/}
              </TabsList>
              <TabPanel value={0}>
                {mainData !== undefined && mainData.order_status === "Delivery Request Acceptedd" ? (
                  <div>
                    <b>Courier has been assigned</b> | Courier person should arrive between 12:00 PM to 1:00 PM <u className={classes.courier} onClick={() => gotoTrack()}>Track courier</u>
                  </div>) : (<>
                    <div className={classes.pending}>
                      <img className={classes.pend} src='../Images/jf2.png'></img>
                    </div>
                    <span className={classes.pendingInfo}>Waiting For delivery boy to pickup</span>
                    <div className={classes.pendingInfo}> <button className={classes.allorder} onClick={()=>gotrack()}>
                   Track All Orders
                 </button></div>
                  </>)}
                {show ? (<MapComponent items={id}
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2ZOx-oo-2pStKr7U0C25h93J6CHIxMEU&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `1000px`, width: '1150px' }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />) : null}




              </TabPanel>
              <TabPanel value={1}>
                <div className={classes.pending}>
                <img className={classes.pend} src='../Images/jf2.png'></img>
                </div>
                <span className={classes.pendingInfo}>In progress</span>


              </TabPanel>
              <TabPanel value={2}>
                <div className={classes.pending}>
                <img className={classes.pend} src='../Images/jf2.png'></img>
                </div>
                <span className={classes.pendingInfo}>In progress</span>
              </TabPanel>
              <TabPanel value={3}>
                <div className={classes.pending}>
                <img className={classes.pend} src='../Images/jf2.png'></img>
                </div>
                <span className={classes.pendingInfo}>In progress</span>
              </TabPanel>
              <TabPanel value={4}>
              
              <DeliveryNote></DeliveryNote>
               
              </TabPanel>
              {/*<TabPanel value={5}>
              <DeliveryNote></DeliveryNote>
                
              </TabPanel>*/}
            </TabsUnstyled>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
export default withStyles(TrackorderStyle)(Trackorder);
