import { ClassNames } from '@emotion/react'
import { Grid } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";
import React from 'react'
import AuthenticationStyle from "../../Styles/AuthenticationStyle";

const Payments = (props) =>{
    const { classes } = props;
  return (
    <Grid container className={classes.payment}>
        
        <Grid item md={12} lg={12} className={classes.services}>
            <div>Payment Options</div>
        </Grid>
        <Grid item md={12} lg={12} className={classes.services_desc}>
            <Grid item md={4} lg={4} className={classes.services_content}>
                <div>
                    <img src='./Images/online.png' className={classes.package}></img>
                </div>
               <div className={classes.services_heading}> Online Payments </div>
               <div className={classes.services_details}>
               Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
               </div>
            </Grid>
            <Grid item md={4} lg={4}>
            <div>
                    <img src='./Images/icon.gif' className={classes.package}></img>
                </div>
            <div className={classes.services_heading}>e-Wallet</div>
            <div className={classes.services_details}>
               Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
               </div>
            </Grid>
            <Grid item md={4} lg={4}>
            <div>
                    <img src='./Images/cash.png' className={classes.package}></img>
                </div>
            <div className={classes.services_heading}>Cash on Delivery</div>
            <div className={classes.services_details}>
               Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
               </div>
            </Grid>
        </Grid>
        
    </Grid>
    
  )
}
export default withStyles(AuthenticationStyle)(Payments)
