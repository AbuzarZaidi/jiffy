import { ClassNames } from '@emotion/react'
import { Button, Grid } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";
import React from 'react'
import AuthenticationStyle from '../../../Styles/AuthenticationStyle';
import { Carousel } from 'react-responsive-carousel';



const Footer = (props) =>{
    const { classes } = props;
   
    
  return (
    <Grid container className={classes.footer_back}>
         <Grid container className={classes.ht}  >
        <Grid item xs={12} md={12} lg={12} >
           <div className={classes.footer_head}> <img  src='../Images/jfoot.png'></img></div>
        </Grid>
        <Grid itemxs={12} md={12} lg={12} className={classes.services_desc}>
        
            <Grid item xs={12} md={2} lg={2} className={classes.footer_desc1}>
                <b className={classes.footer_desc}>About us</b><br/>
                <span className={classes.descfot}>Jiffy is an online delivery platform that provides hassle free pick-up and delivery services to your business organization at all times. This service caters to all your day-to day needs, be it delivery of packages, getting your documents signed, attested, or even dropped off to your client locations, by applying the most secure and sophisticated practices to carry out this service. </span><br/>
               <p className={classes.iconed}> <img className={classes.footer_img} src='../Images/f1.svg'></img>&nbsp;&nbsp;&nbsp;
                <img className={classes.footer_img} src='../Images/f2.svg'></img>&nbsp;&nbsp;&nbsp;
                <img  className={classes.footer_img} src='../Images/f3.svg'></img></p>
            </Grid>
            <Grid item xs={12} md={1} lg={1} className={classes.footer_desc1}>
              </Grid>
            <Grid item xs={12} md={2} lg={2} className={classes.footer_desc}>
            <b>Location</b><br/>
            <b>Abu Dhabi</b><br/>
             <b>Dubai</b> <br/>
             <b>Sharjah</b><br/>
              <b>Fujairah</b><br/>
               <b>Ajman</b><br/>
               <b>Ras Al-Khaimah</b> <br/>
               <b>Umm Al Quwain</b>
            </Grid>
            
            <Grid item md={2} lg={2} className={classes.footer_desc}>
            <b>Our Services</b> <br/>
           <b>Send Package</b> <br/>
            <b>Collect Package</b> <br/>
            <b>Accompaniment</b>  <br/>
              <b>Document Attestation</b> 
            </Grid>
            
            <Grid item md={4} lg={4} className={classes.footer_desc}>
                <b>Reach Us At</b><br/>
                <div className={classes.small}><img src='../Images/emailf.svg' className={classes.footer_img_small}></img><div className={classes.smallContent}> info@jiffy.ae and support@jiffy.ae</div></div>
                <div className={classes.small}><img src='../Images/phone.svg' className={classes.footer_img_small}></img><div className={classes.smallContent}>Sales:+ 971 52 578 8380 and Support: +971 54 772 2276</div></div>
                <div className={classes.small}><img src='../Images/loc.svg' className={classes.footer_img_small}></img><div className={classes.smallContent}> Office suite # 24, First Gulf Business Center LLC, Madina Mall,
                Muhaisnah 4, Dubai - UAE,<br/>PO box - 211152</div></div>
            </Grid>
            <Grid item xs={12} md={2} lg={2} className={classes.footer_desc1}>
              </Grid>     
           
        </Grid>
        </Grid>
    </Grid>
    
  )
}
export default withStyles(AuthenticationStyle)(Footer)
