import React, { useState, useEffect } from "react";
import "./Allstyle.css";
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@mui/material";
import Allservices from "../Allservices";
import { styled } from "@mui/system";
import Tabs from '@mui/material/Tabs';
import BasicNavbar from '../../Homepage/BasicNavbar'

import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";
import TrackorderStyle from "../TrackOrders/TrackorderStyle";
import Box from "@mui/material/Box";
import VerticalLinearStepper from "../TrackOrders/TrackStepper";
import { getAPI } from "../../../api/apiManagement";
import { useDispatch, useSelector } from "react-redux";
import DeliveryNote from "../TrackOrders/DeliverNote/DeliveryNote";
import Map from "../TrackOrders/Track";
import MapComponent from "../TrackOrders/DeliveryTracking";
import { useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot, collection } from "@firebase/firestore";
import axios from "axios";
import ContactsIcon from "@mui/icons-material/Contacts";
import AllDeliveryNote from "../TrackOrders/DeliverNote/AllDeliveryNote";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import AllInvoice from "../TrackOrders/DeliverNote/AllInvoice";
import Footer from "../../Homepage/Footer";
import { Typography } from "@material-ui/core";
import Completedorders from "./Completedorders";
import CancelledOrders from "./CancelledOrders";
import moment from "moment";

