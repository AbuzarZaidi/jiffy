import React, { Component } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TrackorderStyle from '../TrackOrders/TrackorderStyle';
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';
import { useParams } from "react-router-dom";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Pdf from "react-to-pdf";
import { getBaseURL } from '../../../api/apiManagement';
const Completedorder = (props) => {
    let dispalyData;
    const { id } = useParams();
    const url = getBaseURL() + "/vendor/api/v1/parcel"
    const { classes } = props;
    const [data, setData] = React.useState();
    const [dataParcel, setDataParcel] = React.useState();
    const [datanew, setDataNew] = React.useState();
    const ref = React.createRef();
    React.useEffect(() => {

        axios.get(url, {
            params: {
                _id: id
            }
        }).then((response) => {

            console.log(response)
            setData(response.data.parcel[0])

        });



    }, [url]);
    React.useEffect(() => {

        axios.get(url, {
            params:{
                order_status:'invoice',
                userId: localStorage.getItem("userId")
            }

        }).then((response) => {
            //setDataParcel(response.data.parcel)
            setDataParcel(response.data.parcel)
            console.log("INVOICESS", response)


        });



    }, [url]);
    //React.useEffect(() => {

    //   axios.get(url, {
    //       params: {

    //      }
    //  }).then((response) => {

    //      console.log(response)
    //      setDataParcel(response.data.parcel)

    //   });



    // }, [url]);
    //console.log(data)
    return (<>
        <Grid container sx={{marginTop:"20px"}}>
            <Grid item xs={6} md={6} lg={6}>
                {/*} <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="onGoing" control={<Radio />} label="Ongoing" />
                        <FormControlLabel value="completed" control={<Radio />} label="Completed" />
                    </RadioGroup>
                </FormControl>*/}
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
            </Grid>
        </Grid>
        {dataParcel !== undefined ? (
            dispalyData = dataParcel.map((item, index) =>
                item.order_status === "Delivered" ? (

                    <Box className={classes.deliveryIn} >
                        <Grid container ref={ref} className={classes.Invoiced}>
                        <Grid item container xs={12} md={12} lg={12} className={classes.stepperIn}>
                                <Grid xs={12} md={3} >
                                    <p className={classes.stepperItem}>Status : <span className={classes.stepperBold}>{item.order_status}</span></p>
                                </Grid>
                                <Grid xs={12} md={3} >
                                    <p className={classes.stepperItem}>Order ID : <span className={classes.stepperBold}>{item.order_id}</span></p>
                                </Grid>
                               
                                {item && item.delivery_type !== 'accompaniment' && item.delivery_type !== 'accompainmentschedulelater' && item.product_info && item.product_info.length ? (
                                <Grid xs>
                                    <p className={classes.stepperItem}>Total Item(s) : <span className={classes.stepperBold}>{item.product_info.length} </span></p>
                                </Grid>):(<></>)}
                                {item && (item.delivery_type === 'accompaniment' || item.delivery_type === 'accompainmentschedulelater')&& item.total_time_taken ? (
                                <Grid xs={12} md={3}>
                                    <p className={classes.stepperItem}>Total time taken : <span className={classes.stepperBold}>{item.total_time_taken} </span></p>
                                </Grid>):(<></>)}
                                <Grid xs={12} md={3}>
                                    <p className={classes.stepperItem}><span className={classes.stepperBold}>Total Price : {item.estimatedPrice} AED</span></p>
                </Grid>
                            </Grid>
                            <Grid container className={classes.invoiceContent} alignItems="center">
                            <Grid xs>
                                    <p className={classes.stepperItem}>Delivery Type : <span className={classes.stepperBold}>{item.delivery_type_display}</span></p><br/>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} className={classes.orderStatus}>
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
                           
                            <br />
                              { item && item.pickup && item.pickup[0] ? (
                                <>
                                <Typography sx={{paddingLeft: "10px", wordWrap: 'break-word'}}>{item.pickup[0].pickup_location}&nbsp;</Typography>
                            <span > 
                            {/* className={classes.lpickData} */}
                           {/* { item && item.pickup && item.pickup[0] && item.pickup[0].pickup_status && item.pickup[0].pickup_status === 'pickedup' ?  <img className='tick' src='./Images/check.png' ></img>: (<></>)}
                            &nbsp;{ item && item.pickup && item.pickup[0]  && item.pickup[0].time_taken ?  <span>Time taken: {item.pickup[0].time_taken}</span>: (<></>)} */}
                             </span></>
                             ):(<></>)} 
                             
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
                            {/* { item && item.pickup && item.pickup[2] ? (
                            <span className={classes.lpickData}>{item.pickup[2].pickup_location}
                             { item && item.pickup && item.pickup[2] && item.pickup[2].pickup_status && item.pickup[2].pickup_status === 'pickedup' ? <span> <img className='tick' src='./Images/check.png' ></img></span> : (<></>)}
                             </span>):(<></>)} */}
                           
                            <br/><br/></>):(<></>)}
                            
                            <span className={classes.dpick}> <b>Delivery Address</b></span> <br />
                            <Typography sx={{ wordWrap: 'break-word',paddingLeft: "10px",}}>{item.delivery[0].delivery_location} &nbsp;</Typography>

                           <br/><br/><br/>


                          </Grid>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} className={classes.orderStatus}>
                         {/*} <Grid item xs={12} md={2} lg={2} className={classes.stepped}>
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
                           
                            <br />
                            { item && item.pickup && item.pickup[0] ? (
                            <span className={classes.lpickData}>P.O. Box {item.pickup[0].pickup_location}&nbsp;
                            { item && item.pickup && item.pickup[0] && item.pickup[0].pickup_status && item.pickup[0].pickup_status === 'pickedup' ?  <img className='tick' src='./Images/check.png' ></img>: (<></>)}
                             </span>):(<></>)}
                            &nbsp; 

                           <br /> <br />
                            {item && item.pickup && item.pickup[1] ? (<>
                            <span className={classes.lpick}><b>Pickup Point 1 Address</b> </span>
                            
                            <br />
                            { item && item.pickup && item.pickup[1] ? (
                            <span className={classes.lpickData}>P.O. Box {item.pickup[1].pickup_location}
                             { item && item.pickup && item.pickup[1] && item.pickup[1].pickup_status && item.pickup[1].pickup_status === 'pickedup' ? <img className='tick' src='./Images/check.png' ></img>: (<></>)}
                             </span>):(<></>)}
                           
                            <br/><br/></>):(<></>)}

                            {item && item.pickup && item.pickup[2] && item.pickup[2]? (<>
                            <span className={classes.lpick}><b>Pickup Point 2 Address</b> </span>
                            
                            <br />
                            { item && item.pickup && item.pickup[2] ? (
                            <span className={classes.lpickData}>P.O. Box {item.pickup[2].pickup_location}
                             { item && item.pickup && item.pickup[2] && item.pickup[2].pickup_status && item.pickup[2].pickup_status === 'pickedup' ? <span> <img className='tick' src='./Images/check.png' ></img></span> : (<></>)}
                             </span>):(<></>)}
                           
                            <br/><br/></>):(<></>)}
                            
                            <span className={classes.dpick}> <b>Delivery Address</b></span> <br />


                            <span className={classes.dpickData}>P.O. Box {item.delivery[0].delivery_location} &nbsp;</span><br/>


                          </Grid>*/}
                          {/*<hr className={classes.header}></hr>*/}
                        </Grid>
                                
                               {/*} <Grid item xs={12} md={4} lg={4} className={classes.stepperDownload}>
                                    <img src='./Images/demo-user.png' className={classes.userIcon} width={70} height={70} alt='user' />
                                    <Pdf targetRef={ref} filename="code-example.pdf">
                                        {({ toPdf }) => <div title='DOWNLOAD'><button onClick={toPdf} className={classes.btnInvoice}>Downlooad</button></div>}
                                    </Pdf>
                                </Grid>*/}
                            </Grid>
                            {/*} <Grid item xs={12} md={12} lg={12} className={classes.deliverySpace}>
                                <Grid item xs={4} md={4} >
                                    <img src='./../Images/icon.png' className='logo'></img>
                                </Grid>
                                <Grid item xs={6} md={3} lg={6} className={classes.deliverySpace}>
                                    <b className={classes.note}> Document Delivery Note</b>
                                </Grid>
                                <Grid item xs={6} md={3} lg={6} className={classes.deliverySpace}>
                                    OrderID: {item._id}
                                </Grid>
                                <Grid item xs={6} md={3} lg={6} className={classes.delDownload}>
                                    <Pdf targetRef={ref} filename="code-example.pdf">
                                        {({ toPdf }) => <div title='DOWNLOAD'><DownloadForOfflineIcon onClick={toPdf}></DownloadForOfflineIcon></div>}
                                    </Pdf>

                                </Grid>




        </Grid>*/}


                        </Grid>

                    </Box>


                ) : (<>
                
                </>))) : (<>
                    <div className='center2'>
                    <div class="loader"></div>
                    </div>
                </>)}
              
    </>

    );

}

export default withStyles(TrackorderStyle)(Completedorder);