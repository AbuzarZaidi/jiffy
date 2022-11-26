import React, { useState, useEffect } from 'react'
import './Allstyle.css';
import { withStyles } from "@material-ui/core/styles";
import BasicNavbar from '../../BasicNavbar';
import BottomNav from '../../BottomNav'
import Countdown from "react-countdown";
import { Container, Grid } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Allservices from "../Allservices"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled'
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';
import TrackorderStyle from '../TrackOrders/TrackorderStyle';
import Box from '@mui/material/Box';
import VerticalLinearStepper from '../TrackOrders/TrackStepper';
import { getAPI, getBaseURL } from '../../../api/apiManagement';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import DeliveryNote from '../TrackOrders/DeliverNote/DeliveryNote';
import Map from '../TrackOrders/Track';
import MapComponent from '../TrackOrders/DeliveryTracking';
import { useParams } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getFirestore, onSnapshot, collection } from '@firebase/firestore';
import axios from 'axios';
import ContactsIcon from '@mui/icons-material/Contacts';
import AllDeliveryNote from '../TrackOrders/DeliverNote/AllDeliveryNote';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import AllInvoice from '../TrackOrders/DeliverNote/AllInvoice';
import Footer from '../../Homepage/Footer';
import { Typography } from '@material-ui/core';
import Completedorders from './Completedorders';
import CancelledOrders from './CancelledOrders';
import moment from "moment";

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
    font-family: Montserrat;
    color: black;
    cursor: pointer;
    font-size: 17px;
    background-color: transparent;
    width: 100%;
    border: none;
    border-radius: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 35px;
    opacity: 1;
    &:hover {
      font-weight: 500;
      border-radius: 35px;
      opacity: 1;
    }
    &:focus {
      color: #fff;
      border-radius: 20px;
      outline-offset: 2px;
      border-radius: 35px;
      opacity: 1;
    }
  
    &.${tabUnstyledClasses.selected} {
      background-color: ${blue[50]};
      color: ${blue[600]};
      border-radius: 35px;
      opacity: 1;
      font-size: 17px;
      font-weight: normal;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
      font-size: 17px;
    font-weight: normal;
    padding-top:22px;
    }
  `;

const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    font-family: Montserrat;
    font-size: 0.875rem;
  `;

const TabsList = styled(TabsListUnstyled)`
    min-width: 320px;
    background-color: ${blue[500]};
    border-radius: 35px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 69px;
  `;

