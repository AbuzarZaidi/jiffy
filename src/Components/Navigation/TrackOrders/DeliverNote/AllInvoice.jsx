import React, { Component, forwardRef } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import DeliveryStyle from "./Delivery";
import TrackorderStyle from "../TrackorderStyle";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getBaseURL } from "../../../../api/apiManagement";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import Pdf from "react-to-pdf";
import html2canvas from "html2canvas";
import DatePicker from "react-datepicker";
import FilterListIcon from "@mui/icons-material/FilterList";
import moment from "moment";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { jsPDF } from "jspdf";
const AllInvoice = (props) => {
  let dispalyData;
  const { id } = useParams();
  const url = getBaseURL() + "/vendor/api/v1/parcel";
  const invoice = getBaseURL() + "/vendor/api/v1/invoice";
  const { classes } = props;
  const [data, setData] = React.useState();
  const [invoiceData, setInvoiceData] = React.useState();
  const [dataParcel, setDataParcel] = React.useState();
  const [datanew, setDataNew] = React.useState();
  const ref = React.createRef();
  const [valueInvoice, setInvoice] = React.useState("completed");
  React.useEffect(() => {
    axios
      .get(invoice, {
        params: {
          userId: localStorage.getItem("userId"),
        },
      })
      .then((response) => {
        console.log("err", response);
        setInvoiceData(response.data);
      });
  }, [invoice]);
 React.useEffect(() => {
    axios
      .get(invoice, {
        params: {
          _id: id,
          userId: localStorage.getItem("userId"),
          invoice_type:  valueInvoice === "completed" ? "completed" : valueInvoice === "cancelled" ? "Cancelled" : "all",
        },
      })
      .then((response) => {
        console.log(response);
        setData(response.data.order_info[0]);
        setDataParcel(response.data.order_info);
      });
  }, [invoice]);
 /* React.useEffect(() => {
    axios.get(url + "?order_status=invoice", {}).then((response) => {
      //setDataParcel(response.data.parcel)
      //setDataParcel(response.data.parcel);
      console.log("INVOICESS", response);
    });
  }, [url]);*/

  const handleChangeInvoice = (event) => {
    setInvoice(event.target.value);
   
  
        axios
          .get(invoice, {
            params: {
              _id: id,
              userId: localStorage.getItem("userId"),
              invoice_type: event.target.value
            },
          })
          .then((response) => {
            console.log(response);
            setData(response.data.order_info[0]);
            setDataParcel(response.data.order_info);
          });
      
  
  };
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
  const onChangeDate = (dates) => {
    console.log("ggggg",dates)
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    console.log("fff", end);
    if (end) {
      axios
        .get(invoice, {
          params: {
            userId: localStorage.getItem("userId").toString(),
            from_date: moment(start).format("MM/YY"),
            to_date: moment(end).format("MM/YY"),

            invoice_type: "all",
          },
        })
        .then((response) => {
          console.log("errrrfff", response);
          //etData(response.data);
         // setDataParcel(response.data.parcel);
         setInvoiceData(response.data)
        });
    }
  };
  const onChangeDate2 = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    console.log("fff", end);
    if (end) {
      axios
        .get(invoice, {
          params: {
            userId: localStorage.getItem("userId").toString(),
            from_date: moment(start).format("MM/YY"),
            to_date: moment(end).format("MM/YY"),
            
            invoice_type:  valueInvoice === "completed" ? "completed" : valueInvoice === "cancelled" ? "Cancelled" : "all",
          },
        })
        .then((response) => {
          console.log("errrrfff90", response);
          setData(response.data.order_info[0]);
          setDataParcel(response.data.order_info);
        });
    }
  };
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(null);
  const [btn, setButton] = React.useState(false);
  const createPDF = async () => {
    setButton(true);
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("invoice.pdf");
  };


  const createPDFIn = async () => {
   
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.getElementById("pdfIn"));
    console.log("fff",data)
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("invoices.pdf");
  };

  const createPDFAdmin = async () => {
  
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.getElementById("admin"));
    console.log("fff",data)
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("invoices.pdf");
  };
  const [invoiceDataSingle, setInvoiceDataSingle] = React.useState();
  const [downloadView, setDownload] = React.useState();
