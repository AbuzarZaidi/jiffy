import { ClassNames } from '@emotion/react'
import { Button, Grid, Typography } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";
import React,{useState} from 'react'
import AuthenticationStyle from "../../Styles/AuthenticationStyle";


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';



const FaqTitle  = ({open, content}) => (
    <Typography style={{ fontWeight: 550,fontFamily: "Montserrat !important", fontSize: "revert", color: open ? 'white': 'black' }}>
        {content}
    </Typography>
)

const FaqContent  = ({content}) => (
    <Typography variant="h5" style={{ fontSize: "medium", color: '#AFB3C7', fontFamily: 'Montserrat !important' }}>
        {content}
    </Typography>
)


const AskedQuestions = (props) =>{
    const { classes } = props;
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [style, setStyle] = useState("freq_list");
  
    const handleClick = () => {
      setOpen(!open);
        //setStyle("freq_listed")
    };
    const handleClick1 = () => {
        setOpen1(!open1);
      };
      const handleClick2 = () => {
        setOpen2(!open2);
      };
      const handleClick3 = () => {
        setOpen3(!open3);
      };
      const handleClick4 = () => {
        setOpen4(!open4);
      };
  return (
    <Grid container>
    <Grid container className={classes.ht}  >
   <Grid item md={12} lg={12} className={classes.services}>
      
   </Grid>
   <Grid item md={12} lg={12} className={classes.services_desc}>
       <Grid item  md={12} lg={3} className={classes.services_content}>
           <div  className={classes.askQuestion}>
          <div className={classes.asked_heading}> Frequently<br/>Asked <br/>Questions </div>
         <img src='./Images/freq.svg' className={classes.imgAsk}></img>
         </div>
       </Grid>
       <Grid item md={8} lg={8}>
       
      {/*} <div className={classes.freq_heading}>
           <div className={classes.askedQuest}>How do i select a service?</div>
       </div>
       <div className={classes.freq_heading}>
           <div className={classes.askedQuest}>How much time does it take to deliver a document?</div>
       </div>
       <div className={classes.freq_heading}>
           <div className={classes.askedQuest}>Is my document secure and safe?</div>
       </div>
       <div className={classes.freq_heading}>
           <div className={classes.askedQuest}>What are the pricing?</div>
       </div>
       <div className={classes.freq_heading}>
           <div className={classes.askedQuest}>How do i track my order?</div>
       </div>
       <div className={classes.freq_heading}>
           <div className={classes.askedQuest}>How to download my invoice?</div>
</div>*/}
       <List
           component="nav"
           aria-labelledby="nested-list-subheader"
           className={classes.root}
       >
           <ListItem button onClick={handleClick} className={classes.freq_list}
           style={{ backgroundColor: open ? "#131C4C" : "#F2F8FD", borderRadius: open ? "12px 12px 0 0": "12px 12px 12px 12px" }}
           >
               <ListItemText 
                disableTypography
               className={classes.frq} primary={<FaqTitle open={open} content="How do I select a service?"/>}/>
                   {open ? <ExpandLess style={{color: 'white'}}/> : <ExpandMore style={{color: 'black'}}/>}
           </ListItem>
               <Collapse in={open} timeout="auto" unmountOnExit>
                   <List component="div" disablePadding>
                   <ListItem button
                   style={{ backgroundColor: "#131C4C", borderRadius: "0 0 12px 12px" }}
                   className={classes.freq_desc}>
                   <ListItemText
                   // disableTypography
                   secondary={<FaqContent content="Once you login with your credentials, you will be directed to a welcome page with the list of the services provided by Jiffy. You can choose the services based on the options provided such as; send package, collect package, accompaniment, document attestation etc."/>}/>
                   </ListItem>
                   </List>
               </Collapse>
       
       </List>
       <List
           component="nav"
           aria-labelledby="nested-list-subheader"
           className={classes.root}
       >
           <ListItem button onClick={handleClick1} className={classes.freq_list}
           style={{ backgroundColor: open1 ? "#131C4C" : "#F2F8FD", borderRadius: open1 ? "12px 12px 0 0": "12px 12px 12px 12px" }}
           >
               <ListItemText primary={<FaqTitle open={open1} content="How much time does it take to deliver a document?" />}/>
                   {open1 ? <ExpandLess style={{color: 'white'}}/> : <ExpandMore style={{color: 'black'}}/>}
           </ListItem>
               <Collapse in={open1} timeout="auto" unmountOnExit>
                   <List component="div" disablePadding>
                   <ListItem button className={classes.freq_desc}
                   style={{ backgroundColor: "#131C4C", borderRadius: "0 0 12px 12px" }}
                   >
                   <ListItemText
                    disableTypography
                    primaryTypographyProps={{ style: {
                        color: "white",
                        fontSize: "medium",
                        fontFamily: "Montserrat !important"
                    }}}
                   secondary={<FaqContent content="Document delivery time depends on the location that is input. Jiffy usually works on a standard turn around time. Orders placed between 9 AM and 1 PM would be delivered within the same day subject to the input location (local orders). Orders placed post 1 PM would be scheduled for next day delivery. Inter-Emirate deliveries would be delivered as per the standard SLA." />} />
                   </ListItem>
                   </List>
               </Collapse>
       
       </List>

      {/*} <List
           component="nav"
           aria-labelledby="nested-list-subheader"
           className={classes.root}
       >
           <ListItem button onClick={handleClick2} className={classes.freq_list}>
               <ListItemText primary="How much time does it take to deliver a document?" />
                   {open2 ? <ExpandLess /> : <ExpandMore />}
           </ListItem>
               <Collapse in={open2} timeout="auto" unmountOnExit>
                   <List component="div" disablePadding>
                   <ListItem button className={classes.nested}>
       
                   <ListItemText secondary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                   </ListItem>
                   </List>
               </Collapse>
       
       </List>*/}

       {/*<List
           component="nav"
           aria-labelledby="nested-list-subheader"
           className={classes.root}
       >
           <ListItem button onClick={handleClick} className={classes.freq_list}>
               <ListItemText primary="What are the pricing?" />
                   {open ? <ExpandLess /> : <ExpandMore />}
           </ListItem>
               <Collapse in={open} timeout="auto" unmountOnExit>
                   <List component="div" disablePadding>
                   <ListItem button className={classes.nested}>
       
                   <ListItemText primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                   </ListItem>
                   </List>
               </Collapse>
       
       </List>*/}

       <List
           component="nav"
           aria-labelledby="nested-list-subheader"
           className={classes.root}
       >
           <ListItem button onClick={handleClick3} className={classes.freq_list}
           style={{ backgroundColor: open3 ? "#131C4C" : "#F2F8FD", borderRadius: open3 ? "12px 12px 0 0": "12px 12px 12px 12px" }}
           >
               <ListItemText 
               primary={<FaqTitle open={open3} content="How do I track my order?" /> }/>
                   {open3 ? <ExpandLess style={{color: 'white',fontFamily: "Montserrat !important"}}/> : <ExpandMore style={{color: 'black',fontFamily: "Montserrat !important"}}/>}
           </ListItem>
               <Collapse in={open3} timeout="auto" unmountOnExit>
                   <List component="div" disablePadding>
                   <ListItem button className={classes.freq_desc}
                   style={{ backgroundColor: "#131C4C", borderRadius: "0 0 12px 12px" }}
                   >
       
                   <ListItemText
                   disableTypography
                   primaryTypographyProps={{ style: {
                       color: "white",
                       fontSize: "medium",
                       fontFamily: "Montserrat !important"
                   }}}                         
                    secondary={<FaqContent content="Once you have successfully placed an order, you will be redirected to a track order tab, which will give you a live-tracking interface with the delivery agent live location. You can also enable live notifications, so that you are alerted as soon as the delivery agent has reached the destination and the document/package has been delivered/collected." /> }/>
                   </ListItem>
                   </List>
               </Collapse>
       
       </List>
       <List
           component="nav"
           aria-labelledby="nested-list-subheader"
           className={classes.root}
       >
           <ListItem button onClick={handleClick4} className={classes.freq_list}
           style={{ backgroundColor: open4 ? "#131C4C" : "#F2F8FD", borderRadius: open4 ? "12px 12px 0 0": "12px 12px 12px 12px" }}
           >
               <ListItemText primary={<FaqTitle open={open4} content="How to download my invoice?" />}/>
                   {open4 ? <ExpandLess style={{color: 'white',fontFamily: "Montserrat !important"}}/> : <ExpandMore style={{color: 'black',fontFamily: "Montserrat !important"}} />}
           </ListItem > 
               <Collapse in={open4} timeout="auto" unmountOnExit>
                   <List component="div" disablePadding>
                   <ListItem button className={classes.freq_desc}
                   style={{ backgroundColor: "#131C4C", borderRadius: "0 0 12px 12px" }}
                   >
       
                   <ListItemText
                   disableTypography
                   primaryTypographyProps={{ style: {
                       color: "white",
                       fontSize: "medium",
                       fontFamily: "Montserrat !important"
                   }}}
                   secondary={<FaqContent content="Once your document/package has been collected/delivered, you will be redirected to an invoice tab. You can easily access the required invoice by date/order ID. You will be provided with 3 options i.e. print invoice, download invoice and E-mail invoice." />}/>
                   </ListItem>
                   </List>
               </Collapse>
       
       </List>
       </Grid>
       
      
   </Grid>
   </Grid>
</Grid>

  )
}
export default withStyles(AuthenticationStyle)(AskedQuestions)
