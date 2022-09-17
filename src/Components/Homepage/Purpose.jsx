
import { Grid } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";
import React from 'react'
import AuthenticationStyle from "../../Styles/AuthenticationStyle";

const Purpose = (props) =>{
    const { classes } = props;
  return (
    <Grid container>
         <Grid container className={classes.ht}  >
        <Grid item md={12} lg={12} className={classes.services}>
            <div className={classes.purpwhy}>Why Choose Jiffy?</div>
        </Grid>
        <Grid item md={12} lg={12} className={classes.services_desc_pur}>
            <Grid item xs={12} md={6} lg={6} className={classes.purpose}>
              
               <div className={classes.purpose_heading}> 
               <div className={classes.purpdata}>Jiffy is an on-demand logistics solution for your organization which guarantees to carry out the required service/delivery within 24 Hours. </div><br/>
               <div className={classes.purpdts}>Jiffy is the only delivery service that provides you with an authenticated same day delivery.Our goal is to help your run your daily services in an efficient manner enabling you to save time and thereby aiding your business operations to achieve economies of scale.</div>
                <div className={classes.purpdts}> 
                </div></div>
               <div>
               </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <div>
                    <img src='./Images/choose.svg' className={classes.choose_img}></img>
                </div>
            
            </Grid>
           
        </Grid>
        </Grid>
    </Grid>
    
  )
}
export default withStyles(AuthenticationStyle)(Purpose)