const createInvoice = (id) =>{

  setInvoice("view")
  axios
  .get(invoice, {
    params: {
      _id:id,
      userId: localStorage.getItem("userId").toString(),
      
      invoice_type: "completed",
    },
  })
  .then((response) => {
    console.log("Single", response);
    //etData(response.data);
   // setDataParcel(response.data.parcel);
   setInvoiceDataSingle(response.data)
  });

}
const createInvoiceCancelled = (id) =>{
  setInvoice("view")
  axios
  .get(invoice, {
    params: {
      userId: localStorage.getItem("userId").toString(),
      _id:id,

      invoice_type: "cancelled",
    },
  })
  .then((response) => {
    console.log("Single", response);
    //etData(response.data);
   // setDataParcel(response.data.parcel);
   setInvoiceDataSingle(response.data)
  });

}

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <OutlinedInput
      id="outlined-adornment-password"
      onClick={onClick}
      ref={ref}
      value={value}
      className={classes.datePicker}
      startAdornment={
        <InputAdornment position="start">
          <img
            src="./Images/calendar-alt.png"
            width={17}
            height={19}
            alt="calender"
          />
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <img
            src="./Images/download.png"
            width={18}
            height={18}
            alt="download"
          />
        </InputAdornment>
      }
      placeholder="Date From - Date To"
    />
  ));
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={valueInvoice}
              onChange={handleChangeInvoice}
            >
              <FormControlLabel
                className={classes.radioLabel}
                value="completed"
                control={
                  <Radio
                    classes={{ root: classes.radio, checked: classes.checked }}
                  />
                }
                label="Completed"
              />
              {localStorage.getItem('previlage') === 'admin' ? (
              <FormControlLabel
                className={classes.radioLabel}
                value="all"
                control={
                  <Radio
                    classes={{ root: classes.radio, checked: classes.checked }}
                  />
                }
                label="Consolidated"
              />):(<></>)}
               <FormControlLabel
                className={classes.radioLabel}
                value="cancelled"
                control={
                  <Radio
                    classes={{ root: classes.radio, checked: classes.checked }}
                  />
                }
                label="Cancelled"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          className={classes.filterContainer}
          textAlign="right"
        >
          <FilterListIcon />
          <p className={classes.filterText}>Filter by date</p>
          {valueInvoice === "all" ? (
            <DatePicker
              selected={startDate}
              onChange={onChangeDate}
              startDate={startDate}
              endDate={endDate}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              selectsRange
              customInput={<ExampleCustomInput />}
              calendarClassName={classes.calender}
            />
          ) : (
            <DatePicker
              selected={startDate}
              onChange={onChangeDate2}
              startDate={startDate}
              endDate={endDate}
              dateFormat="MM/yyyy"
              selectsRange
              showMonthYearPicker
              customInput={<ExampleCustomInput />}
              calendarClassName={classes.calender}
            />
          )}
        </Grid>
      </Grid>
      <br />
      <br />

      {dataParcel ? (
        dataParcel.map((item) => (
          <>
           {item.pickup && valueInvoice === "completed" ? (
            <Box className={classes.deliveryIn}>
              {" "}
              <Grid
                item
                container
                xs={12}
                md={12}
                lg={12}
                className={classes.stepperIn}
              >
                <Grid xs={12} md={4} lg={4}>
                  <p className={classes.stepperItem}>
                    Status :{" "}
                    <span className={classes.stepperBold}>
                      {item.order_status}
                    </span>
                  </p>
                </Grid>
                {item.order_id ? (
                  <Grid xs={12} md={4} lg={4}>
                    <p className={classes.stepperItem}>
                      Order ID :{" "}
                      <span className={classes.stepperBold}>
                        {item.order_id}
                      </span>
                    </p>
                  </Grid>
                ) : (
                  <></>
                )}

                {item &&
                item.delivery_type !== "accompaniment" &&
                item.delivery_type !== "accompainmentschedulelater" &&
                item.product_info &&
                item.product_info.length ? (
                  <Grid xs>
                    <p className={classes.stepperItem}>
                      Total Item(s) :{" "}
                      <span className={classes.stepperBold}>
                        {item.product_info.length}
                      </span>
                    </p>
                  </Grid>
                ) : (
                  <></>
                )}
                {item &&
                (item.delivery_type === "accompaniment" ||
                  item.delivery_type === "accompainmentschedulelater") &&
                item.total_time_taken ? (
                  <Grid xs>
                    <p className={classes.stepperItem}>
                      Total time taken :{" "}
                      <span className={classes.stepperBold}>
                        {item.total_time_taken}{" "}
                      </span>
                    </p>
                  </Grid>
                ) : (
                  <></>
                )}
                <Grid xs>
                  <p className={classes.stepperItem}>
                    <span className={classes.stepperBold}>
                      Total Price : {item.price && item.price[0] && item.price[0].price ? item.price[0].price : "0"} AED
                    </span>
                  </p>
                </Grid>
              </Grid>
              <Grid
                container
                className={classes.invoiceContent}
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={8}
                  className={classes.orderStatus}
                >
                  <Grid item xs={12} md={2} lg={2} className={classes.stepped}>
                    <div className={classes.lineDot}>
                      <img src="./Images/e1.svg"></img>
                    </div>
                    <div className={classes.lineNew}>
                      <img
                        src="./Images/e2.svg"
                        className={classes.imgLine}
                      ></img>
                    </div>
                    {item && item.pickup && item.pickup[1] ? (
                      <>
                        <div className={classes.lineDot}>
                          <img src="./Images/e1.svg"></img>
                        </div>
                        <div className={classes.lineNew}>
                          <img
                            src="./Images/e2.svg"
                            className={classes.imgLine}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    {item && item.pickup && item.pickup[2] ? (
                      <>
                        <div className={classes.lineDot}>
                          <img src="./Images/e1.svg"></img>
                        </div>
                        <div className={classes.lineNew}>
                          <img
                            src="./Images/e2.svg"
                            className={classes.imgLine}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    <div className={classes.lineDot}>
                      <img src="./Images/e1.svg"></img>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={10} lg={10} className={classes.ddpick}>
                    <span className={classes.lpick}>
                      <b>Pickup Address</b>{" "}
                    </span>
                    <br />
                    {item && item.pickup && item.pickup[0] ? (
                        <Typography sx={{paddingLeft: "10px", wordWrap: 'break-word'}}>{item.pickup[0].pickup_location}&nbsp;</Typography>
                      // <span className={classes.lpickData}>
                        // {" "}
                        
                        // {/* {item &&
                        // item.pickup &&
                        // item.pickup[0] &&
                        // item.pickup[0].pickup_status &&
                        // item.pickup[0].pickup_status === "pickedup" ? (
                        //   <img className="tick" src="./Images/check.png"></img>
                        // ) : (
                        //   <></>
                        // )} */}
                      // </span>
                    ) : (
                      <></>
                    )}
                    &nbsp;
                    <br /> <br />
                    {item && item.pickup && item.pickup[1] ? (
                      <>
                        <span className={classes.lpick}>
                          <b>Pickup Point 1 Address</b>{" "}
                        </span>

                        <br />
                        {item && item.pickup && item.pickup[1] ? (
                          <span className={classes.lpickData}>
                            {" "}
                            {item.pickup[1].pickup_location}
                            {/* {item &&
                            item.pickup &&
                            item.pickup[1] &&
                            item.pickup[1].pickup_status &&
                            item.pickup[1].pickup_status === "pickedup" ? (
                              <img
                                className="tick"
                                src="./Images/check.png"
                              ></img>
                            ) : (
                              <></>
                            )} */}
                          </span>
                        ) : (
                          <></>
                        )}

                        <br />
                        <br />
                      </>
                    ) : (
                      <></>
                    )}
                    {item && item.pickup && item.pickup[2] && item.pickup[2] ? (
                      <>
                        <span className={classes.lpick}>
                          <b>Pickup Point 2 Address</b>{" "}
                        </span>

                        <br />
                        {item && item.pickup && item.pickup[2] ? (
                          <span className={classes.lpickData}>
                            {item.pickup[2].pickup_location}
                            {/* {item &&
                            item.pickup &&
                            item.pickup[2] &&
                            item.pickup[2].pickup_status &&
                            item.pickup[2].pickup_status === "pickedup" ? (
                              <span>
                                {" "}
                                <img
                                  className="tick"
                                  src="./Images/check.png"
                                ></img>
                              </span>
                            ) : (
                              <></>
                            )} */}
                          </span>
                        ) : (
                          <></>
                        )}

                        <br />
                        <br />
                      </>
                    ) : (
                      <></>
                    )}
                    <span className={classes.dpick}>
                      {" "}
                      <b>Delivery Address</b>
                    </span>{" "}
                    <br />
                    <Typography sx={{paddingLeft: "10px", wordWrap: 'break-word'}}>{item.delivery[0].delivery_location} &nbsp;</Typography>
                    {/* <span className={classes.dpickData}> */}
                      
                       {/* {item.delivery[0].delivery_status === "delivered" ? (
                          <img className="tick" src="./Images/check.png"></img>
                        ):(<></>)}  */}
                        {/* &nbsp; */}
                    {/* </span> */}
                    <br />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={4}
                  className={classes.stepperDownload}
                >
                  <img
                    src="./Images/courier_profile_pic.png"
                    className={classes.userIcon}
                    width={70}
                    height={70}
                    alt="user"
                  />
                  {!btn ? (
                    <div title="DOWNLOAD">
                      <button
                        onClick={()=>createInvoice(item._id)}
                        className={classes.btnInvoice}
                      >
                        View
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </Grid>
              </Grid>
            </Box>):(<></>)}

            {item.order_status === "Cancelled" && valueInvoice === "cancelled" ? (
            <Box className={classes.deliveryIn}>
              {" "}
              <Grid
                item
                container
                xs={12}
                md={12}
                lg={12}
                className={classes.stepperIn}
              >
                <Grid xs>
                  <p className={classes.stepperItem}>
                    Status :{" "}
                    <span className={classes.stepperBold}>
                      {item.order_status}
                    </span>
                  </p>
                </Grid>
                {item.order_id ? (
                  <Grid xs>
                    <p className={classes.stepperItem}>
                      Order ID :{" "}
                      <span className={classes.stepperBold}>
                        {item.order_id}
                      </span>
                    </p>
                  </Grid>
                ) : (
                  <></>
                )}

                {item &&
                item.delivery_type !== "accompaniment" &&
                item.delivery_type !== "accompainmentschedulelater" &&
                item.product_info &&
                item.product_info.length ? (
                  <Grid xs>
                    <p className={classes.stepperItem}>
                      Total Item(s) :{" "}
                      <span className={classes.stepperBold}>
                        {item.product_info.length}
                      </span>
                    </p>
                  </Grid>
                ) : (
                  <></>
                )}
                {item &&
                (item.delivery_type === "accompaniment" ||
                  item.delivery_type === "accompainmentschedulelater") &&
                item.total_time_taken ? (
                  <Grid xs>
                    <p className={classes.stepperItem}>
                      Total time taken :{" "}
                      <span className={classes.stepperBold}>
                        {item.total_time_taken}{" "}
                      </span>
                    </p>
                  </Grid>
                ) : (
                  <></>
                )}
                <Grid xs>
                  <p className={classes.stepperItem}>
                    <span className={classes.stepperBold}>
                      Total Price : {item.estimatedPrice} AED
                    </span>
                  </p>
                </Grid>
              </Grid>
              <Grid
                container
                className={classes.invoiceContent}
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={8}
                  className={classes.orderStatus}
                >
                  <Grid item xs={12} md={2} lg={2} className={classes.stepped}>
                    <div className={classes.lineDot}>
                      <img src="./Images/e1.svg"></img>
                    </div>
                    <div className={classes.lineNew}>
                      <img
                        src="./Images/e2.svg"
                        className={classes.imgLine}
                      ></img>
                    </div>
                    {item && item.pickup && item.pickup[1] ? (
                      <>
                        <div className={classes.lineDot}>
                          <img src="./Images/e1.svg"></img>
                        </div>
                        <div className={classes.lineNew}>
                          <img
                            src="./Images/e2.svg"
                            className={classes.imgLine}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    {item && item.pickup && item.pickup[2] ? (
                      <>
                        <div className={classes.lineDot}>
                          <img src="./Images/e1.svg"></img>
                        </div>
                        <div className={classes.lineNew}>
                          <img
                            src="./Images/e2.svg"
                            className={classes.imgLine}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    <div className={classes.lineDot}>
                      <img src="./Images/e1.svg"></img>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={10} lg={10} className={classes.ddpick}>
                    <span className={classes.lpick}>
                      <b>Pickup Address</b>{" "}
                    </span>
                    <br />
                    {item && item.pickup && item.pickup[0] ? (
                      <span className={classes.lpickData}>
                        {" "}
                        {item.pickup[0].pickup_location}&nbsp;
                        {item &&
                        item.pickup &&
                        item.pickup[0] &&
                        item.pickup[0].pickup_status &&
                        item.pickup[0].pickup_status === "pickedup" ? (
                          <img className="tick" src="./Images/check.png"></img>
                        ) : (
                          <></>
                        )}
                      </span>
                    ) : (
                      <></>
                    )}
                    &nbsp;
                    <br /> <br />
                    {item && item.pickup && item.pickup[1] ? (
                      <>
                        <span className={classes.lpick}>
                          <b>Pickup Point 1 Address</b>{" "}
                        </span>

                        <br />
                        {item && item.pickup && item.pickup[1] ? (
                          <span className={classes.lpickData}>
                            {" "}
                            {item.pickup[1].pickup_location}
                            {item &&
                            item.pickup &&
                            item.pickup[1] &&
                            item.pickup[1].pickup_status &&
                            item.pickup[1].pickup_status === "pickedup" ? (
                              <img
                                className="tick"
                                src="./Images/check.png"
                              ></img>
                            ) : (
                              <></>
                            )}
                          </span>
                        ) : (
                          <></>
                        )}

                        <br />
                        <br />
                      </>
                    ) : (
                      <></>
                    )}
                    {item && item.pickup && item.pickup[2] && item.pickup[2] ? (
                      <>
                        <span className={classes.lpick}>
                          <b>Pickup Point 2 Address</b>{" "}
                        </span>

                        <br />
                        {item && item.pickup && item.pickup[2] ? (
                          <span className={classes.lpickData}>
                            {item.pickup[2].pickup_location}
                            {item &&
                            item.pickup &&
                            item.pickup[2] &&
                            item.pickup[2].pickup_status &&
                            item.pickup[2].pickup_status === "pickedup" ? (
                              <span>
                                {" "}
                                <img
                                  className="tick"
                                  src="./Images/check.png"
                                ></img>
                              </span>
                            ) : (
                              <></>
                            )}
                          </span>
                        ) : (
                          <></>
                        )}

                        <br />
                        <br />
                      </>
                    ) : (
                      <></>
                    )}
                    <span className={classes.dpick}>
                      {" "}
                      <b>Delivery Address</b>
                    </span>{" "}
                    <br />
                    <span className={classes.dpickData}>
                      {item.delivery[0].delivery_location} &nbsp;
                    </span>
                    <br />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={4}
                  className={classes.stepperDownload}
                >
                  <img
                    src="./Images/courier_profile_pic.png"
                    className={classes.userIcon}
                    width={70}
                    height={70}
                    alt="user"
                  />
                  {!btn ? (
                    <div title="DOWNLOAD">
                      <button
                        onClick={()=>createInvoiceCancelled(item._id)}
                        className={classes.btnInvoice}
                      >
                        View
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </Grid>
              </Grid>
            </Box>):(<></>)}
           
          </>
        ))
      ) : (
        <></>
      )}
       <div id="admin">
 {valueInvoice === "all" ? (
          <>
          <Box className={classes.deliveryIn}>
          {invoiceData ? (
            <div >
              <Grid container ref={ref} className={classes.Invoiced}>
                <Grid
                  item
                  container
                  xs={12}
                  md={12}
                  lg={12}
                  className={classes.stepperIn}
                >
                  <Grid container xs={1.5} md={1.5} lg={1.5}>
                    <img src="./Images/jif123.png" className="logoIn"></img>
                  </Grid>
                  <Grid
                    container
                    display="flex"
                    justify="flex-end"
                    xs={0.5}
                    md={0.5}
                    lg={0.5}
                    className="boldIn"
                  ></Grid>
                  <Grid
                    container
                    display="flex"
                    justify="flex-end"
                    xs={10}
                    md={10}
                    lg={10}
                    className="boldIn"
                  >
                   CONSOLIDATED INVOICE
                  </Grid>

                  <Grid container xs={12} md={12} lg={12}>
                    <div className="head"> Jiffy Delivery Services Est. </div>
                  </Grid>
                  <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={6} md={6} lg={6}>
                      <div className={classes.sec1}>
                        <Grid xs={12} md={4} lg={4}>
                          <span className="subtitle">Street Address</span>
                        </Grid>
                        <Grid
                          xs={12}
                          md={0.5}
                          lg={0.5}
                          className={classes.colon}
                        >
                          <span>:</span>
                        </Grid>
                        <Grid xs={12} md={8} lg={8}>
                          {invoiceData && invoiceData.street_address ? (
                            <span className="subValue">
                              {invoiceData.street_address}
                            </span>
                          ) : (
                            <></>
                          )}
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={6} md={6} lg={6}>
                      <div className={classes.sec1}>
                        <Grid xs={12} md={4} lg={4}>
                          <span className="subtitle">City, P.O. Box</span>
                        </Grid>
                        <Grid
                          xs={12}
                          md={0.5}
                          lg={0.5}
                          className={classes.colon}
                        >
                          <span>:</span>
                        </Grid>
                        <Grid xs={12} md={8} lg={8}>
                          {invoiceData && invoiceData.city ? (
                            <span className="subValue">
                              {invoiceData.city}
                            </span>
                          ) : (
                            <></>
                          )}
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={6} md={6} lg={6}>
                      <div className={classes.sec1}>
                        <Grid xs={12} md={4} lg={4}>
                          <span className="subtitle">Phone</span>
                        </Grid>
                        <Grid
                          xs={12}
                          md={0.5}
                          lg={0.5}
                          className={classes.colon}
                        >
                          <span>:</span>
                        </Grid>
                        <Grid xs={12} md={8} lg={8}>
                          <span className="subValue">
                            {invoiceData.phone}
                          </span>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={4} md={4} lg={4}>
                      <br />
                      <br />
                      <div className={classes.blueSec}>
                        <span className={classes.whiteSec}>
                          <b>Bill To</b>
                        </span>
                      </div>
                      </Grid>
                      {invoiceData.bill_info ? (
                        <>
                       
                          <Grid container xs={12} md={12} lg={12}>
                          
                              <div className={classes.sec1}>
                              <span className="subValue">
                              Newland Chase Immigration Limited - Dubai
                              </span>
                              </div>
                            
                          </Grid>
                       
                         
                        </>
                      ) : (
                        <></>
                      )}
                    
                    <Grid item xs={1} md={1} lg={1}>
                      <br />
                      <br />
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                   
                    
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <br />
                      <br />
                      <div className={classes.blueSecDesc1}>
                      <Grid item xs={1} md={1} lg={1}>
                          <span className={classes.whiteSec}>
                            <b>Date</b>
                          </span>
                        </Grid>
                        <Grid item xs={2} md={2} lg={2}>
                          <span className={classes.whiteSec}>
                            <b>Applicant Name</b>
                          </span>
                        </Grid>
                        <Grid item xs={2} md={2} lg={2}>
                          <span className={classes.whiteSec}>
                            <b>Immigo No.</b>
                          </span>
                        </Grid>
                        <Grid item xs={1.5} md={1.5} lg={1.5}>
                          <span className={classes.whiteSec}>
                            <b>Consultant</b>
                          </span>
                        </Grid>
                        <Grid item xs={2} md={2} lg={2}>
                          <span className={classes.whiteSec}>
                            <b>Jiffy Invoice No.</b>
                          </span>
                        </Grid>
                        <Grid item xs={4} md={4} lg={4}>
                          <span className={classes.whiteSec}>
                            <b>Description</b>
                          </span>
                        </Grid>

                       
                        <Grid item xs={1} md={1} lg={1}>
                          <span className={classes.whiteSec}>
                            <b>Amount</b>
                          </span>
                        </Grid>
                      </div>
                      <div>
                        <Grid
                          item
                          xs={12}
                          md={12}
                          lg={12}
                          className={classes.documentContainer}
                        >
                          {invoiceData !== undefined &&
                          invoiceData.order_info !== undefined ? (
                            invoiceData.order_info.map((item, index) => (
                              <div className={classes.whiteSecDesc}>
                             
                                {item && item.price ? (
                                  item.price.map((priced) => (
                                    <>
                                    <Grid item xs={1} md={1} lg={1}>
                                    <b className="headValue">
                                          {moment(item.date).format("DD/MM/YY")}
                                        </b>
                        </Grid>
                        <Grid item xs={2} md={2} lg={2} sx={{textAlign:"center !important"}}>
                        <b className="headValue">
                                          {item.applicant_name}
                                        </b>
                        </Grid>
                        <Grid item xs={2} md={2} lg={2} sx={{textAlign:"center !important"}}>
                        <b className="headValue">
                                          {item.immigo_id}
                                        </b>
                        </Grid>
                        <Grid item xs={1.5} md={1.5} lg={1.5}>
                        <b className="headValue">
                                          {item.consultant_name}
                                        </b>
                        </Grid>
                        <Grid item xs={2} md={2} lg={2}>
                        <b className="headValue">
                                          {item.invoice_no}
                                        </b>
                        </Grid>
                        <Grid item xs={4} md={4} lg={4}>
                        <b className="headValue">
                                          {item.description}
                                        </b>
                        </Grid>
                        <Grid item xs={1} md={1} lg={1} sx={{textAlign:"end !important"}}>
                        <b className="headValue">
                                          {priced.price}
                                        </b>
                        </Grid>
                                      
                                    </>
                                  ))
                                ) : (
                                  <></>
                                )}
                              </div>
                            ))
                          ) : (
                            <></>
                          )}

                          {/*<Table sx={{ minWidth: 650 }} aria-label="simple table" className={classes.documentTable}>
                                 
                                  <TableBody>
                                     
                                          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                              <TableCell component="th" scope="row" className={classes.tableCellItem}>1</TableCell>
                                              <TableCell align="left" className={classes.tableCellItem}>ggf</TableCell>
                                              <TableCell align="left" className={classes.tableCellItem}>Passport</TableCell>
                                          </TableRow>
                                    
                                     
                                  </TableBody>
                  </Table>*/}
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <div className={classes.whiteSecDesc}>
                        <Grid item xs={3} md={3} lg={3}>
                          <span className="headIn">
                            <b>Total</b>
                          </span>
                        </Grid>
                        <Grid item xs={7} md={7} lg={7}>
                          <b className="headIn">
                            ({invoiceData.total_price_words}){" "}
                          </b>
                        </Grid>

                        <Grid item xs={2} md={2} lg={2}>
                          <span className="headIn">
                            <b>{invoiceData.total_price}&nbsp;</b>AED
                          </span>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <div className="stamp">
                        <span className={classes.stamped}>
                          For Jiffy Delivery Services Est.
                        </span>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <br />

                      <div className="stamp">
                        <span>
                          <img src="./Images/stamp.svg"></img>
                        </span>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <div className="thanku">
                        <span className={classes.thanked}>
                          Thank You for Your Business!
                        </span>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ) : (
            <></>
          )}
        </Box>
           <Grid item xs={12} md={12} lg={12} className={classes.stepperFoot}>
            <button className={classes.modify}>
              <img src="./Images/printer.svg"></img>
              <span>&nbsp;Print Invoice</span>
            </button>
            <button className={classes.modify}>
              <img src="./Images/download.svg"></img>
              <span onClick={createPDFAdmin}>&nbsp;Download Invoice</span>
            </button>
            </Grid>
            </>
          ):(<></>)}</div>
    


          <div id="pdfIn">

   <Box className={classes.deliveryIn}>
          {invoiceDataSingle && valueInvoice === "view"? (
            <>
            <div>
              <Grid container ref={ref} className={classes.Invoiced}>
                <Grid
                  item
                  container
                  xs={12}
                  md={12}
                  lg={12}
                  className={classes.stepperIn}
                >
                  <Grid container xs={6} md={6} lg={6}>
                    <img src="./Images/jif123.png" className="logoIn"></img>
                  </Grid>
                  <Grid
                    container
                    display="flex"
                    justify="flex-end"
                    xs={2}
                    md={2}
                    lg={2}
                    className="boldIn"
                  ></Grid>
                  <Grid
                    container
                    display="flex"
                    justify="flex-end"
                    xs={4}
                    md={4}
                    lg={4}
                    className="boldIn"
                  >
                    INVOICE
                  </Grid>

                  <Grid container xs={12} md={12} lg={12}>
                    <div className="head"> Jiffy Delivery Services Est. </div>
                  </Grid>
                  <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={6} md={6} lg={6}>
                      <div className={classes.sec1}>
                        <Grid xs={12} md={4} lg={4}>
                          <span className="subtitle">Street Address</span>
                        </Grid>
                        <Grid
                          xs={12}
                          md={0.5}
                          lg={0.5}
                          className={classes.colon}
                        >
                          <span>:</span>
                        </Grid>
                        <Grid xs={12} md={8} lg={8}>
                          {invoiceDataSingle && invoiceDataSingle.street_address ? (
                            <span className="subValue">
                              {invoiceDataSingle.street_address}
                            </span>
                          ) : (
                            <></>
                          )}
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={6} md={6} lg={6}>
                      <div className={classes.sec1}>
                        <Grid xs={12} md={4} lg={4}>
                          <span className="subtitle">City, P.O. Box</span>
                        </Grid>
                        <Grid
                          xs={12}
                          md={0.5}
                          lg={0.5}
                          className={classes.colon}
                        >
                          <span>:</span>
                        </Grid>
                        <Grid xs={12} md={8} lg={8}>
                          {invoiceDataSingle && invoiceDataSingle.city ? (
                            <span className="subValue">
                              {invoiceDataSingle.city}
                            </span>
                          ) : (
                            <></>
                          )}
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={6} md={6} lg={6}>
                      <div className={classes.sec1}>
                        <Grid xs={12} md={4} lg={4}>
                          <span className="subtitle">Phone</span>
                        </Grid>
                        <Grid
                          xs={12}
                          md={0.5}
                          lg={0.5}
                          className={classes.colon}
                        >
                          <span>:</span>
                        </Grid>
                        <Grid xs={12} md={8} lg={8}>
                          <span className="subValue">
                            {invoiceDataSingle.phone}
                          </span>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={7} md={7} lg={7}>
                      <br />
                      <br />
                      <div className={classes.blueSec}>
                        <span className={classes.whiteSec}>
                          <b>Bill To</b>
                        </span>
                      </div>
                      {invoiceDataSingle.bill_info ? (
                        <>
                          <Grid container xs={12} md={12} lg={12}>
                            <Grid item xs={12} md={12} lg={12}>
                              <div className={classes.sec1}>
                                <Grid xs={4} md={4} lg={4}>
                                  <span className="subtitle">Name</span>
                                </Grid>
                                <Grid
                                  xs={12}
                                  md={0.5}
                                  lg={0.5}
                                  className={classes.colon}
                                >
                                  <span>:</span>
                                </Grid>
                                <Grid xs={12} md={6} lg={6}>
                                  {invoiceDataSingle.bill_info &&
                                  invoiceDataSingle.bill_info.name ? (
                                    <span className="subValue">
                                      {invoiceDataSingle.bill_info.name}
                                    </span>
                                  ) : (
                                    <></>
                                  )}
                                </Grid>
                              </div>
                            </Grid>
                          </Grid>

                          <Grid container xs={12} md={12} lg={12}>
                            <Grid item xs={12} md={12} lg={12}>
                              <div className={classes.sec1}>
                                <Grid xs={4} md={4} lg={4}>
                                  <span className="subtitle">
                                    Company Name
                                  </span>
                                </Grid>
                                <Grid
                                  xs={12}
                                  md={0.5}
                                  lg={0.5}
                                  className={classes.colon}
                                >
                                  <span>:</span>
                                </Grid>
                                <Grid xs={12} md={6} lg={6}>
                                <span className="subValue">
                                  {invoiceDataSingle.bill_info.company_name}
                                </span>
                                </Grid>
                              </div>
                            </Grid>
                          </Grid>
                          <Grid container xs={12} md={12} lg={12}>
                          <Grid item xs={12} md={12} lg={12}>
                              <div className={classes.sec1}>
                                <Grid xs={4} md={4} lg={4}>
                                  <span className="subtitle">
                                    Street Address
                                  </span>
                                </Grid>
                                <Grid
                                  xs={12}
                                  md={0.5}
                                  lg={0.5}
                                  className={classes.colon}
                                >
                                  <span>:</span>
                                </Grid>
                                <Grid xs={6} md={6} lg={6}>
                                  <span className="subValue">
                                    {invoiceDataSingle.bill_info.street_address}
                                  </span>
                                </Grid>
                              </div>
                           </Grid>
                          </Grid>
                          <Grid container xs={12} md={12} lg={12}>
                            <Grid item xs={12} md={12} lg={12}>
                              <div className={classes.sec1}>
                                <Grid xs={4} md={4} lg={4}>
                                  <span className="subtitle">
                                    City, P.O. Box
                                  </span>
                                </Grid>
                                <Grid
                                  xs={12}
                                  md={0.5}
                                  lg={0.5}
                                  className={classes.colon}
                                >
                                  <span>:</span>
                                </Grid>
                                <Grid xs={6} md={6} lg={6}>
                                  <span className="subValue">
                                    {invoiceDataSingle.bill_info.city}
                                  </span>
                                </Grid>
                              </div>
                            </Grid>
                          </Grid>
                          <Grid container xs={12} md={12} lg={12}>
                            <Grid item xs={12} md={12} lg={12}>
                              <div className={classes.sec1}>
                                <Grid xs={4} md={4} lg={4}>
                                  <span className="subtitle">Phone</span>
                                </Grid>
                                <Grid
                                  xs={12}
                                  md={0.5}
                                  lg={0.5}
                                  className={classes.colon}
                                >
                                  <span>:</span>
                                </Grid>
                                <Grid xs={6} md={6} lg={6}>
                                  <span className="subValue">
                                    {invoiceDataSingle.bill_info.phone}
                                  </span>
                                </Grid>
                              </div>
                            </Grid>
                          </Grid>
                          <Grid container xs={12} md={12} lg={12}>
                            <Grid item xs={12} md={12} lg={12}>
                              <div className={classes.sec1}>
                                <Grid xs={4} md={4} lg={4}>
                                  <span className="subtitle">
                                    Email Address
                                  </span>
                                </Grid>
                                <Grid
                                  xs={12}
                                  md={0.5}
                                  lg={0.5}
                                  className={classes.colon}
                                >
                                  <span>:</span>
                                </Grid>
                                <Grid xs={6} md={6} lg={6}>
                                  <span className="subValue">
                                    {invoiceDataSingle.bill_info.email}
                                  </span>
                                </Grid>
                              </div>
                            </Grid>
                          </Grid>
                        </>
                      ) : (
                        <></>
                      )}
                    </Grid>
                    <Grid item xs={1} md={1} lg={1}>
                      <br />
                      <br />
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                      <br />
                      <br />
                      <div className={classes.blueSec}>
                        <Grid container xs={12} md={12} lg={12}>
                          <Grid item xs={6} md={6} lg={6}>
                            <span className={classes.whiteSec}>
                              <b>Invoice#</b>
                            </span>
                          </Grid>
                          <Grid item xs={6} md={6} lg={6}>
                            <span className={classes.whiteSec}>
                              <b>Date</b>
                            </span>
                          </Grid>
                        </Grid>
                        <br />
                        <br />
                        <Grid container xs={12} md={12} lg={12}>
                          <Grid item xs={6} md={6} lg={6}>
                            <span className="subValue">
                              {invoiceDataSingle.invoice_no}
                            </span>
                          </Grid>
                          <Grid item xs={6} md={6} lg={6}>
                            <span className="subValue">
                              {invoiceDataSingle.date}
                            </span>
                          </Grid>
                        </Grid>
                      </div>

                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <div className={classes.blueSec}>
                        <Grid container xs={12} md={12} lg={12}>
                          {/*<Grid item xs={6} md={6} lg={6}>
                            <span className={classes.whiteSec}>
                              <b>Customer ID</b>
                            </span>
                      </Grid>*/}
                          <Grid item xs={6} md={6} lg={6}>
                            <span className={classes.whiteSec}>
                              <b>Immigo Case No</b>
                            </span>
                          </Grid>
                        </Grid>
                        <br />
                        <br />

                        <Grid container xs={12} md={12} lg={12}>
                         {/*} <Grid item xs={6} md={6} lg={6}>
                            <span className="subValue"></span>
                          </Grid>*/}
                          <Grid item xs={6} md={6} lg={6}>
                            <span className="subValue">
                            {invoiceDataSingle.order_info && invoiceDataSingle.order_info[0] && invoiceDataSingle.order_info[0].immigo_id ?  invoiceDataSingle.order_info[0].immigo_id :"NIL"}
                            </span>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <br />
                      <br />
                      <div className={classes.blueSecDesc}>
                        <Grid item xs={7} md={7} lg={7}>
                          <span className={classes.whiteSec}>
                            <b>Description</b>
                          </span>
                        </Grid>
                        <Grid item xs={2} md={2} lg={2}>
                          <span className={classes.whiteSec}>
                           {/*} <b>Unit</b>*/}
                          </span>
                        </Grid>
                        <Grid item xs={2} md={2} lg={2}>
                          <span className={classes.whiteSec}>
                            <b>Amount</b>
                          </span>
                        </Grid>
                      </div>
                      <div>
                        <Grid
                          item
                          xs={12}
                          md={12}
                          lg={12}
                          className={classes.documentContainer}
                        >
                          {invoiceDataSingle !== undefined &&
                          invoiceDataSingle.order_info !== undefined ? (
                            invoiceDataSingle.order_info.map((item, index) => (
                              <div className={classes.whiteSecDesc}>
                                <Grid item xs={7} md={7} lg={7}>
                                  <b className="headIn">
                                    {item.description}
                                  </b>
                                </Grid>
                                {item && item.price ? (
                                  item.price.map((priced) => (
                                    <>
                                      <Grid item xs={2} md={2} lg={2}>
                                       {/*} <b className="headValue">
                                          {priced.qty}
                                  </b>*/}
                                      </Grid>
                                      <Grid item xs={2} md={2} lg={2}>
                                        <b className="headValue">
                                          {priced.price}
                                        </b>
                                      </Grid>
                                    </>
                                  ))
                                ) : (
                                  <></>
                                )}
                              </div>
                            ))
                          ) : (
                            <></>
                          )}

                       
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <div className={classes.whiteSecDesc}>
                        <Grid item xs={3} md={3} lg={3}>
                          <span className="headIn">
                            <b>Total</b>
                          </span>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                          <b className="headIn">
                            ({invoiceDataSingle.total_price_words}){" "}
                          </b>
                        </Grid>

                        <Grid item xs={3} md={3} lg={3}>
                          <span className="headIn">
                            <b>{invoiceDataSingle.total_price}&nbsp;</b>AED
                          </span>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <div className="stamp">
                        <span className={classes.stamped}>
                          For Jiffy Delivery Services Est.
                        </span>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <br />

                      <div className="stamp">
                        <span>
                          <img src="./Images/stamp.svg"></img>
                        </span>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <div className="thanku">
                        <span className={classes.thanked}>
                          Thank You for Your Business!
                        </span>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
              <Grid item xs={12} md={12} lg={12} className={classes.stepperFoot}>
              <button className={classes.modify}>
                <img src="./Images/printer.svg"></img>
                <span>&nbsp;Print Invoice</span>
              </button>
              <button className={classes.modify}>
                <img src="./Images/download.svg"></img>
                <span onClick={createPDFIn}>&nbsp;Download Invoice</span>
              </button>
              </Grid>
              </>
          ) : (
            <></>
          )}
        </Box>
        </div>


        
         {/*} <Grid item xs={12} md={12} lg={12} className={classes.stepperFoot}>
            <button className={classes.modify}>
              <img src="./Images/printer.svg"></img>
              <span>&nbsp;Print Invoice</span>
            </button>
            <button className={classes.modify}>
              <img src="./Images/download.svg"></img>
              <span onClick={createPDFIn}>&nbsp;Download Invoice</span>
            </button>
            </Grid>*/}
     
     

      {/*}  <div className="center2">
            <div class="loader"></div>
                </div>*/}
    </>
  );
};

export default withStyles(TrackorderStyle)(AllInvoice);

{
  /* <Grid
                    item
                    container
                    xs={12}
                    md={12}
                    lg={12}
                    className={classes.stepperIn}
                  >
                    <Grid xs>
                      <p className={classes.stepperItem}>
                        Status :{" "}
                        <span className={classes.stepperBold}>
                          {item.order_status}
                        </span>
                      </p>
                    </Grid>
                    {item.order_id ? (
                      <Grid xs>
                        <p className={classes.stepperItem}>
                          Order ID :{" "}
                          <span className={classes.stepperBold}>
                            {item.order_id}
                          </span>
                        </p>
                      </Grid>
                    ) : (
                      <></>
                    )}

                    {item &&
                    item.delivery_type !== "accompaniment" &&
                    item.delivery_type !== "accompainmentschedulelater" &&
                    item.product_info &&
                    item.product_info.length ? (
                      <Grid xs>
                        <p className={classes.stepperItem}>
                          Total Item(s) :{" "}
                          <span className={classes.stepperBold}>
                            {item.product_info.length}
                          </span>
                        </p>
                      </Grid>
                    ) : (
                      <></>
                    )}
                    {item &&
                    (item.delivery_type === "accompaniment" ||
                      item.delivery_type === "accompainmentschedulelater") &&
                    item.total_time_taken ? (
                      <Grid xs>
                        <p className={classes.stepperItem}>
                          Total time taken :{" "}
                          <span className={classes.stepperBold}>
                            {item.total_time_taken}{" "}
                          </span>
                        </p>
                      </Grid>
                    ) : (
                      <></>
                    )}
                    <Grid xs>
                      <p className={classes.stepperItem}>
                        <span className={classes.stepperBold}>
                          Total Price : {item.estimatedPrice} AED
                        </span>
                      </p>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className={classes.invoiceContent}
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={12}
                      md={4}
                      lg={8}
                      className={classes.orderStatus}
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
                        {item && item.pickup && item.pickup[1] ? (
                          <>
                            <div className={classes.lineDot}>
                              <img src="./Images/e1.svg"></img>
                            </div>
                            <div className={classes.lineNew}>
                              <img
                                src="./Images/e2.svg"
                                className={classes.imgLine}
                              ></img>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {item && item.pickup && item.pickup[2] ? (
                          <>
                            <div className={classes.lineDot}>
                              <img src="./Images/e1.svg"></img>
                            </div>
                            <div className={classes.lineNew}>
                              <img
                                src="./Images/e2.svg"
                                className={classes.imgLine}
                              ></img>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
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
                      >
                        <span className={classes.lpick}>
                          <b>Pickup Address</b>{" "}
                        </span>
                        <br />
                        {item && item.pickup && item.pickup[0] ? (
                          <span className={classes.lpickData}>
                            {" "}
                            {item.pickup[0].pickup_location}&nbsp;
                            {item &&
                            item.pickup &&
                            item.pickup[0] &&
                            item.pickup[0].pickup_status &&
                            item.pickup[0].pickup_status === "pickedup" ? (
                              <img
                                className="tick"
                                src="./Images/check.png"
                              ></img>
                            ) : (
                              <></>
                            )}
                          </span>
                        ) : (
                          <></>
                        )}
                        &nbsp;
                        <br /> <br />
                        {item && item.pickup && item.pickup[1] ? (
                          <>
                            <span className={classes.lpick}>
                              <b>Pickup Point 1 Address</b>{" "}
                            </span>

                            <br />
                            {item && item.pickup && item.pickup[1] ? (
                              <span className={classes.lpickData}>
                                {" "}
                                {item.pickup[1].pickup_location}
                                {item &&
                                item.pickup &&
                                item.pickup[1] &&
                                item.pickup[1].pickup_status &&
                                item.pickup[1].pickup_status === "pickedup" ? (
                                  <img
                                    className="tick"
                                    src="./Images/check.png"
                                  ></img>
                                ) : (
                                  <></>
                                )}
                              </span>
                            ) : (
                              <></>
                            )}

                            <br />
                            <br />
                          </>
                        ) : (
                          <></>
                        )}
                        {item &&
                        item.pickup &&
                        item.pickup[2] &&
                        item.pickup[2] ? (
                          <>
                            <span className={classes.lpick}>
                              <b>Pickup Point 2 Address</b>{" "}
                            </span>

                            <br />
                            {item && item.pickup && item.pickup[2] ? (
                              <span className={classes.lpickData}>
                                {item.pickup[2].pickup_location}
                                {item &&
                                item.pickup &&
                                item.pickup[2] &&
                                item.pickup[2].pickup_status &&
                                item.pickup[2].pickup_status === "pickedup" ? (
                                  <span>
                                    {" "}
                                    <img
                                      className="tick"
                                      src="./Images/check.png"
                                    ></img>
                                  </span>
                                ) : (
                                  <></>
                                )}
                              </span>
                            ) : (
                              <></>
                            )}

                            <br />
                            <br />
                          </>
                        ) : (
                          <></>
                        )}
                        <span className={classes.dpick}>
                          {" "}
                          <b>Delivery Address</b>
                        </span>{" "}
                        <br />
                        <span className={classes.dpickData}>
                          {item.delivery[0].delivery_location} &nbsp;
                       
                        </span>
                        <br />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={4}
                      lg={4}
                      className={classes.stepperDownload}
                    >
                      <img
                        src="./Images/demo-user.png"
                        className={classes.userIcon}
                        width={70}
                        height={70}
                        alt="user"
                      />
                      {!btn ? (
                        <div title="DOWNLOAD">
                          <button
                            onClick={createPDF}
                            className={classes.btnInvoice}
                          >
                            Download
                          </button>
                        </div>
                      ) : (
                        <></>
                      )}
                    </Grid>
                  </Grid>*/
}
