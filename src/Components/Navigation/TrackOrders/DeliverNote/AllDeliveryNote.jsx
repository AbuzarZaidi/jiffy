import React, { Component, forwardRef } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Checkbox, Grid, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import Box from '@mui/material/Box';
import DeliveryStyle from './Delivery';
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';
import { useParams } from "react-router-dom";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Pdf from "react-to-pdf";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import DatePicker from 'react-datepicker'
import FilterListIcon from '@mui/icons-material/FilterList';
import { VisibilityOff, DateRange, RadioButtonChecked } from '@material-ui/icons';
import GetAppIcon from '@material-ui/icons/GetApp';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { width } from '@mui/system';
import moment from "moment";
import { getBaseURL } from '../../../../api/apiManagement';
const AllDeliveryNote = (props) => {
    let dispalyData;
    const { id } = useParams();
    const url = getBaseURL() + "/vendor/api/v1/parcel"
    const { classes } = props;

    const [data, setData] = React.useState();
    const [dataParcel, setDataParcel] = React.useState();
    const [datanew, setDataNew] = React.useState();
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [download, setdownload] = React.useState(false);
    const [btn, setButton] = React.useState(false);
    const [btnRadio, setButtonRadio] = React.useState(true);

    const ref = React.createRef();
    React.useEffect(() => {

        axios.get(url, {
            params: {
                _id: id,
                userId: localStorage.getItem("userId")
               

            }
        }).then((response) => {

            console.log(response)
            setData(response.data.parcel[0])

        });



    }, [url]);
   
    React.useEffect(() => {

        axios.get(url, {
            params: {
                userId: localStorage.getItem("userId")
            }
        }).then((response) => {

            console.log(response)
            setDataParcel(response.data.parcel)

        });



    }, [url]);

    const onChangeDate = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        console.log("fff",end)
        if(end){
        axios.get(url, {
            params: {
                userId:localStorage.getItem("userId").toString(),
                from_date:moment(start).format("DD/MM/YYYY"),
                to_date:moment(end).format("DD/MM/YYYY"),
                
                order_status: 'Delivered'
            }
        }).then((response) => {

            console.log("errrrfff",response)
            setData(response.data.parcel[0])
            setDataParcel(response.data.parcel)

        });
    }
    };

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <OutlinedInput
            id="outlined-adornment-password"
            onClick={onClick}
            ref={ref}
            value={value}
            className={classes.datePicker}
            startAdornment={<InputAdornment position="start"><img src="./Images/calendar-alt.png" width={17} height={19} alt='calender' /></InputAdornment>}
            endAdornment={
                < InputAdornment position="end" >
                    <img src='./Images/download.png' width={18} height={18} alt='download' />
                </InputAdornment >
            }
            placeholder="Date From - Date To"
        />
    ));
    const createPDF = async () => {  
        setButton(true) ;
        const pdf = new jsPDF("portrait", "pt", "a4"); 
        const data = await html2canvas(document.querySelector("#pdf"));
        const img = data.toDataURL("image/png");  
        const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(img, "SVG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("deliverynote.pdf");
        setTimeout(() => {
            setButton(false)
          }, 300);
      };

      const collection = async () => { 
        setButtonRadio(true)
      }
      const collection1 = async () => { 
        setButtonRadio(false)
      }
      const callcheck = async () => { 
        
      }
      const [valueInvoice, setInvoice] = React.useState("onGoing");
      const handleChangeInvoice = (event) => {
        setInvoice(event.target.value);
      };
    //console.log(data)
    return (<>
      <Grid container justifyContent="space-between" alignItems="center" sx={{marginTop:"20px"}}>
            <Grid item xs={12} md={6} lg={6}>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={valueInvoice}
              onChange={handleChangeInvoice}
                    >
                   
                       
                        <FormControlLabel onClick={collection1}  className={classes.radioLabel} value="onGoing"  control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Delivery Note" />
                     
                        <FormControlLabel onClick={collection} className={classes.radioLabel} value="completed" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Collection Note" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={6} className={classes.filterContainer} textAlign="right">
                <FilterListIcon />
                <p className={classes.filterText}>Filter by date</p>
                <DatePicker
                    selected={startDate}
                    onChange={onChangeDate}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    customInput={<ExampleCustomInput />}
                    calendarClassName={classes.calender}
                />
            </Grid>
        </Grid>
        
        {dataParcel !== undefined ? (
            dispalyData = dataParcel.map((item, index) =>
                item.order_status === 'Delivered' && item.delivery_type !== 'accompaniment' && item.delivery_type !== 'accompainmentschedulelater' ? <>
              
            <div id="pdf">
                <Grid container >
                    <Box className={classes.delivery} >
                        <Grid container ref={ref}>
                            <Grid container alignItems="center" justifyContent="space-between" item xs={12} md={12} lg={12} className={classes.deliverySpace1}>
                                <Grid item xs={6} md={2} lg={2}>
                                <img width={'100%'} className={classes.imgNote} src='./../Images/logo1svg.svg' ></img>
                               
                                   
                                </Grid>
                                {valueInvoice === 'completed' ?
                                    <Grid item xs={6} md={4} lg={4} className={classes.deliverySpace}>
                                        <b className={classes.note}> Document Collection Note</b>
                                    </Grid> :
                                    <Grid item xs={6} md={4} lg={4} className={classes.deliverySpace}>
                                        <b className={classes.note}> Document Delivery Note</b>
                                    </Grid>}

                                <Grid item xs={6} md={2} lg={2} className={classes.deliverySpace2}>
                                    <p className={classes.orderId}>OrderID: <span className={classes.orderNumber}>{item.order_id}</span></p>
                                </Grid>
                                <Grid item xs={6} md={2} lg={2} className={classes.delDownload}>
                                    {!btn ? 
                                <div title='DOWNLOAD'>
                                <button onClick={createPDF}  className={classes.btnInvoice}>Download</button>
                                </div>:<></>}

                                </Grid>
                            </Grid>
                            <Grid container className={classes.addressSection}>
                                <Grid item xs={12} md={12} lg={12} className={classes.containerItem}>
                                    <div className={classes.notemain}>
                                        <Grid item xs={12} md={2.5} lg={2.5}>
                                            <span className={classes.notehead}>Pickup Address &nbsp;&nbsp;
                                            </span>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                           <span className={classes.notedts}>{item.pickup[0].pickup_location}</span>&nbsp;
                                        {item && item.pickup &&item.pickup[1] && item.pickup[1].pickup_location ? (<>
                                            <span className={classes.notedts}><br/>{item.pickup[1].pickup_location}</span></>):(<></>)}&nbsp;
                                            {item && item.pickup &&item.pickup[2] && item.pickup[2].pickup_location ? (<>
                                            <span className={classes.notedts}> <br/> {item.pickup[2].pickup_location}</span></>):(<></>)}&nbsp;
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} className={classes.containerItem}>
                                    <div className={classes.notemain}>
                                        <Grid item xs={12} md={2.5} lg={2.5}>
                                            <span className={classes.notehead}> Delivery Address</span>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <span className={classes.notedts}>{item.delivery[0].delivery_location}
                                            </span>
                                        </Grid></div>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} className={classes.containerItem}>
                                    <div className={classes.notemain}>
                                        <Grid item xs={12} md={2.5} lg={2.5}>
                                            <span className={classes.notehead}> Telephone</span>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <span className={classes.notedts}>{item.pickup[0].pickup_location_phone}
                                            </span>
                                        </Grid></div>
                                </Grid>
                               {/*} <Grid item xs={12} md={12} lg={12} className={classes.deliverySpace}>
                                {data.partner_name !== undefined ? (
                                    <div>Delivered by: {item.partner_name.toUpperCase()} </div>) : (<div>Delivered by: Pending </div>)}
                                </Grid>*/}
                                <Grid item xs={12} md={12} lg={12} className={classes.containerItem}>
                                    <div className={classes.notemain}>
                                        <Grid item xs={12} md={2.5} lg={2.5}>
                                            <span className={classes.notehead}> Immigo Number</span>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <span className={classes.notedts}>{(item.immigoCaseNumber)}
                                            </span>
                                        </Grid></div>

                                </Grid>
                                <Grid item xs={12} md={12} lg={12} className={classes.containerItem}>
                                    <div className={classes.notemain}>
                                        <Grid item xs={12} md={2.5} lg={2.5}>
                                            <span className={classes.notehead}> Date</span>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <span className={classes.notedts}>{moment(item.ordered_date).format("DD-MM-YYYY")}
                                            </span>
                                        </Grid></div>

                                </Grid>
                                {item.total_timetaken ? (
                                <Grid item xs={12} md={12} lg={12} className={classes.containerItem}>
                                    <div className={classes.notemain}>
                                        <Grid item xs={12} md={2.5} lg={2.5}>
                                            <span className={classes.notehead}> Time</span>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                           
                                            <span className={classes.notedts}>{item.total_timetaken}
                                            </span>
                                        </Grid></div>

                                </Grid>):(<></>)}
                               {/*}  {item.rule ? 
                                <Grid item xs={6} md={3} lg={6} className={classes.deliverySpace}>
                                    <b className={classes.note}> Document Collection Note</b>
                                </Grid>:
                                <Grid item xs={6} md={3} lg={6} className={classes.deliverySpace}>
                                <b className={classes.note}> Document Delivery Note</b>
                            </Grid>}
                            <Grid item xs={12} md={12} lg={12} className={classes.deliverySpace}>
                                <div>
                                    <span><b>Status:</b>&nbsp;{item.order_status}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span><b>OrderId:</b>&nbsp;{item._id}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   
                                </div>

                            </Grid>*/}

                                {/*} <Grid item xs={12} md={12} lg={12} className={classes.deliverySpace}>
                            <table className={classes.tabled}>
                                <tr>
                               
                                    <th>Qty</th>
                                    <th>Document Description</th>
                                    
                                </tr>
                                <tr className={classes.tabledtr} >
                                  
                                   {item && item.passport ?<> <td><div>{item.passport.length}
                                </div></td>
                                <td>Passport</td></>
                                : null}
                                   
                            
                                </tr>
                                
                            </table>
    </Grid>*/}
                            </Grid>
                            {item && item.delivery_type !=='accompaniment' ? (
                            <Grid item xs={12} md={12} lg={12} className={classes.documentContainer}>
                                <b className={classes.descDoc}>Document Description</b> : &nbsp;&nbsp;&nbsp;
                                <Table sx={{ minWidth: 650 }} aria-label="simple table" className={classes.documentTable}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHeadItem}>No.</TableCell>
                                            <TableCell align="left" className={classes.tableHeadItem}>Qty.</TableCell>
                                            <TableCell align="left" className={classes.tableHeadItem}>Document Description</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {item && item.passport && item.passport.length && item.passport.length !== 0 ? (item && item.passport) && (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row" className={classes.tableCellItem}>1</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>{item.passport.length}</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>Passport</TableCell>
                                            </TableRow>
                                        ):<></>}
                                        {item && item.emiratesId && item.emiratesId.length && item.emiratesId.length !== 0 ? (item && item.emiratesId) && (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row" className={classes.tableCellItem}>2</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>{item.emiratesId.length}</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>Emirates Id</TableCell>
                                            </TableRow>
                                        ):<></>}
                                        {item && item.mCerti && item.mCerti.length && item.mCerti.length !== 0 ? (item && item.mCerti) && (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row" className={classes.tableCellItem}>3</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>{item.mCerti.length}</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>Marriage Certificate</TableCell>
                                            </TableRow>
                                        ):<></>}
                                        { item && item.bCerti && item.bCerti.length && item.bCerti.length ?(item && item.bCerti) && (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row" className={classes.tableCellItem}>4</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>{item.bCerti.length}</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>Birth Certificate</TableCell>
                                            </TableRow>
                                        ):<></>}
                                        {item && item.dCerti && item.dCerti.length && item.dCerti.length !== 0 ?(item && item.dCerti) && (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row" className={classes.tableCellItem}>5</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>{item.dCerti.length}</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>Degree Certificate</TableCell>
                                            </TableRow>
                                        ):<></>}
                                        {item && item.other && item.other.length && item.other.length !== 0 ? (item && item.other) && (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row" className={classes.tableCellItem}>6</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>{item.other.length}</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>Other</TableCell>
                                            </TableRow>
                                        ) : <></>}
                                    </TableBody>
                                </Table>
                                {!btn ?
                                <FormControlLabel className={classes.acknowledgeCheckboxContainer} control={<Checkbox checked className={classes.acknowledgeCheckbox} />} label="I hereby acknowledge the receipt of the above documents in good order" />
                                    :<></>}
                                </Grid>):(<></>)}

                                    {!btnRadio ? (
                            <Grid container item xs={12} md={12} lg={12} alignItems="center" justifyContent="space-between" className={classes.evidenceContainer}>
                                <Grid xs item className={classes.evidenceItem}>
                                    <Typography className={classes.evidenceTitle}>Name</Typography>
                                    {item && item.partner_name ? (
                                    <Typography className={classes.customerName}>{item.partner_name}</Typography>):(<Typography className={classes.customerName}>Fayiz</Typography>)}
                                </Grid>
      
                                {item.delivery[0] && item.delivery[0].delivery_signature ?(
                                <Grid xs item className={classes.evidenceItem}>

                                    
                                    <Typography className={classes.evidenceTitle}>Customer Signature1</Typography>
                                   
                                    <img src={"data:image/png;base64," + item.pickup[0].pickup_signature}></img>
                                   {/*} <img src={item.customer_signature && item.customer_signature !== "" ? item.customer_signature : './../Images/nim.png'} width={140} height={90}></img>*/}
                                </Grid>):(<></>)}
                                {item.delivery[0].image && item.delivery[0].image ? 
                                <Grid xs item className={classes.evidenceItem} justifyContent="flex-end">
                                    <Typography className={classes.evidenceTitle}>Parcel Delivered Evidence</Typography>
                                    
                                    <img className={classes.base} src={"data:image/png;base64," + item.delivery[0].image}></img>
                                    {/*<img src={item.delivery_image && item.delivery_image !== "" ? item.delivery_image[0] : './../Images/nim.png'} width={160} height={90}></img>*/}
                                </Grid>:<></>}

                            </Grid>):(
                                <>
                                 <Grid container item xs={12} md={12} lg={12} alignItems="center" justifyContent="space-between" className={classes.evidenceContainer}>
                                <Grid xs item className={classes.evidenceItem}>
                                    <Typography className={classes.evidenceTitle}>Name</Typography>
                                    {item && item.partner_name ? (
                                    <Typography className={classes.customerName}>{item.partner_name}</Typography>):(<Typography className={classes.customerName}>Fayiz</Typography>)}
                                </Grid>
      
                                {item.pickup[0] && item.pickup[0].pickup_signature ?(
                                <Grid xs item className={classes.evidenceItem}>

                                    
                                    <Typography className={classes.evidenceTitle}>Customer Signature</Typography>
                                   
                                   <img src={"data:image/png;base64," + item.pickup[0].pickup_signature}></img>
                                   {/*} <img src={item.customer_signature && item.customer_signature !== "" ? item.customer_signature : './../Images/nim.png'} width={140} height={90}></img>*/}
                                </Grid>):(<></>)}
                                {item.pickup[0].image && item.pickup[0].image ? 
                                <Grid xs item className={classes.evidenceItem} justifyContent="flex-end">
                                    <Typography className={classes.evidenceTitle}>Parcel Delivered Evidence</Typography>
                                    {valueInvoice === 'completed' ? (     
                           <img className={classes.base} src={"data:image/png;base64," + item.pickup[0].image}></img>):( <img className={classes.base} src={"data:image/png;base64," + item.delivery[0].image}></img>)}
                                    {/*<img src={item.delivery_image && item.delivery_image !== "" ? item.delivery_image[0] : './../Images/nim.png'} width={160} height={90}></img>*/}
                                </Grid>:<></>}

                            </Grid>
                            <Grid container item xs={4} md={4} lg={4} className={classes.evidenceContainer} >
                              
                            </Grid>
                          
                            <Grid container item xs={6} md={6} lg={6} className={classes.evidenceContainer} >
                            <img width={'80%'} src='./../Images/logosvg.svg'></img>
                               {/*} <img width={'40%'} src='./../Images/newland.png'></img>*/}
                                </Grid>
                            <Grid container item xs={2} md={2} lg={2} className={classes.evidenceContainer} >
                              
                            </Grid>
                                </>
                            )}
                        </Grid>
                    </Box>
                </Grid>
                </div>



                {/**Download starts */}
                {download ? 
                <div className={classes.download} >
                <Grid container >
                    <Box className={classes.delivery} >
                        <Grid container ref={ref}>
                            <Grid container alignItems="center"  item xs={12} md={12} lg={12} className={classes.deliverySpace1}>
                                <Grid item xs={6} md={3} lg={3}>
                                    <img className={classes.imgNote} src='./../Images/icon.png' ></img>
                                </Grid>
                                {item.rule ?
                                    <Grid item xs={6} md={4} lg={4} className={classes.deliverySpace}>
                                        <b className={classes.note}> Document Collection Note</b>
                                    </Grid> :
                                    <Grid item xs={6} md={4} lg={4} className={classes.deliverySpace}>
                                        <b className={classes.note}> Document Delivery Note</b>
                                    </Grid>}

                                <Grid item xs={6} md={2} lg={2} className={classes.deliverySpace2}>
                                    <p className={classes.orderId}>OrderID: <span className={classes.orderNumber}>{item.order_id}</span></p>
                                </Grid>
                                
                            </Grid>
                            <Grid container className={classes.addressSection}>
                                <Grid item xs={12} md={12} lg={12} className={classes.containerItem}>
                                    <div className={classes.notemain}>
                                        <Grid item xs={12} md={2.5} lg={2.5}>
                                            <span className={classes.notehead}>Pickup Address &nbsp;&nbsp;
                                            </span>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <span className={classes.notedts}>{item.pickup_location}</span>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} className={classes.containerItem}>
                                    <div className={classes.notemain}>
                                        <Grid item xs={12} md={2.5} lg={2.5}>
                                            <span className={classes.notehead}> Delivery Address</span>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <span className={classes.notedts}>{item.delivery[0].delivery_location}
                                            </span>
                                        </Grid></div>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} className={classes.containerItem}>
                                    <div className={classes.notemain}>
                                        <Grid item xs={12} md={2.5} lg={2.5}>
                                            <span className={classes.notehead}> Telephone</span>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <span className={classes.notedts}>{item.pickup_location_phone}
                                            </span>
                                        </Grid></div>
                                </Grid>
                               {/*} <Grid item xs={12} md={12} lg={12} className={classes.deliverySpace}>
                                {data.partner_name !== undefined ? (
                                    <div>Delivered by: {item.partner_name.toUpperCase()} </div>) : (<div>Delivered by: Pending </div>)}
                                </Grid>*/}
                                <Grid item xs={12} md={12} lg={12} className={classes.containerItem}>
                                    <div className={classes.notemain}>
                                        <Grid item xs={12} md={2.5} lg={2.5}>
                                            <span className={classes.notehead}> Date</span>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <span className={classes.notedts}> {item.ordered_date}
                                            </span>
                                        </Grid></div>

                                </Grid>
                                <Grid item xs={12} md={12} lg={12} className={classes.containerItem}>
                                    <div className={classes.notemain}>
                                        <Grid item xs={12} md={2.5} lg={2.5}>
                                            <span className={classes.notehead}> Price</span>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <span className={classes.notedts}>{item.estimatedPrice} AED
                                            </span>
                                        </Grid></div>

                                </Grid>
                               {/*}  {item.rule ? 
                                <Grid item xs={6} md={3} lg={6} className={classes.deliverySpace}>
                                    <b className={classes.note}> Document Collection Note</b>
                                </Grid>:
                                <Grid item xs={6} md={3} lg={6} className={classes.deliverySpace}>
                                <b className={classes.note}> Document Delivery Note</b>
                            </Grid>}
                            <Grid item xs={12} md={12} lg={12} className={classes.deliverySpace}>
                                <div>
                                    <span><b>Status:</b>&nbsp;{item.order_status}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span><b>OrderId:</b>&nbsp;{item._id}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   
                                </div>

                            </Grid>*/}

                                {/*} <Grid item xs={12} md={12} lg={12} className={classes.deliverySpace}>
                            <table className={classes.tabled}>
                                <tr>
                               
                                    <th>Qty</th>
                                    <th>Document Description</th>
                                    
                                </tr>
                                <tr className={classes.tabledtr} >
                                  
                                   {item && item.passport ?<> <td><div>{item.passport.length}
                                </div></td>
                                <td>Passport</td></>
                                : null}
                                   
                            
                                </tr>
                                
                            </table>
    </Grid>*/}
                            </Grid>

                            <Grid item xs={12} md={12} lg={12} className={classes.documentContainer}>
                                <b className={classes.descDoc}>Document Description</b> : &nbsp;&nbsp;&nbsp;
                                <Table sx={{ minWidth: 650 }} aria-label="simple table" className={classes.documentTable}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHeadItem}>No.</TableCell>
                                            <TableCell align="left" className={classes.tableHeadItem}>Qty.</TableCell>
                                            <TableCell align="left" className={classes.tableHeadItem}>Document Description</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {item && item.passport && item.passport.length && item.passport.length !== 0 ? (item && item.passport) && (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row" className={classes.tableCellItem}>1</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>{item.passport.length}</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>Passport</TableCell>
                                            </TableRow>
                                        ):<></>}
                                        {item && item.emiratesId && item.emiratesId.length && item.emiratesId.length !== 0 ? (item && item.emiratesId) && (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row" className={classes.tableCellItem}>2</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>{item.emiratesId.length}</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>Emirates Id</TableCell>
                                            </TableRow>
                                        ):<></>}
                                        {item && item.mCerti && item.mCerti.length && item.mCerti.length !== 0 ? (item && item.mCerti) && (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row" className={classes.tableCellItem}>3</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>{item.mCerti.length}</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>Marriage Certificate</TableCell>
                                            </TableRow>
                                        ):<></>}
                                        { item && item.bCerti && item.bCerti.length && item.bCerti.length ?(item && item.bCerti) && (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row" className={classes.tableCellItem}>4</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>{item.bCerti.length}</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>Birth Certificate</TableCell>
                                            </TableRow>
                                        ):<></>}
                                        {item && item.dCerti && item.dCerti.length && item.dCerti.length !== 0 ?(item && item.dCerti) && (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row" className={classes.tableCellItem}>5</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>{item.dCerti.length}</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>Degree Certificate</TableCell>
                                            </TableRow>
                                        ):<></>}
                                        {item && item.other && item.other.length && item.other.length !== 0 ? (item && item.other) && (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row" className={classes.tableCellItem}>6</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>{item.other.length}</TableCell>
                                                <TableCell align="left" className={classes.tableCellItem}>Other</TableCell>
                                            </TableRow>
                                        ) : <></>}
                                    </TableBody>
                                </Table>
                                {/*<FormControlLabel className={classes.acknowledgeCheckboxContainer} control={<Checkbox checked className={classes.acknowledgeCheckbox} />} label="I hereby acknowledge the receipt of the above documents in good order" />*/}
                            </Grid>


                            <Grid container item xs={12} md={12} lg={12} alignItems="center" justifyContent="space-between" className={classes.evidenceContainer}>
                                <Grid xs item className={classes.evidenceItem}>
                                    <Typography className={classes.evidenceTitle}>Name</Typography>
                                    <Typography className={classes.customerName}>Farookh Sheikh Abdul Ramzad</Typography>
                                </Grid>
                                <Grid xs item className={classes.evidenceItem}>


                                    <Typography className={classes.evidenceTitle}>Customer Signature</Typography>
                                    <img src={item.pickup[0].pickup_signature}></img>
                                    <img src={"data:image/png;base64," + item.delivery[0].delivery_signature}></img>
                                   {/*} <img src={item.customer_signature && item.customer_signature !== "" ? item.customer_signature : './../Images/nim.png'} width={140} height={90}></img>*/}
                                </Grid>
                                <Grid xs item className={classes.evidenceItem} justifyContent="flex-end">
                                    <Typography className={classes.evidenceTitle}>Parcel Delivered Evidence</Typography>
                                    <img className={classes.base} src={"data:image/png;base64," + item.delivery[0].image}></img>
                                    {/*<img src={item.delivery_image && item.delivery_image !== "" ? item.delivery_image[0] : './../Images/nim.png'} width={160} height={90}></img>*/}
                                </Grid>

                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                </div> : <></>}
                  {/**Download ends */}
                
                </>
                
                
                :<>
                
                </>)) : (<>
                    <div className='center2'>
                    <div class="loader"></div>
                    </div>    
                </>)}
    </>

    );

}

export default withStyles(DeliveryStyle)(AllDeliveryNote);