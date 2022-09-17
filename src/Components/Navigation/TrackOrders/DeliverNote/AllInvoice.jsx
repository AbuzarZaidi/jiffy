import React, { Component } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import DeliveryStyle from './Delivery';
import TrackorderStyle from '../TrackorderStyle';
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';
import { useParams } from "react-router-dom";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Pdf from "react-to-pdf";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
const AllInvoice = (props) => {
    let dispalyData;
    const { id } = useParams();
    const url = "https://apis.jiffy.ae/vendor/api/v1/parcel"
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

        axios.get(url + '?order_status=invoice', {

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
    const [btn, setButton] = React.useState(false);
    const createPDF = async () => {   
        setButton(true)
        const pdf = new jsPDF("portrait", "pt", "a4"); 
        const data = await html2canvas(document.querySelector("#pdf"));
        const img = data.toDataURL("image/png");  
        const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("invoice.pdf");
      };


    return (<>
        <Grid container >
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
                        <div id="pdf">
                        <Grid container ref={ref} className={classes.Invoiced}>
                            <Grid item container xs={12} md={12} lg={12} className={classes.stepperIn}>
                                <Grid xs>
                                    <p className={classes.stepperItem}>Status : <span className={classes.stepperBold}>{item.order_status}</span></p>
                                </Grid>
                                <Grid xs={4}>
                                    <p className={classes.stepperItem}>Order ID : <span className={classes.stepperBold}>{item.order_id}</span></p>
                                </Grid>
                               {/*} <Grid xs>
                                    <p className={classes.stepperItem}>Payment : <span className={classes.stepperBold}>Failed</span></p>
                </Grid>*/}
                                <Grid xs>
                                    <p className={classes.stepperItem}>Total Item(s) : <span className={classes.stepperBold}>{item.product_info.length}</span></p>
                                </Grid>
                                {/*<Grid xs>
                                    <p className={classes.stepperItem}><span className={classes.stepperBold}>Total Price : 50 AED</span></p>
                                </Grid>*/}
                            </Grid>
                            <Grid container className={classes.invoiceContent} alignItems="center">
                                <Grid item xs={12} md={4} lg={8} className={classes.orderStatus}>
                                    <Grid item xs={12} md={2} lg={2} className={classes.stepped}>
                                        <div className={classes.lineDot}><img src='./Images/e1.svg' ></img>
                                        </div>
                                        <div className={classes.lineNew}><img src='./Images/e2.svg' className={classes.imgLine}></img></div>
                                        <div className={classes.lineDot}><img src='./Images/e1.svg' ></img></div>
                                    </Grid>
                                    <Grid item xs={12} md={10} lg={10} className={classes.ddpick}>
                                        <span className={classes.lpick}><b>Pickup Address</b> </span><br />
                                        <span className={classes.lpickData}> {item.pickup_location}</span><br />  <br /><br />
                                        <span className={classes.dpick}> <b>Delivery Address</b></span> <br />
                                        <span className={classes.dpickData}> {item.delivery_location}</span>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={4} lg={4} className={classes.stepperDownload}>
                               
                                <img src='./Images/demo-user.png' className={classes.userIcon} width={70} height={70} alt='user' />
                                {!btn ? 
                                <div title='DOWNLOAD'>
                                <button onClick={createPDF}  className={classes.btnInvoice}>Download</button>
                                </div>:<></>}

                                   {/*} <img src='./Images/demo-user.png' className={classes.userIcon} width={70} height={70} alt='user' />
                                    <Pdf targetRef={ref} filename="code-example.pdf">
                                        {({ toPdf }) => <div title='DOWNLOAD'></div>}
                                    </Pdf>*/}
                                </Grid>
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
                       
                

</div>
                       

                    </Box>



                ) : (<></>))) : (<>
                 <div className='center2'>
                    <div class="loader"></div>
                    </div>
                </>)}
    </>

    );

}

export default withStyles(TrackorderStyle)(AllInvoice);