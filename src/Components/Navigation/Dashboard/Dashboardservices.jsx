import React, { useEffect, forwardRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@mui/material";
import BasicNavbar from '../../Homepage/BasicNavbar'
import { styled } from "@mui/system";

import DashboardStyle from "./DashboardStyle";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot, collection } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";
import Footer from "../../Homepage/Footer";
import { Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import DatePicker from "react-datepicker";
import { InputAdornment, OutlinedInput } from "@mui/material";

// Icons.
import IconButton from "@mui/material/IconButton";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PieChartIcon from "@mui/icons-material/PieChart";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FilterListIcon from "@mui/icons-material/FilterList";

// Api.
import { getDashboardDetails } from "../../../api/apiManagement";

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
const CardBox = styled(Card)(({ theme }) => ({
   borderRadius: 4, boxShadow: "none",color:"#000000",
  [theme.breakpoints.down("lg")]: {
    borderRadius: 4, boxShadow: "none",color:"#131C4C"
  },
}));

const StaticTitles = {
  todaysOrder: (
    <>
      Today's Order
      <br /> (Active & Completed)
    </>
  ),
  currentMonth: (
    <>
      Current Months
      <br /> Order
    </>
  ),
  TotalOrderCompleted: (
    <>
      {" "}
      Total Orders
      <br /> Completed
    </>
  ),
  TotalOrderCancelled: (
    <>
      {" "}
      Total Orders
      <br /> Cancelled
    </>
  ),
  TotalItemsDelivered: (
    <>
      {" "}
      Total Items
      <br /> Delivered So far
    </>
  ),
  avgTimeSpend: (
    <>
      {" "}
      Average Time
      <br /> Covered
    </>
  ),
  avgDistCovered: (
    <>
      {" "}
      Average Distance
      <br /> Covered
    </>
  ),
  avgServiceRating: (
    <>
      {" "}
      Average Service
      <br /> Rating
    </>
  ),
};

const StatisticsCard = ({ icon, title, count, date }) => (
  <CardBox >
    <CardHeader
      sx={{ paddingBottom: 0 }}
      avatar={
        <Avatar sx={{ bgcolor: "#f4c430" }} variant="rounded">
          {icon ?? "R"}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <ShowChartIcon sx={{ color: blue[900] }} fontSize="large" />
        </IconButton>
      }
    />
    <CardContent sx={{ paddingTop: 1 }}>
      <Typography
        style={{ fontWeight: 100, fontSize: "1.2rem", color: "#686868" }}
      >
        {title ?? ""}
      </Typography>
      <Typography style={{ fontWeight: 800, fontSize: "2.2rem" }}>
        {count ?? 0}
      </Typography>
      <Hr></Hr>
      <Typography
        style={{ fontWeight: 100, fontSize: ".792rem", color: "#686868" }}
        mt={4}
      >
        {date ?? "Starting at 1st Jan 2022"}
      </Typography>
    </CardContent>
  </CardBox>
);

const Hr = styled("hr")`
  border: 0;
  min-height: 0.5px;
  background-color: #686868;
  opacity: 0.6;
  margin-bottom: 10px;
`;

const green = {
  500: "#000000",
};

const grey = {
  300: "#f2f2f2",
  400: "#BFC7CF",
  500: "#AAB4BE",
  600: "#6F7E8C",
};

const DateRangeCustomInput = forwardRef(({ value, onClick, classes }, ref) => (
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
const Trackorder = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = React.useState(null);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

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
  React.useEffect(() => {
    getDashboardData();
  }, []);

  const { classes } = props;

  const onChangeDate = (dates) => {
    try {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    } catch (error) {
      console.log(error);
    }
  };

  // Get dashboard data.
  const getDashboardData = async () => {
    try {
      const USER_ID = "62e10e1173af1824dc156ffe";
      let response = await getDashboardDetails(USER_ID);
      if (response && response.data.status === "success") {
        setData(response.data.data);
      } else {
        setData(null);
      }
    } catch (error) {
      console.log(error);
    }
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

  const StatisticsStyle = styled(Box)`
    background-color: ${grey[300]};
    border-radius: 10px;
    padding: 24px 24px 24px 24px;
  `;

  return (
    <>
    <BasicNavbar/>
      {/* <Allservices></Allservices> */}
      <Grid container className={classes.section_start}  >
        <Grid container className={classes.newbg}>
          <Grid container className={classes.dashedWidth}>

            <Container maxWidth="xl">
              <Grid container className={classes.ht}>
              <Grid item xs={5} md={2} lg={2}>
                <div className={classes.heading}>
                  <h2>
              {/*}  <ArrowBackIcon onClick={goMenu}></ArrowBackIcon>*/}
              Dashboard
                  </h2>
                </div>
              </Grid>
              <Grid  item xs={7} md={10} lg={10}  >
                <div className={classes.send_header}>
                  <ColoredLine color='#131C4C' />
                </div>
              </Grid>
            </Grid>

              <Grid container justifyContent='space-around' alignItems='right' mb={2} className={classes.ht}>
              <Grid item xs={12} md={12} lg={12} className={classes.filterContainer} textAlign='right'>
              
                <FilterListIcon />
                <p className={classes.filterText}>Filter by</p>
                
                <DatePicker
                  selected={startDate}
                  onChange={onChangeDate}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  customInput={<DateRangeCustomInput {...props} />}
                  calendarClassName={classes.calender}
                 
                />
              </Grid>
            </Grid>
              <StatisticsStyle className={classes.ht} >
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3}>
                  <StatisticsCard icon={<FormatListNumberedIcon />} title={StaticTitles.todaysOrder} count={data?.todays_order ?? 0}></StatisticsCard>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <StatisticsCard icon={<PieChartIcon />} title={StaticTitles.currentMonth} count={data?.current_month_order ?? 0}></StatisticsCard>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <StatisticsCard
                    icon={<TaskAltIcon />}
                    title={StaticTitles.TotalOrderCompleted}
                    count={data?.total_orders_completed ?? 0}
                  ></StatisticsCard>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <StatisticsCard
                    icon={<CancelIcon />}
                    title={StaticTitles.TotalOrderCancelled}
                    count={data?.total_orders_cancelled ?? 0}
                  ></StatisticsCard>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <StatisticsCard
                    icon={<PlaylistAddCheckIcon />}
                    title={StaticTitles.TotalItemsDelivered}
                    count={data?.total_item_delevered_so_far ?? 0}
                  ></StatisticsCard>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <StatisticsCard icon={<AccessTimeIcon />} title={StaticTitles.avgTimeSpend} count={data?.average_time_spent ?? 0}></StatisticsCard>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <StatisticsCard
                    icon={<AccessTimeIcon />}
                    title={StaticTitles.avgDistCovered}
                    count={data?.average_distance_covered ?? 0}
                  ></StatisticsCard>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <StatisticsCard
                    icon={<StarOutlineIcon />}
                    title={StaticTitles.avgServiceRating}
                    count={data?.average_service_rating ?? 0}
                  ></StatisticsCard>
                </Grid>
              </Grid>
            </StatisticsStyle>
            </Container>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12} lg={12}>
          <div className='footed'>
            <Footer></Footer>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default withStyles(DashboardStyle)(Trackorder);
