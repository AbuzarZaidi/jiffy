
import { Grid } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";
import React from 'react'
import AuthenticationStyle from "../../Styles/AuthenticationStyle";

const Flow = (props) =>{
    const { classes } = props;
  return (
    <Grid item xs={12} container className={classes.flow} id="flow">
    <Grid container className={classes.ht}  >
   <Grid item xs={12} md={12} lg={12} className={classes.services}>
       <div>How it Works?</div>
   </Grid>
   <Grid item xs={12} md={12} lg={12} className={classes.services_desc}>
       <Grid item xs={12} md={6} lg={3} sx={{mt:1}}>
       <div class={classes.upper_flow_portion}>
           <div class={classes.img_box}>
               <img src='./Images/ser1.png' className={classes.flow_package}></img>
           </div>
          <div className={classes.flow_heading}> Choose <br/>a Service</div>
          </div>
          <div className={classes.services_details}>
          Check out the list of services we provide and choose your service accordingly.
          </div>
       </Grid>
       <Grid item xs={12} md={6} lg={3} sx={{mt:1}} >
       <div class={classes.upper_flow_portion}>
           <div class={classes.img_box}>
               <img src='./Images/se1.png' className={classes.flow_package}></img>
           </div>
       <div className={classes.flow_heading}>Input<br/> Details
       </div>
       </div>
       <div className={classes.services_details}>
       Ensure to enter the correct details such as point-of-contact, address, location, telephone number.
          </div>
       </Grid>
       <Grid item xs={12} md={6} lg={3} sx={{mt:1}}>
       <div class={classes.upper_flow_portion}>
           <div class={classes.img_box}>
               <img src='./Images/track1.png' className={classes.flow_package}></img>
           </div>
       <div className={classes.flow_heading}>Live <br/>Tracking
       </div>
       </div>
       <div className={classes.services_details}>
       Track your service on a live basis as it goes on its fulfilment journey.
          </div>
       </Grid>
       <Grid item xs={12} md={6} lg={3}  >
       <div class={classes.upper_flow_portion}>
           <div class={classes.img_box}>
               <img src='./Images/noti1.png' className={classes.flow_package}></img>
           </div>
       <div className={classes.flow_heading}>Authenticated <br/>Delivery
       </div>
       </div>
       <div className={classes.services_details}>
       Safe and secure delivery of the service to ensure that there are no hassles, inclusive of immediate authenticated notification on service completion.
          </div>
       </Grid>
   </Grid>
   </Grid>
</Grid>
    
  )
}
export default withStyles(AuthenticationStyle)(Flow)
