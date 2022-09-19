import { Grid } from '@material-ui/core'
import React from 'react'
import BasicNavbar from '../Homepage/BasicNavbar'
import { withStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from 'react-redux';
import AuthenticationStyle from "../../Styles/AuthenticationStyle";
import { styled } from "@mui/material/styles";
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
import Allservices from './ModifyPage.jsx/AllservicesModify';
import Services from '../Homepage/Services';
import Flow from '../Homepage/Flow';
import Purpose from '../Homepage/Purpose';
import AskedQuestions from '../Homepage/AskedQuestions';
import Footer from '../Homepage/Footer';

const ImgGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    marginLeft: "50px", marginTop: "5px"
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "40px",
    display: 'flex',
    justifyContent: 'center',
  },
}));
const Image = styled('img')(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    maxWidth: "555px"
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
    navigate('/documentAttestation')
  }
  function gotoTrack(){
    navigate('/trackorder')
  }
  return (<>
    
  
    <BasicNavbar/>
    <Grid container className={classes.coperate_start2}>
    <Grid container className={classes.ht}  >
        {/* <Grid item xs={6} md={6} lg={6} className={classes.allm}>
            <img className={classes.service_bg} src='./Images/nav.png'></img>
        </Grid> */}
         <ImgGrid item xs={12} md={6} lg={6} >
       
       <Image src='./Images/nav.png' alt="bg" className='background-2' style={{marginLeft: "0px"}}>
       </Image>
        
       </ImgGrid>
         <Grid item xs={12} md={4} lg={4} className={classes.allm}>
         
          <div ><b className={classes.services_coperate_btn}>Corporate Login</b></div>
            <div  className='service_welcome'>Welcome</div><br/>
           <div className='service_content'>Kindly select from our services</div> 
           
            <div className={classes.Allservice}>
            
              <Button variant="contained" className={classes.service_btn} onClick={()=>gotoSendPackage()}><b>Send package</b><img className={classes.service_image} src='./Images/arrow-right-small.png'></img></Button>
              <Button variant="contained" className={classes.service_btn} onClick={()=>gotoCollectPackage()}><b>Collect package</b><img className={classes.service_image} src='./Images/arrow-right-small.png'></img></Button>
             <Button variant="secondary" className={classes.service_btn} onClick={()=>gotoAccompainment()}><b>Accompaniment</b><img className={classes.service_image} src='./Images/arrow-right-small.png'></img></Button>
              <Button variant="secondary" className={classes.service_btn} onClick={()=>gotoDocument()}><b>Document Attestation - MOFA</b><img className={classes.service_image} src='./Images/arrow-right-small.png'></img></Button>
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
    </>
  )
}
export default withStyles(AuthenticationStyle)(ServiceOptions);