const blue = {
  50: "#131C4C",
  100: "#C2E0FF",
  200: "#FFFFFF",
  300: "#66B2FF",
  400: "#EBE3CA",
  500: "#EBE3CA",
  600: "#FFFFFF",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
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
    padding-top: 22px;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: Montserrat;
  font-size: 0.875rem;
`;

// const Tabs = styled(TabsListUnstyled)`
//   min-width: 320px;
//   background-color: ${blue[500]};
//   border-radius: 35px;
//   margin-bottom: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 69px;
// `;

const Description = styled(Typography)`
  display: block;
  margin: auto;
  max-width: 1170px;
  padding: 20px 0px 30px 0;
  font-size: 15px;
  font-family: Montserrat;
  color: #545a77;
`;

const green = {
  500: "#000000",
};

const grey = {
  400: "#BFC7CF",
  500: "#AAB4BE",
  600: "#6F7E8C",
};

const Root = styled("span")(
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
      background: ${theme.palette.mode === "dark" ? grey[600] : grey[400]};
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
    `
);

const Trackorder = (props) => {
  let displayData;
  var today = new Date();
  //let diff = Math.abs(current - );
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = React.useState();
  const [value, setValue] = React.useState(0);

  const handlesChange = (event, newValue) => {
    setValue(newValue);
  };
  const firebaseConfig = {
    apiKey: "AIzaSyD1lQJtp4gTlOYWAfvCuBZH6nZ45f0FBKk",
    authDomain: "jiffy-e579d.firebaseapp.com",
    projectId: "jiffy-e579d",
    storageBucket: "jiffy-e579d.appspot.com",
    messagingSenderId: "736043927471",
    appId: "1:736043927471:web:463a4e99625f6f593c515a",
    measurementId: "G-S2ZKMM1N69",
  };
  const app = initializeApp(firebaseConfig);
  //const db = app.firestore();
  const db = getFirestore(app);
  React.useEffect(() => {}, [data]);

  const { classes } = props;
  const [alignment, setAlignment] = React.useState("web");
  const [mainData, setMainData] = React.useState();
  const [parcelData, setParcelData] = React.useState();
  const [delData, setdelData] = React.useState();
  const url = "https://apis.jiffy.ae/vendor/api/v1/parcel";

  const [show, showTrack] = React.useState(false);
  const [flag, setFlag] = React.useState(false);
  const [flag2, setFlag2] = React.useState(false);
  const [startDate, setStartDate] = useState(
    moment(new Date()).format("DD-MM-YYYY")
  );
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  function gotoTrack(ind) {
    console.log("ffff", ind);
    onSnapshot(collection(getFirestore(), "location"), (snapshot) => {
      setData(snapshot.docs.map((doc) => doc.data()));
      console.log(data);
    });

    setTimeout(() => {
      showTrack(!show);
      return;
    }, 1000);
  }
  useEffect(() => {
    let isMounted = true;
    //let res;
    axios
      .get(url, {
        params: {
          _id: id,
        },
      })
      .then((response) => {
        console.log(response);
        if (isMounted) {
          // res = response.data.parcel[0];
          setMainData(response.data.parcel[0]);
          if (data && data.length) {
            for (let i = 0; i < data.length; i++) {
              data[i].customerId = mainData.customerId;
              setdelData(data[i]);
            }
          }
        }
      });
    return () => {
      isMounted = false;
    };
    getData();
  }, [url]);
  function getData() {}

  const modifyData = (itemData) => {
    navigate("/modify/" + itemData._id);
  };
  const cancelData = (itemData) => {
    let params = {};
    params["_id"] = itemData._id;
    params["order_status"] = "Cancelled";

    axios.put(url, params).then((res) => {
      console.log(res.data);
      //postId = res.data;
      if (res.data.status === "success") {
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
    window.scrollTo(0, 0);
    setTimeout(() => {}, 3000);
  };
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 6,
      }}
    />
  );

  useEffect(() => {
    let isMountedNew = true;
    //let res;
    axios
      .get(url, {
        params: {},
      })
      .then((response) => {
        console.log(response);
        if (isMountedNew) {
          if (response && response.data && response.data.parcel) {
            for (let seg of response.data.parcel) {
              if (seg && seg.order_status && seg.order_status) {
                setTimeout(() => {
                  setFlag(true);
                }, 300);
              }
              if (
                seg &&
                seg.order_status &&
                seg.order_status &&
                seg.order_status === "Delivered"
              ) {
                setTimeout(() => {
                  setFlag2(true);
                }, 10);
              }
            }
          }

          // res = response.data.parcel[0];
          setParcelData(response.data.parcel);
          console.log(response.data.parcel);
          if (data && data.length) {
            for (let i = 0; i < data.length; i++) {
              data[i].customerId = mainData.customerId;
              setdelData(data[i]);
            }
          }
        }
      });
    return () => {
      isMountedNew = false;
    };
  }, [url]);

  function goMenu() {
    navigate("/services");
  }

  //getAPI()
  return (
    <>
    <BasicNavbar/>
      {/* <Allservices></Allservices> */}
      <Grid container className={classes.section_start}>
        <Grid container className={classes.newbg}>
          <Container maxWidth="xl">
            <Grid container className={classes.ht}>
              <Grid item xs={7} md={3} lg={3}>
                <div className={classes.heading}>
                  <h2 className={classes.tracked}>
                    {/*}  <ArrowBackIcon onClick={goMenu}></ArrowBackIcon>*/}
                    {/* <img src='./Images/aleft.png' onClick={goMenu} ></img> &nbsp; */}
                    Track Orders
                  </h2>
                </div>
              </Grid>
              <Grid item xs={5} md={9} lg={9}>
                <div className={classes.send_header}>
                  <ColoredLine color="#131C4C" />
                </div>
              </Grid>
            </Grid>
            <Description>
              Track your service on a live basis as it goes on its fulfilment
              journey.
            </Description>
            <Grid item xs={12} md={12} lg={12}>
              <TabsUnstyled defaultValue={0} className={classes.httabs}>
                {/* <TabsList
               >
                  <Tab >Active Order(s)</Tab>
                  <Tab >Completed Order(s)</Tab>
                  <Tab >Cancelled Order(s)</Tab>
                 
                  <Tab >Delivery Note</Tab>
                  <Tab >Invoice(s)</Tab>
                </TabsList> */}
   <Box sx={{ maxWidth: {lg:"100%", xs: "100%", sm: 480 }, }}>
      <Tabs
        value={value}
        onChange={handlesChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        className={classes.httabs}
      >
                  <Tab className={classes.httab}>Active Order(s)</Tab>
                  <Tab className={classes.httab}>Completed Order(s)</Tab>
                  <Tab className={classes.httab}>Cancelled Order(s)</Tab>
                 
                  <Tab className={classes.httab}>Delivery Note</Tab>
                  <Tab className={classes.httab}>Invoice(s)</Tab>
      </Tabs>
    </Box>
                <TabPanel value={0}>
                  {parcelData !== undefined ? (
                    (displayData = parcelData.map((item, index) => (
                      <>
                        <Box className={classes.delivery} key={index}>
                          {item.order_status === "Delivery Request Accepted" ||
                          item.order_status === "pickedup" ? (
                            <div className={classes.courierInfoContainer}>
                              <p className={classes.courierInfo}>
                                Courier has been assigned
                                <span className={classes.courierDetail}>
                                  {" "}
                                  &nbsp;|&nbsp; Delivery agent on Jiffy platform
                                  should arrive around {item.pickupTime}{" "}
                                </span>{" "}
                                <u
                                  className={classes.courier}
                                  onClick={() => gotoTrack(index)}
                                >
                                  Track courier
                                </u>
                              </p>
                              {show ? (
                                <MapComponent
                                  items={item}
                                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2ZOx-oo-2pStKr7U0C25h93J6CHIxMEU&v=3.exp&libraries=geometry,drawing,places"
                                  loadingElement={
                                    <div style={{ height: `100%` }} />
                                  }
                                  containerElement={
                                    <div
                                      style={{
                                        height: `433px`,
                                        width: "100%",
                                      }}
                                    />
                                  }
                                  mapElement={
                                    <div style={{ height: `100%` }} />
                                  }
                                />
                              ) : null}
                            </div>
                          ) : (
                            <></>
                          )}

                          <Grid
                            item
                            xs={12}
                            md={12}
                            lg={12}
                            className={classes.stepper1}
                          >
                            <Grid
                              item
                              xs={12}
                              md={2}
                              lg={2}
                              className={classes.stepped}
                            >
                              <div className={classes.lineDot}>
                                <img src="./Images/e1.svg"></img>
                              </div>
                              <div className={classes.lineNew}>
                                <img
                                  src="./Images/e2.svg"
                                  className={classes.imgLine}
                                ></img>
                              </div>
                              <div className={classes.lineDot}>
                                <img src="./Images/e1.svg"></img>
                              </div>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              md={10}
                              lg={10}
                              className={classes.ddpick}
                              sx={{mb:4}}
                            >
                              <span className={classes.lpick}>
                                <b>Pickup Address</b>{" "}
                              </span>
                              <br />
                              <span className={classes.lpickData}>
                                P.O. Box {item.pickup_location} &nbsp;
                                {/*<u className={classes.modifyButton}>Modify</u><span className={classes.modifyButton}> / </span><u className={classes.modifyButton}>Reschedule</u>*/}
                              </span>
                              <br /> <br />
                              <span className={classes.dpick}>
                                {" "}
                                <b>Delivery Address</b>
                              </span>{" "}
                              <br />
                              <span className={classes.dpickData}>
                                P.O. Box {item.delivery_location} &nbsp;
                                {/*<u className={classes.modifyButton}>Modify</u>*/}
                              </span>
                            </Grid>
                            {/*<hr className={classes.header}></hr>*/}
                          </Grid>

                          <Grid
                            item
                            xs={12}
                            md={12}
                            lg={12}
                            className={classes.stepper}
                          >
                            <div className={classes.contact}>
                              <b className={classes.courierTitle}>
                                Courier Details
                              </b>
                            </div>

                            {/*} <ContactsIcon sx={{ fontSize: 30 }} ></ContactsIcon>
      <div className={classes.cInfo}>
        <span> <b>{item.customer_name}</b><br></br></span>

        <span> {item.pickup_location_phone}</span>
</div>
      <hr className={classes.header}></hr>*/}
                          </Grid>
                          {/* <Grid item xs={12} md={12} lg={12} className={classes.courierDetails}>
        <Grid className={classes.courierContactContainer}>
          <img src='./Images/courier_profile_pic.png' width={70} height={70} alt='user' />
          <Box className={classes.courierContact}>
            <span className={classes.courierName}>{item.deliveryEmail}</span><br />
            <span className={classes.courierNumber}>{item.delivery_location_phone}</span>
          </Box>
        </Grid>
        <Grid container item xs={12} md={9} lg={9}>
          <button className={classes.actionButton}>
            <img src='/Images/whatsapp.png' alt='whatsapp' />
            WhatsApp Call
          </button>
          <button className={classes.actionButton}>
            <img src='/Images/phone.png' alt='whatsapp' />
            Phone Call
          </button>
        </Grid>
      </Grid> */}
                          <Grid container className={classes.detailsContainer}>
                            <Grid
                              xs={12}
                              md={3}
                              lg={3}
                              className={classes.detailsalign}
                            >
                              <p className={classes.detailsItem}>
                                Status : <span>{item.order_status}</span>
                              </p>
                            </Grid>
                            <Grid
                              xs={12}
                              md={3}
                              lg={3}
                              className={classes.detailsalign}
                            >
                              <p className={classes.detailsItem}>
                                Ordered Date :{" "}
                                <span>
                                  {moment(item.created_at).format("DD-MM-YYYY")}
                                </span>
                              </p>
                            </Grid>
                            <Grid
                              xs={12}
                              md={3}
                              lg={3}
                              className={classes.detailsalign}
                            >
                              <p className={classes.detailsItem}>
                                Order ID : <span>{item.order_id}</span>
                              </p>
                            </Grid>
                            <Grid
                              xs={12}
                              md={3}
                              lg={3}
                              className={classes.detailsalign}
                            >
                              <p className={classes.detailsItem}>
                                Total Item(s) :{" "}
                                <span>
                                  {item.product_info && item.product_info.length
                                    ? item.product_info.length
                                    : "0"}
                                </span>
                              </p>
                            </Grid>
                            {/*<Grid xs>
          <p className={classes.detailsItem}><span>Total Price : 50 AED</span></p>
        </Grid>*/}
                          </Grid>
                          {item.is_editable ? (
                            <Grid
                              item
                              xs={12}
                              md={12}
                              lg={12}
                              className={classes.stepper3}
                            >
                              <button
                                className={classes.modify}
                                onClick={() => modifyData(item)}
                              >
                                Modify
                              </button>
                              <button className={classes.modify}>
                                Reschedule
                              </button>
                              <button
                                className={classes.modify}
                                onClick={() => cancelData(item)}
                              >
                                Cancel
                              </button>
                            </Grid>
                          ) : (
                            <></>
                          )}

                          {/*<Grid item xs={12} md={12} lg={12} className={classes.stepper}>
      <div>
        <span><b>Status:</b>&nbsp;{item.pickup_status}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span><b>OrderId:</b>&nbsp;{item._id}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span><b>TotalPrice: AED</b>&nbsp;<b>{item.order_amt}</b></span>
      </div>
      <hr className={classes.headerFinal}></hr>
    </Grid>*/}
                        </Box>
                      </>
                    )))
                  ) : (
                    <>
                      <div className="center2">
                        <div class="loader"></div>
                      </div>
                    </>
                  )}
                  {!flag ? (
                    <>
                      <div className={classes.pending}>
                        <img
                          className={classes.pend}
                          src="../Images/jf2.png"
                        ></img>
                      </div>
                      <span className={classes.pendingInfo}>
                        No Active Orders
                      </span>
                      <br />
                      <br />
                      <br />
                      <br />
                    </>
                  ) : (
                    <></>
                  )}
                </TabPanel>

                <TabPanel value={1}>
                  <Completedorders></Completedorders>
                  {!flag2 ? (
                    <>
                      <div className={classes.pending}>
                        <img
                          className={classes.pend}
                          src="../Images/jf2.png"
                        ></img>
                      </div>
                      <span className={classes.pendingInfo}>
                        No Completed Orders
                      </span>
                      <br />
                      <br />
                      <br />
                      <br />
                    </>
                  ) : (
                    <></>
                  )}
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
                  {!flag2 ? (
                    <>
                      <div className={classes.pending}>
                        <img
                          className={classes.pend}
                          src="../Images/jf2.png"
                        ></img>
                      </div>
                      <span className={classes.pendingInfo}>
                        No Delivered Orders
                      </span>
                      <br />
                      <br />
                      <br />
                      <br />
                    </>
                  ) : (
                    <></>
                  )}
                </TabPanel>
                <TabPanel value={4}>
                  <AllInvoice></AllInvoice>
                  {!flag2 ? (
                    <>
                      <div className={classes.pending}>
                        <img
                          className={classes.pend}
                          src="../Images/jf2.png"
                        ></img>
                      </div>
                      <span className={classes.pendingInfo}>No Invoices</span>
                      <br />
                      <br />
                      <br />
                      <br />
                    </>
                  ) : (
                    <></>
                  )}
                </TabPanel>
              </TabsUnstyled>
            </Grid>
          </Container>
          <Grid item md={12} lg={12}>
            <div className="footed">
              <Footer></Footer>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default withStyles(TrackorderStyle)(Trackorder);
