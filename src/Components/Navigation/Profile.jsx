import { Grid } from '@material-ui/core'
import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import AuthenticationStyle from "../../Styles/AuthenticationStyle";
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Input, InputAdornment } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BasicNavbar from '../BasicNavbar'
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
import axios from 'axios';
import { getBaseURL } from '../../api/apiManagement';
const Profile =(props) => {
    const navigate = useNavigate();
  const { classes } = props;
  const [data, setData] = React.useState({
    password: "",
    curr_password:""


  })
  const url = getBaseURL() + "/vendor/api/v1/changepassword"
  function handle(e) {
    //const newTableData = { ...tableData }
    //const selectedStatus = e.target.value;
    data[e.target.id] = e.target.value

    console.log(data)
  }
  function reset(){
    let params={};
    params["email"]=localStorage.getItem("email")
    params["new_password"]=data.password;
    params["curr_password"]=data.curr_password;
    params["userId"] = localStorage.getItem("userId")

    axios.post(url, params).then((res) => {
        console.log(res.data);
        //postId = res.data;
        if (res.data.status === "success") {
          //postId = res.data.id;
          //setId(res.data.id);
          console.log(res);
          navigate('/')
          
        }
        try {
        } catch (error) {
          console.error();
        }
      });
  }
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 6
      }}
    />
  );
  return (<>
    <Allservices></Allservices>
    {/* <BasicNavbar/> */}
    <Grid container className={classes.coperate_start2}>
    <Grid container className={classes.ht}  >
       
        <Grid item xs={2} md={2} lg={2}>
                  <div className={classes.heading}>
                   
                    <div className='profile'> Profile</div>
                  </div>
                </Grid>
                <Grid item xs={10} md={10} lg={10}>
                  <div  className='profilen'>
                    <ColoredLine color="#131C4C" />
                  </div>
                </Grid>
                <Grid item xs={12} md={12} lg={12}  style={{height: "150px", marginTop: "55px",display:"flex"}}>
                <Grid item xs={2} md={2} lg={2}>
                  <div>
                    <img src='./Images/pro.png'></img>
                  </div>
                  </Grid>
                  <Grid item xs={10} md={10} lg={10}>
                  <div className='fields'>
                 <span>{localStorage.getItem("name")}</span>
                 
                  </div>
                  <div>
                   <img src='./Images/mob.png'></img>&nbsp;&nbsp;&nbsp;&nbsp;<span>{localStorage.getItem("phone")}</span>
                  </div>
                  <br/>
                  <div>
                   <img src='./Images/em.png'></img>&nbsp;&nbsp;<span>{localStorage.getItem("email")}</span>
                  </div>
                  </Grid>
                </Grid>
              <Grid item xs={12} md={12} lg={12}  style={{height: "150px", marginTop: "25px"}} >

               

  </Grid>
      
    <Grid item xs={12} md={5} lg={5} style={{marginLeft: "50px",marginRight: "20px"}}>
        
      
      </Grid>
      </Grid>
      </Grid>

    <Footer></Footer>
    </>
  )
}
export default withStyles(AuthenticationStyle)(Profile);
