import { ClassNames } from '@emotion/react'
import { Button, Grid } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";
import React from 'react'
import AuthenticationStyle from "../../Styles/AuthenticationStyle";
import { Carousel } from 'react-responsive-carousel';

const FeedBack = (props) =>{
    const { classes } = props;
  return (
    <Grid container>
        
        <Grid item md={12} lg={12} className={classes.services}>
           <div> What do our client say about us</div>
        </Grid>
        <Grid item md={12} lg={12} className={classes.services_desc}>
        <Grid item md={6} lg={6}>
          <div className="feedback">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.



          </div>

        </Grid>
           
           
        </Grid>
        
    </Grid>
    
  )
}
export default withStyles(AuthenticationStyle)(FeedBack)