const Description = styled(Typography)`
    display: block;
    margin: auto;
    max-width: 1170px;
    padding: 20px 0px 30px 0;
    font-size: 15px;
    font-family: Montserrat;
    color: #545A77;
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
  const [value, setValue] = React.useState(0);
  let displayData;
  var today = new Date();
  //let diff = Math.abs(current - );
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = React.useState();
  const firebaseConfig = {
    apiKey: "AIzaSyApfVOAcPyKnWgMlDCQlrlJvDLro2LW4Xo",
    authDomain: "jiffy-7c780.firebaseapp.com",
    projectId: "jiffy-7c780",
    storageBucket: "jiffy-7c780.appspot.com",
    messagingSenderId: "858697568951",
    appId: "1:858697568951:web:c314027e738f1df16db332",
    measurementId: "G-ZMK5HQEQFN"
  };
  const app = initializeApp(firebaseConfig);
  //const db = app.firestore();
  const db = getFirestore(app);
  React.useEffect(() => {


  }, [data])

  const { classes } = props;
  const [alignment, setAlignment] = React.useState('web');
  const [mainData, setMainData] = React.useState();
  const [parcelData, setParcelData] = React.useState();
  const [delData, setdelData] = React.useState();
  const url = getBaseURL() + "/vendor/api/v1/parcel"
 
  const [show, showTrack] = React.useState(false);
  const [flag, setFlag] =React.useState(false)
  const [flag2, setFlag2] =React.useState(false)
  const [startDate, setStartDate] = useState(
    moment(new Date()).format("DD-MM-YYYY")
  );
  const [idFlag, setIdFlag] =React.useState("")
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  function gotoTrack(ind,items) {
    console.log("ffff",ind)
    onSnapshot(collection(getFirestore(), "location"), (snapshot) => {
      setData(snapshot.docs.map(doc => doc.data()));
      console.log(data)
console.log("ghhhhhhhhhhhhhhhh",items._id)
    });
    localStorage.setItem("idMap",items.customer_id)
    localStorage.setItem("_id",items._id)
    setIdFlag(items.customer_id)
    setTimeout(() => {

      showTrack(!show)
      return;
    }, 1000);



  }
  useEffect(() => {
    let isMounted = true;
    //let res;
    axios.get(url, {
      params: {
        _id: id,
        userId: localStorage.getItem("userId")
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
        console.log("ee",Date.now())
      }
    });
    return () => {
      isMounted = false;

    };
    getData()
  }, [url])
  function getData() {


  }
 
    let modifyData = (itemData) => {
    
      navigate('/modify/' + itemData._id)
       
    
  }
  const cancelData = (itemData) => {
    debugger;
    let params={};
    params["_id"] = itemData._id;
    params["order_status"] = "Cancelled"
    params["userId"] = localStorage.getItem("userId")

    axios.put(url, params).then((res) => {
      console.log(res.data);
      //postId = res.data;
      if (res.data.status === "Success") {
        //postId = res.data.id;
        //setId(res.data.id);
        console.log(res);
        
      }
      try {
      } catch (error) {
        console.error();
      }
    });
    window.location.reload();
    window.scrollTo(0, 0)
    setTimeout(() => {
    
    }, 3000);
     
}
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 6
      }}
    />
  );


  useEffect(() => {
    let isMountedNew = true;
    //let res;
    axios.get(url, {
      params: {
        userId:localStorage.getItem("userId"),
      }
    }).then((response) => {
      console.log(response)
      if (isMountedNew) {
        if(response && response.data && response.data.parcel){
          for(let seg of response.data.parcel){
              if(seg && seg.order_status && seg.order_status){
                  setTimeout(() => {
                      setFlag(true);
                  },300)
              
         }
         if(seg && seg.order_status && seg.order_status && seg.order_status === 'Delivered'){
          setTimeout(() => {
              setFlag2(true);
          },10)
      
 }
          }
      }

        // res = response.data.parcel[0];
        setParcelData(response.data.parcel);
        console.log(response.data.parcel)
        if (data && data.length) {
          for (let i = 0; i < data.length; i++) {
            data[i].customerId = mainData.customerId
            setdelData(data[i])

          }
        }
      }
    });
    return () => {
      isMountedNew = false;
    };
  }, [url])

  function goMenu() {
    navigate('/services')
  }




  //getAPI()
  return (
    <>
    <Allservices/>
    <Grid container className={classes.section_start}>
        <Grid container className={classes.newbg}>
          <Container maxWidth="xl">
            <Grid container className={classes.ht}>
              <Grid item xs={9} md={7} lg={3} xl={3}>
                <div className={classes.heading}>
                  <h2 className={classes.tracked}>
                    {/* }  <ArrowBackIcon onClick={goMenu}></ArrowBackIcon> */}
                    <img src='./Images/aleft.png' onClick={goMenu} ></img> &nbsp;
                    Track Orders
                  </h2>
                </div>
              </Grid>
              <Grid item xs={3} md={5} lg={9} xl={9}>
                <div className={classes.send_header}>
                  <ColoredLine color="#131C4C" />
                </div>
              </Grid>
            </Grid>
            <Description>
              Track your service on a live basis as it goes on its fulfilment
              journey.
            </Description>
            <Grid item xs={12} md={12} lg={12} >
             <TabsUnstyled defaultValue={0} className={classes.ht} >
            
                {/* <TabsList>
                  <Tab >Active Order(s)</Tab>
                  <Tab >Completed Order(s)</Tab>
                  <Tab >Cancelled Order(s)</Tab>
                  
                  <Tab >Delivery Note</Tab>
                  <Tab >Invoice(s)</Tab>
                </TabsList> */}
               
   {/* <Box sx={{ maxWidth: {lg:"100%", xs: "100%", sm:  "100%" }, }}> */}
   {/* <TabsUnstyled defaultValue={0} className={classes.httabs} sx={{display: { xs:"flex",md: "none", lg: "none" }, }}> */}
      <Tabs
        // value={value}
        // onChange={handlesChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        className={classes.innerhtt}
        sx={{backgroundColor:"#EBE3CA", }}
       
      >
                  <Tab className={classes.httab}>Active Order(s)</Tab>
                  <Tab className={classes.httab}>Completed Order(s)</Tab>
                  <Tab className={classes.httab}>Cancelled Order(s)</Tab>
                 
                  <Tab className={classes.httab}>Delivery Note</Tab>
                  <Tab className={classes.httab}>Invoice(s)</Tab>
      </Tabs>
    {/* </Box> */}
                <TabPanel value={0}>


                  {parcelData !== undefined ? (

                    displayData = parcelData.map((item, index) => <>
                     {item.order_status !== "Delivered" && item.order_status !== "Cancelled" ? (
                      <Box className={classes.delivery} key={index} >
                        {item.order_status === "Delivery Request Accepted" || item.order_status === "pickedup" ? (
                          <div className={classes.courierInfoContainer} >
                            <p className={classes.courierInfo}>Delivery Partner has been assigned<span className={classes.courierDetail}> &nbsp;|&nbsp; Delivery agent on Jiffy platform should arrive around {moment(item.delivery[0].deliveryTime).format("hh:mm")} {item.delivery[0].deliveryTimeDesc} </span> <u className={classes.courier} onClick={() => gotoTrack(index,item)} >Track Delivery Agent</u></p>
                            {show && idFlag === item.customer_id ? (<MapComponent  items={item} 
                              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2ZOx-oo-2pStKr7U0C25h93J6CHIxMEU&v=3.exp&libraries=geometry,drawing,places"
                              loadingElement={<div style={{ height: `100%` }} />}
                              containerElement={<div style={{ height: `433px`, width: '1150px' }} />}
                              mapElement={<div style={{ height: `100%` }} />}
                            />) : null}
                          </div>) : (<></>)}

                        <Grid item xs={12} md={12} lg={12} className={classes.stepper1} >
                          <Grid item xs={12} md={2} lg={2} className={classes.stepped}>
                            <div className={classes.lineDot}><img src='./Images/e1.svg' ></img>

                            </div>
                            <div className={classes.lineNew}><img src='./Images/e2.svg' className={classes.imgLine}></img></div>
                            {item && item.pickup && item.pickup[1] ? (<>
                            <div className={classes.lineDot}><img src='./Images/e1.svg' ></img></div>
                            <div className={classes.lineNew}><img src='./Images/e2.svg' className={classes.imgLine}></img></div>
                            </>):(<></>)}
                            {item && item.pickup && item.pickup[2] ? (<>
                            <div className={classes.lineDot}><img src='./Images/e1.svg' ></img></div>
                            <div className={classes.lineNew}><img src='./Images/e2.svg' className={classes.imgLine}></img></div>
                            </>):(<></>)}
                            <div className={classes.lineDot}><img src='./Images/e1.svg' ></img></div>
                           
                          </Grid>
                          <Grid item xs={12} md={10} lg={10} className={classes.ddpick}>
                            <span className={classes.lpick}><b>Pickup Address</b> </span>
                            <Typography sx={{paddingLeft: "10px", wordWrap: 'break-word'}}>{item.pickup[0].pickup_location}&nbsp;</Typography>
                            <br />
                            {/* { item && item.pickup && item.pickup[0] ? (
                            <span className={classes.lpickData}> 
                            { item && item.pickup && item.pickup[0] && item.pickup[0].pickup_status && item.pickup[0].pickup_status === 'pickedup' ?  <img className='tick' src='./Images/check.png' ></img>: (<></>)}
                            { item && item.pickup && item.pickup[0]  && item.pickup[0].time_taken ?  <span>Time taken: {item.pickup[0].time_taken}</span>: (<></>)}
                             </span>):(<></>)} */}
                             
                            &nbsp; 

                            {/*<u className={classes.modifyButton}>Modify</u><span className={classes.modifyButton}> / </span><u className={classes.modifyButton}>Reschedule</u>*/}<br /> <br />
                            {item && item.pickup && item.pickup[1] ? (<>
                            <span className={classes.lpick}><b>Pickup Point 1 Address</b> </span>
                            
                            <br />
                            { item && item.pickup && item.pickup[1] ? (
                            <span className={classes.lpickData}> {item.pickup[1].pickup_location}
                             { item && item.pickup && item.pickup[1] && item.pickup[1].pickup_status && item.pickup[1].pickup_status === 'pickedup' ? <img className='tick' src='./Images/check.png' ></img>: (<></>)}
                             </span>):(<></>)}
                           
                            <br/><br/></>):(<></>)}

                            {item && item.pickup && item.pickup[2] && item.pickup[2]? (<>
                            <span className={classes.lpick}><b>Pickup Point 2 Address</b> </span>
                            
                            <br />
                            { item && item.pickup && item.pickup[2] ? (
                            <span className={classes.lpickData}>{item.pickup[2].pickup_location}
                             { item && item.pickup && item.pickup[2] && item.pickup[2].pickup_status && item.pickup[2].pickup_status === 'pickedup' ? <span> <img className='tick' src='./Images/check.png' ></img></span> : (<></>)}
                             </span>):(<></>)}
                           
                            <br/><br/></>):(<></>)}
                            
                            <span className={classes.dpick}> <b>Delivery Address</b></span> <br />

                            <Typography sx={{paddingLeft: "10px", wordWrap: 'break-word'}}>{item.delivery[0].delivery_location} &nbsp;</Typography>
                            <br/>


                          </Grid>
                          {/*<hr className={classes.header}></hr>*/}
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} className={classes.stepper}>
                          <div className={classes.contact}>
                            <b className={classes.courierTitle}>Order Details</b>
                          </div>

                          {/*} <ContactsIcon sx={{ fontSize: 30 }} ></ContactsIcon>
                        <div className={classes.cInfo}>
                          <span> <b>{item.customer_name}</b><br></br></span>

                          <span> {item.pickup_location_phone}</span>
                  </div>
                        <hr className={classes.header}></hr>*/}
                        </Grid>
                        
                        <Grid item xs={12} md={12} lg={12} className={classes.stepper}>
                          {item.delivery_type_display ? (
                        <Grid xs={12} className={classes.courierContactContainer1}>
                          <p className={classes.detailsItem}>Delivery type : <span>{item.delivery_type_display}</span></p>
                          </Grid>):(<></>)}
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className={classes.courierDetails}>
                       
                       <Grid xs className={classes.courierContactContainer}>
                         <img src='./Images/courier_profile_pic.png' width={70} height={70} alt='user' />
                         <Box className={classes.courierContact}>
                           <span className={classes.courierName}>{item.delivery[0].deliveryEmail}</span><br />
                           <span className={classes.courierNumber}>{item.delivery[0].delivery_location_phone}</span>
                         </Box>
                       </Grid>
                      
                       <Grid container item xs={12} md={3} lg={3}>
                         </Grid>
                         {item && item.delivery_type !=='accompaniment' ? (
                       <Grid container item xs={12} md={6} lg={6} > 
                       <b className={classes.docdesc}>Document Description</b> : &nbsp;&nbsp;&nbsp;
                       <Grid item xs={12} md={12} lg={12} className={classes.documentContainer}>
                         {item && (item.deliveryType !== 'accompaniment') && (item.passport && item.passport.length && item.passport.length !== 0) || (item.emiratesId && item.emiratesId.length && item.emiratesId.length !== 0) || (item.mCerti && item.mCerti.length && item.mCerti.length !== 0) || (item.bCerti && item.bCerti.length && item.bCerti.length) || (item.dCerti && item.dCerti.length && item.dCerti.length !== 0) ? (<>
                             
                             <Table sx={{ minWidth: 650 }} aria-label="simple table" className={classes.documentTable}>
                                 <TableHead>
                                     <TableRow>
                                        {/*} <TableCell className={classes.tableHeadItem}>No.</TableCell>*/}
                                        <TableCell align="left" className={classes.tableHeadItem}>Document Description</TableCell>
                                         <TableCell align="left" className={classes.tableHeadItem}>Qty.</TableCell>
                                       
                                     </TableRow>
                                 </TableHead>
                                 <TableBody>
                                     {item && item.passport && item.passport.length && item.passport.length !== 0 ? (item && item.passport) && (
                                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            {/*} <TableCell component="th" scope="row" className={classes.tableCellItem}>1</TableCell>*/}
                                            <TableCell align="left" className={classes.tableCellItem}>Passport</TableCell>
                                             <TableCell align="left" className={classes.tableCellItem}>{item.passport.length}</TableCell>
                                            
                                         </TableRow>
                                     ):<></>}
                                     {item && item.emiratesId && item.emiratesId.length && item.emiratesId.length !== 0 ? (item && item.emiratesId) && (
                                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            {/*} <TableCell component="th" scope="row" className={classes.tableCellItem}>2</TableCell>*/}
                                            <TableCell align="left" className={classes.tableCellItem}>Emirates Id</TableCell>
                                             <TableCell align="left" className={classes.tableCellItem}>{item.emiratesId.length}</TableCell>
                                            
                                         </TableRow>
                                     ):<></>}
                                     {item && item.mCerti && item.mCerti.length && item.mCerti.length !== 0 ? (item && item.mCerti) && (
                                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            {/*} <TableCell component="th" scope="row" className={classes.tableCellItem}>3</TableCell>*/}
                                            <TableCell align="left" className={classes.tableCellItem}>Marriage Certificate</TableCell>
                                             <TableCell align="left" className={classes.tableCellItem}>{item.mCerti.length}</TableCell>
                                            
                                         </TableRow>
                                     ):<></>}
                                     { item && item.bCerti && item.bCerti.length && item.bCerti.length ?(item && item.bCerti) && (
                                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            {/*} <TableCell component="th" scope="row" className={classes.tableCellItem}>4</TableCell>*/}
                                            <TableCell align="left" className={classes.tableCellItem}>Birth Certificate</TableCell>
                                             <TableCell align="left" className={classes.tableCellItem}>{item.bCerti.length}</TableCell>
                                            
                                         </TableRow>
                                     ):<></>}
                                     {item && item.dCerti && item.dCerti.length && item.dCerti.length !== 0 ?(item && item.dCerti) && (
                                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            {/*} <TableCell component="th" scope="row" className={classes.tableCellItem}>5</TableCell>*/}
                                            <TableCell align="left" className={classes.tableCellItem}>Degree Certificate</TableCell>
                                             <TableCell align="left" className={classes.tableCellItem}>{item.dCerti.length}</TableCell>
                                            
                                         </TableRow>
                                     ):<></>}
                                     {item && item.other && item.other.length && item.other.length !== 0 ? (item && item.other) && (
                                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                             {/*<TableCell component="th" scope="row" className={classes.tableCellItem}>6</TableCell>*/}
                                             <TableCell align="left" className={classes.tableCellItem}>Other</TableCell>
                                             <TableCell align="left" className={classes.tableCellItem}>{item.other.length}</TableCell>
                                            
                                         </TableRow>
                                     ) : <></>}
                                 </TableBody>
                             </Table>
                             </>):(<><div>No items added</div></>)}
                            
                             </Grid>
                     
      

                       </Grid>):(<></>)}
                       {item && item.delivery_type === 'accompaniment' ? (
                       <Grid container item xs={12} md={6} lg={6}>
                         {item && item.start_time ?
                       ( <><b className={classes.descDoc}>Started Time :<span> {item.start_time}</span></b> </>):(<></>)}&nbsp;&nbsp;&nbsp;
                   

                           {item && item.end_time ?
                       ( <><b className={classes.descDoc}>End Time</b> : {item.end_time} </>):(<></>)}
                       {item && item.total_time ?
                       ( <><b className={classes.descDoc}>Total Time</b> : {item.total_time} </>):(<></>)}
                       </Grid>):(<></>)}
                    
                     </Grid>
                    
                        <Grid container className={classes.detailsContainer}>
                          <Grid xs={12} md={3}>
                            <p className={classes.detailsItem}>Status : <span>{item.order_status}</span></p>
                          </Grid>
                          <Grid xs={12} md={2}>
                            <p className={classes.detailsItem}>Ordered Date : <span>{moment(item.created_at).format("DD-MM-YYYY")}</span></p>
                          </Grid>
                          <Grid xs={12} md={2}>
                            <p className={classes.detailsItem}>Order ID : <span>{item.order_id}</span></p>
                          </Grid>
                          <Grid xs={12} md={2}>
                            <p className={classes.detailsItem}>Total Item(s) : <span>{item.product_info && item.product_info.length ? item.product_info.length : '0'}</span></p>
                          </Grid>
                        
                          <Grid xs={12} md={3}>
                            <p className={classes.detailsItem}><span>Total Price : {item.estimatedPrice} &nbsp;AED</span></p>
                          </Grid>
                        </Grid> 
                        {item.is_editable ? 
                        <Grid item xs={12} md={12} lg={12} className={classes.stepper3}>
                          <button className={classes.modify} onClick={() => modifyData(item)}>Modify</button>
                         
                          <button className={classes.modify} onClick={() => cancelData(item)}>Cancel</button>
                          <div className='countdown'>
                          <Countdown   date={Date.now() + item.remaining_time} />
                          </div>
                         
                        </Grid> :<></>}
                        <Grid item xs={12} md={12} lg={12} className={classes.stepper}>
                          
                      
                        </Grid>
                       
                        {/*<Grid item xs={12} md={12} lg={12} className={classes.stepper}>
                        <div>
                          <span><b>Status:</b>&nbsp;{item.pickup_status}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <span><b>OrderId:</b>&nbsp;{item._id}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <span><b>TotalPrice: AED</b>&nbsp;<b>{item.order_amt}</b></span>
                        </div>
                        <hr className={classes.headerFinal}></hr>
                      </Grid>*/}
                      </Box>):(<></>)}

                    </>

                    )
                  ) : (<>
                  <div className='center2'>
                    <div class="loader"></div>
                    </div>
                  </>)}
                  {!flag ?<>
                <div className={classes.pending}>
                    <img className={classes.pend} src='../Images/jf2.png'></img>
                  </div>
                  <span className={classes.pendingInfo}>No Active Orders</span><br/>
                  <br/>
                  <br/>
                  <br/>
                  </> : <></> }

                  


                </TabPanel>
                <TabPanel value={1}>
                  <Completedorders></Completedorders>
                  {flag2 ?<>
                
                  </> : <><div className={classes.pending}>
                    <img className={classes.pend} src='../Images/jf2.png'></img>
                  </div>
                  <span className={classes.pendingInfo}>No Completed Orders</span><br/>
                  <br/>
                  <br/>
                  <br/></> }


                </TabPanel>
                <TabPanel value={2}>
                  <CancelledOrders></CancelledOrders>
                 
                </TabPanel>
                <TabPanel value={3}>
                  {/*} <div className={classes.pending}>
                  <img src='../Images/pend.png'></img>
                </div>
                <span className={classes.pendingInfo}>In progress</span>*/}
                  <AllDeliveryNote></AllDeliveryNote>
                  {!flag2 ?<>
                <div className={classes.pending}>
                    <img className={classes.pend} src='../Images/jf2.png'></img>
                  </div>
                  <span className={classes.pendingInfo}>No Delivered Orders</span><br/>
                  <br/>
                  <br/>
                  <br/>
                  </> : <></> }
                </TabPanel>
                <TabPanel value={4}>
                  <AllInvoice></AllInvoice>
                  {!flag2 ?<>
                <div className={classes.pending}>
                    <img className={classes.pend} src='../Images/jf2.png'></img>
                  </div>
                  <span className={classes.pendingInfo}>No Invoices</span><br/>
                  <br/>
                  <br/>
                  <br/>
                  </> : <></> }
                </TabPanel>
              </TabsUnstyled>
             
            </Grid>
            
           
          </Container>
          <Grid item md={12} lg={12} >
            <div className='footed'>
              <Footer></Footer>
            </div>
          </Grid>
          
        </Grid>
        
       
      </Grid>
     
      <BottomNav/>

    </>
  )
}
export default withStyles(TrackorderStyle)(Trackorder);
