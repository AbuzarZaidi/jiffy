import { Grid } from '@material-ui/core'
import React from 'react'
import BasicNavbar from '../BasicNavbar'
import { withStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import AuthenticationStyle from "../../Styles/AuthenticationStyle";
import BottomNav from '../BottomNav'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Input, InputAdornment } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link, useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import Allservices from './Allservices';
import Services from '../Homepage/Services';
import Flow from '../Homepage/Flow';
import Purpose from '../Homepage/Purpose';
import AskedQuestions from '../Homepage/AskedQuestions';
import Footer from '../Homepage/Footer';
const ImgGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    // marginLeft: "20px",
    //  marginTop: "5px"
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "40px",
    display: 'flex',
    justifyContent: 'center',
  },
}));
const Image = styled('img')(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    maxWidth: "600px"
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "300px",

  },
}));
const ServiceOptions =(props) => {

  const { classes } = props;
  const navigate = useNavigate();
  function gotoDashboard(){
    navigate('/dashboard')
  }
  function gotoSendPackage(){
    navigate('/sendpackage')
  }
  function gotoCollectPackage(){
    navigate('/collectpackage')
  }
  function gotoAccompainment(){
    navigate('/accompainment')
  }
  function gotoDocument(){
   //navigate('/documentAttestation')
   //navigate('/commingsoon')
  }
  function gotoPersonel(){
    navigate('/personelised')
  }
  function gotoTrack(){
    navigate('/trackorder')
  }
  return (<>
  <BasicNavbar/>
  {/* <Grid container> 



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
</Grid> </Grid> */}
    <Grid container className={classes.coperate_start2}>
   
    <Grid container className={classes.ht}  >
  
        {/* <Grid item xs={6} md={6} lg={6} className={classes.allm}>
            <img className={classes.service_bg} src='./Images/nav.png'></img>
        </Grid> */}
         <ImgGrid item xs={12} md={6} lg={6} >
         <img className={classes.service_bg} src='./Images/nav.png'></img>
       {/* <Image src='./Images/nav.png' alt="bg" className='background-2' style={{marginLeft: "45px"}}>
       </Image> */}
        
       </ImgGrid>
         <Grid item xs={12} md={4} lg={4} className={classes.allm}>
         
          <div ><b className={classes.services_coperate_btn}>Corporate Login</b></div>
            <div  className={classes.services_welcome} style={{marginBottom:"20px"}}>Welcome</div><br/>
           <div className={classes.service_content} style={{marginBottom:"10px"}}>Kindly select from our services</div> 
           
            <div className={classes.Allservice}>
            
              <Button variant="contained" className={classes.service_btn} onClick={()=>gotoSendPackage()}><b>Send package</b><img className={classes.service_image} src='./Images/arrow-right-small.png'></img></Button>
              <Button variant="contained" className={classes.service_btn} onClick={()=>gotoCollectPackage()}><b>Collect package</b><img className={classes.service_image} src='./Images/arrow-right-small.png'></img></Button>
             <Button variant="secondary" className={classes.service_btn} onClick={()=>gotoAccompainment()}><b>Accompaniment</b><img className={classes.service_image} src='./Images/arrow-right-small.png'></img></Button>
              <Button variant="secondary" className={classes.service_btn} ><b>Document Attestation - MOFA(Coming Soon)</b><img className={classes.service_image} src='./Images/arrow-right-small.png'></img></Button>
              <Button variant="secondary" className={classes.service_btn} onClick={()=>gotoPersonel()}><b>Personalized Services</b><img className={classes.service_image} src='./Images/arrow-right-small.png'></img></Button>
            {/* --> <Button variant="secondary" className={classes.service_btn} onClick={()=>goto()}><b>Others</b><img className={classes.service_image} src='./Images/arrow-right-small.png'></img></Button> */}
              <Grid container>
              <Grid item xs={6} md={6} lg={6}>
              <Button fullWidth variant="secondary" className={classes.btn_dash} onClick={()=>gotoDashboard()}><b>Dashboard</b>&nbsp;<img  src='./Images/dash.svg'></img><img className={classes.service_img_dash} src='./Images/dashed.png'></img></Button>
              </Grid>
              <Grid item xs={6} md={6} lg={6}>
             <div className={classes.para_dash}> View todays order, orders completed, average time spent & more</div>
              </Grid>
              </Grid>
            {/* --> <Button variant="secondary" className={classes.service_btn} onClick={()=>gotoTrack()}><b>Track</b><img className={classes.service_image} src='./Images/arrow-right-small.png'></img></Button> */}
            </div>  
        </Grid> 


</Grid>
    </Grid>
    <Services></Services>
    <Flow></Flow>
    <Purpose></Purpose>
    <AskedQuestions></AskedQuestions>
    <Footer></Footer>
    <BottomNav/>
    </>
  )
}
export default withStyles(AuthenticationStyle)(ServiceOptions);
