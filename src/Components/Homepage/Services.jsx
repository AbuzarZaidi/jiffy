import { ClassNames } from '@emotion/react'
import { Grid } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";
import React from 'react'
import AuthenticationStyle from "../../Styles/AuthenticationStyle";

const Services = (props) =>{
    const { classes } = props;
  return (
    
    <Grid container className={classes.ht}>
 
        <Grid item xs={12} md={12} lg={12} className={classes.services}>
            <div>Our Services</div>
        </Grid>
        <Grid item xs={12} md={12} lg={12} className={classes.services_desc}>
            <Grid item xs={12} md={6} lg={3} className={classes.services_content}>
                <div class={classes.upper_portion}>
                <div class={classes.img_box}>
                    <img src='./Images/Io.svg' className={classes.package}></img>
                </div>
               <div className={classes.services_headingI}>Inbound & Outbound <br/>Document Transfers</div>
               </div>
               <div className={classes.services_details}>
               For your convenience, Jiffy will take care of all inbound and outbound documents for all your services. Our application will ensure priority and security of these documents when its collected and delivered.
               </div>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
            <div class={classes.upper_portion}>
                <div class={classes.img_box}>
            
                    <img src='./Images/ik.svg' className={classes.package}></img>
                </div>
               
            <div className={classes.services_heading}>Package <br/>Delivery
            </div>
            </div>
            <div className={classes.services_details}>
            Send and receive packages to your clients/companies in a secure manner with double authentication features within the same day.
               </div>
            </Grid>
            <Grid item xs={12} md={6} lg={3} sm={12}>
            <div class={classes.upper_portion}>
                <div class={classes.img_box}>
                    <img src='./Images/ip.svg' className={classes.package}></img>
                </div>
            <div className={classes.services_heading}>Document <br/>Attestation
            </div>
            </div>
            <div className={classes.services_details}>
            Get your documents attested with the approved offices across UAE.
               </div>
               
            </Grid>
            <Grid item xs={12} md={6} lg={3} sm={12}>
            <div class={classes.upper_portion}>
                <div class={classes.img_box}>
                    <img src='./Images/il.svg' className={classes.package}></img>
                </div>
            <div className={classes.services_heading}>Personalized <br/>Services
</div>
</div>
            <div className={classes.services_details}>
            We will be your concierge for your daily services tailor-made to suit your schedule.
               </div>
            </Grid>
        </Grid>
        
    </Grid>
    
  )
}
export default withStyles(AuthenticationStyle) (Services)
