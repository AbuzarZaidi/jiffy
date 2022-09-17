import React, { Component } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import DeliveryStyle from './Delivery';
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';
import { useParams } from "react-router-dom";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Pdf from "react-to-pdf";
const DeliveryNote = (props) => {
    const {id} = useParams();
    const url = "https://apis.jiffy.ae/vendor/api/v1/parcel"
    const { classes } = props;
    const [data, setData] = React.useState();
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
    //axios.get(knetUrl+'?order_no'+order_no+'
  
    //console.log(data)
    return (<>
        <Grid container>
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
        {data !== undefined ? (
        <Grid container>
            <Box className={classes.delivery} >
                <Grid container ref={ref}>
                    <Grid item xs={12} md={12} lg={12} className={classes.deliverySpace}>
                        <Grid item xs={4} md={4} >
                            <img src='./../Images/icon.png' className='logo'></img>
                        </Grid>
                        <Grid item xs={6} md={3} lg={6} className={classes.deliverySpace}>
                            <b className={classes.note}> Document Delivery Note</b>
                        </Grid>
                        <Grid item xs={6} md={3} lg={6} className={classes.deliverySpace}>
                            OrderID: {data._id}
                        </Grid>
                        <Grid item xs={6} md={3} lg={6} className={classes.delDownload }>
                        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) =><div title='DOWNLOAD'><DownloadForOfflineIcon onClick={toPdf}></DownloadForOfflineIcon></div>}
      </Pdf>
                          
                        </Grid>
                      



                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className={classes.deliverySpace}>
                        <div>Pickup Address: {data.pickup_location}</div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className={classes.deliverySpace}>
                        <div>Telephone: {data.pickup_location_phone}</div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className={classes.deliverySpace}>
                        {data.partner_name ? (
                        <div>Delivered by: {data.partner_name.toUpperCase()} </div>):(<div>Delivered by: Pending </div>)}
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className={classes.deliverySpace}>
                        <div>Date: {data.ordered_date} </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className={classes.deliverySpace}>
                            <b className={classes.note}> Document Delivery Note</b>
                        </Grid>
                </Grid>
            </Box>
        </Grid>):(<>LOAding</>)}
    </>

    );

}

export default withStyles(DeliveryStyle)(DeliveryNote);