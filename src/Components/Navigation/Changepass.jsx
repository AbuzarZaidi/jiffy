import { Grid } from '@material-ui/core'
import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import AuthenticationStyle from "../../Styles/AuthenticationStyle";
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Input, InputAdornment } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link, useNavigate,useParams } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import Allservices from './Allservices';
import BasicNavbar from '../BasicNavbar'
import Services from '../Homepage/Services';
import Flow from '../Homepage/Flow';
import Purpose from '../Homepage/Purpose';
import AskedQuestions from '../Homepage/AskedQuestions';
import Footer from '../Homepage/Footer';
import axios from 'axios';
import AllservicesModify from './ModifyPage.jsx/AllservicesModify';
import { getBaseURL } from '../../api/apiManagement';
import FooterModify from './ModifyPage.jsx/FooterModify';
const ChangePass =(props) => {
  const { id } = useParams();
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
    params["userId"] = id;
console.log("yyy",id)
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
  return (<>
    <BasicNavbar/>
    <Grid container className={classes.coperate_start3}>
    <Grid container className={classes.ht}  >
        <Grid item xs={6} md={6} lg={6} className={classes.allm}>
        <img src='../Images/background-1.png' alt="bg" className='background-1' style={{marginLeft: "0px"}}>
      </img>
        </Grid>
    <Grid item xs={12} md={5} lg={5} style={{marginLeft: "50px",marginRight: "20px"}}>
        
        <div className={classes.coperate_section} style={{marginRight: "20px"}}>
          <b className={classes.coperate_btn}>Corporate Login</b>
          <h2 className='auth-content-align'>
            <div className='welcome2'><strong>Change/Reset Password</strong></div>
          </h2>
          <div  className='newpass'>
          Create a new password that is at least 8 characters long
          </div>
          <form >
          <div className='auth-content-align'>
              <b>Current password</b>
              <Input item xs={12}
                id="curr_password"
                onChange={(e) => handle(e)}
                className={classes.input}
                startAdornment={
                  <InputAdornment position="start">
                    <img className={classes.msg_icon} src='../Images/email.svg'></img>

                  </InputAdornment>
                }
              />
             


            </div>
            <div className='auth-content-align'>
              <b>Enter new password</b>
              <Input item xs={12}
                id="password"
                onChange={(e) => handle(e)}
                className={classes.input}
                startAdornment={
                  <InputAdornment position="start">
                    <img className={classes.msg_icon} src='../Images/email.svg'></img>

                  </InputAdornment>
                }
              />
             


            </div>
            <div className='auth-content-align'>
              <b>Confirm new password</b>
              <Input item xs={12}
                id="user_name"
               
                className={classes.input}
                startAdornment={
                  <InputAdornment position="start">
                    <img className={classes.msg_icon} src='../Images/email.svg'></img>

                  </InputAdornment>
                }
              />
             


            </div>
           
          </form>
          
          <div className='auth-content-align'>
            <Button className={classes.login} onClick={reset}>Change/ Reset Password</Button>

          </div>

        
         
        </div>
      </Grid>
      </Grid>
      </Grid>

    <FooterModify></FooterModify>
    </>
  )
}
export default withStyles(AuthenticationStyle)(ChangePass);
