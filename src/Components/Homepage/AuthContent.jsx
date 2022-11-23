import { Grid } from '@material-ui/core'
import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import AuthenticationStyle from "../../Styles/AuthenticationStyle";
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Input, InputAdornment } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../../api/apiManagement';
import axios from "axios";
import { getBaseURL } from '../../api/apiManagement'
import { set } from 'date-fns/esm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { getMessaging,getToken } from "firebase/messaging"
import { initializeApp } from 'firebase/app';
import { getFirestore, onSnapshot, collection } from '@firebase/firestore';
const ImgGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    // marginLeft: "5px",
     marginTop: "5px",
    // marginRight:"5px"
   },
  [theme.breakpoints.down("xl")]: {
    // marginLeft: "5px", 
    marginTop: "5px",
    marginRight:"95px"
  },
  [theme.breakpoints.down("md")]: {
    marginRight:"0px",
     marginTop: "5px",
    display: 'flex',
    justifyContent: 'center',
  },
}));
const Image = styled('img')(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    maxWidth: "555px",
   
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "90%",

  },
}));
const HeadingGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    marginLeft: "100px",marginRight: "20px"
   },
  [theme.breakpoints.down("xl")]: {
   marginLeft: "5px",marginRight: "20px"
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "0px",
    marginRight: "20px"

  },
}));
const AuthContent = (props) => {




  const { classes } = props;
  //const url = "https://apis.jiffy.ae/vendor/api/v1/loginapi/v1/login"
  const newUrl = getBaseURL() + "/vendor/api/login"
  //const newUrl = "http://127.0.0.1:8000/vendor/api/login"
  //const url = "http://3.108.59.82:8000/vendor/api/v1/loginapi/v1/login"
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    user_name: "",
    password: "",


  })
  const [data1, setData1] = React.useState({
 


  })
  //VALIDATION Flags
  const [errorFlag, setErrorFlag] = React.useState(false)
  const [errorFlagWrong, setErrorFlagWrong] = React.useState(false)
  const [errorFlagPass, setErrorFlagPass] = React.useState(false)
  const [errorFlagPassWrong, setErrorFlagPassWrong] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const [forgot, setForgot] = React.useState('showLogin');
  const [Login, setLogin] = React.useState('showForgot');
  const [change, setChange] = React.useState('showForgot');
  const [res, setRes] = React.useState("");
  const [forSuccess, setSuccess] = React.useState(false);

  const changeClass = () => {
    setForgot('showForgot');
    setLogin('showLogin');
    setChange('showForgot')
  }
  const url1= getBaseURL() + "/vendor/api/v1/forgotpassword/"
  const requestLink = () => {

    axios.post(url1,data1)
    .then(res => {
      console.log(res)
      setSuccess(true)
      })
    //setForgot('showForgot');
  // setLogin('showForgot');
    //setChange('showLogin')
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function handle(e) {
    //const newTableData = { ...tableData }
    //const selectedStatus = e.target.value;
    data[e.target.id] = e.target.value

    console.log(data)
  }
  function handle1(e) {
    //const newTableData = { ...tableData }
    //const selectedStatus = e.target.value;
    data1[e.target.id] = e.target.value

    console.log(data)
  }
  async function login() {

  
   
    setErrorFlag(false)
    setErrorFlagWrong(false)
    setErrorFlagPass(false)
    setErrorFlagPassWrong(false)
    //let payload = {}
    // payload["user_name"] = "admin"
    // payload["password"] = "jiffy"
    // try{
    //const res = loginAPI({ 
    //  user_name:"admin",
    // password:"jiffy"

    //});
    // console.log(res.data)
    
   await axios.post(newUrl,data)
      .then(res => {
       
        setRes(res)
        try {
          if (res.data.status === 'success') {

            navigate('/services')
            localStorage.setItem("userId",res.data.userId)
            localStorage.setItem("email",res.data.email)
            localStorage.setItem("name",res.data.name)
            localStorage.setItem("phone",res.data.phone)
            localStorage.setItem("previlage",res.data.previlage)
          }
          else {
            document.getElementById('user_name').focus();
           {/*} if (data.user_name === '') {
              setErrorFlag(true)
            }
            else if (data.user_name !== "admin") {
              setErrorFlagWrong(true)
            }
            if(data.password === ''){
              setErrorFlagPass(true)
            }*/}
         
              setErrorFlagPassWrong(true)
          
            
           
          }
          const firebaseConfig = {
            apiKey: "AIzaSyApfVOAcPyKnWgMlDCQlrlJvDLro2LW4Xo",
            authDomain: "jiffy-7c780.firebaseapp.com",
            projectId: "jiffy-7c780",
            storageBucket: "jiffy-7c780.appspot.com",
            messagingSenderId: "858697568951",
            appId: "1:858697568951:web:c314027e738f1df16db332",
            measurementId: "G-ZMK5HQEQFN"
          };
          const app = initializeApp(firebaseConfig);
          const messaging = getMessaging();
         
          return getToken(messaging, { vapidKey:"BA73PZSy4WoyebsLx6HOwYoxZVM4jbh_ADhqxmlkhviHdqFRBiJojbRUCQx2foyIP2c5NSk52a3xsuEfup_vK_s"})
          .then((currentToken) => {
            if (currentToken) {
              console.log('current token for client: ', currentToken);
              // Perform any other neccessary action with the token
            } else {
              // Show permission request UI
              console.log('No registration token available. Request permission to generate one.');
            }
          })
          .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
          });
        }
        catch (error) {
          console.error("TRy AGAIN")
          return(
            <>
            </>
          )

        }

      })
    // login(payload)
    // navigate('/services')
    //}
    setTimeout(()=>{
    
    },1000)
    

  }




  return (
    <>
    <div className={classes.coperate_start} >
    <Grid container className={classes.ht}  >
      {/*} <Grid container>
            <Grid item xs={12} md={12} lg={12} sm={12} className="location"> 
                  <div className={classes.location}>
                    <p className='location-text'>
                     <LocationOnIcon className={classes.locIcon}></LocationOnIcon> United Arab Emirates
                    </p>
                  </div>     
            </Grid>

          </Grid>*/}
           <ImgGrid item xs={12} md={4} lg={4}  >
       
       <Image src='./Images/background-1.png' alt="bg"  className='background-1' >
       </Image>
       {/*  */}
       </ImgGrid>
    
      {/* <Grid item xs={12} md={5} lg={5} style={{marginLeft: "50px",marginRight: "20px"}} className={forgot}> */}
      <HeadingGrid item xs={12} md={5} lg={5} className={forgot}>
        <div className={classes.coperate_section} style={{marginRight: "20px"}}>
          <b className={classes.coperate_btn}>Corporate Login</b>
          <h2 className='auth-content-align'>
            <div className='welcome'><strong>Welcome</strong></div>
          </h2>
          <div  className='auth-content-align' style={{marginBottom:"20px"}}>
            Enter your login details here
          </div>
          <form >
          <div className='auth-content-align'>
              <b>Company ID / E-mail</b>
              <Input item xs={12}
                id="user_name"
                onChange={(e) => handle(e)}
                className={classes.input}
                startAdornment={
                  <InputAdornment position="start">
                    <img className={classes.msg_icon} src='./Images/email.svg'></img>

                  </InputAdornment>
                }
              />
              {errorFlag === true ? (<><span className={classes.errorVal}>Enter email</span></>) : null}
              {errorFlagWrong === true ? (<><span className={classes.errorVal}>Enter valid email</span></>) : null}


            </div>
            <div className='password-align' style={{marginTop:"20px",marginBottom:"25px"}}>
              <div className={classes.forgetAlign}>
                <span > <b>Password</b></span>
                <span style={{color:"131C4C",fontSize: "14px",cursor:"pointer",}} onClick={changeClass}> <u>Forgot Password?</u></span>
              </div>
              
              <Input
                type='password'
                onChange={(e) => handle(e)}
                id="password"
                className={classes.input}
                startAdornment={
                  <InputAdornment position="start">
                    <img className={classes.msg_icon} src='./Images/key.svg'></img>
                  </InputAdornment>
                }
              />
               {errorFlagPass === true ? (<><span className={classes.errorVal}>Enter Password</span></>) : null}
              {errorFlagPassWrong === true ? (<><span className={classes.errorVal}>Enter valid password</span></>) : null}

            </div>

          </form>
          
          <div className='auth-content-align2'>
          <Button className={classes.login} onClick={() => login()}>Login</Button>

          </div>

         
            <Grid item xs={12} md={12} lg={12} className={classes.or_align}>

              or

            </Grid>
        
          <div className='auth-content-align'>
            <Grid item xs={12} md={4} lg={4} className={classes.extra_login}>
              
                <Grid item xs={12} md={3} lg={3}>
                  <div>
                    <img className={classes.share} src='./Images/google.svg'></img>
                  </div>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <img className={classes.share} src='./Images/facebook.svg'></img>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <img className={classes.share} src='./Images/linkedin.svg'></img>
                </Grid>
            
            </Grid>
          </div>
        </div>
        </HeadingGrid>


        <HeadingGrid item xs={12} md={5} lg={5} className={Login}>
      {/* <Grid item xs={12} md={5} lg={5} style={{marginLeft: "50px",marginRight: "20px"}} > */}
      
        <div className={classes.coperate_section} style={{marginRight: "20px"}}>
        <b className={classes.coperate_btn}>Corporate Login</b>
        <h2 className='auth-content-align'>
            <div className='forget'><strong>Forgot Your Password</strong></div>
          </h2>
          
          {!forSuccess ?  (<>
          
            <div  className='auth-content-align'>
          Please enter the email address you’d like your password reset information sent to
          </div>
          <form >
            <div className='auth-content-align'>
              <b>Enter Email Address</b>
              <Input item xs={12}
                id="email"
                onChange={(e) => handle1(e)}
                className={classes.input}
                startAdornment={
                  <InputAdornment position="start">
                    <img className={classes.msg_icon} src='./Images/email.svg'></img>

                  </InputAdornment>
                }
              />
             


            </div>
           
          </form>
          
          
         
          
          <div className='authForgot'>
            <Button className={classes.login} onClick={() => requestLink()}>Request Reset Link</Button>
             
          </div>
          </>):(<>
          <div className='authForgoted'>
         
            <span><img className='emailImg' src='./Images/check.png'></img></span>
            <br/>
            <span className='emailed'>   Email Sent Successfully</span>
          </div>
          </>)}
        
         
        </div>
      {/* </Grid> */}
      </HeadingGrid>



      <Grid item xs={12} md={5} lg={5} style={{marginLeft: "50px",marginRight: "20px"}} className={change}>
        
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
              <b>Enter Email Address</b>
              <Input item xs={12}
                id="user_name"
                onChange={(e) => handle(e)}
                className={classes.input}
                startAdornment={
                  <InputAdornment position="start">
                    <img className={classes.msg_icon} src='./Images/email.svg'></img>

                  </InputAdornment>
                }
              />
             


            </div>
           
          </form>
          
          <div className='auth-content-align'>
            <Button className={classes.login} onClick={() => requestLink()}>Request Reset Link</Button>

          </div>

        
         
        </div>
      </Grid>




    {errorFlag || errorFlagPass }
    </Grid>
</div>
<Grid item xs={12} md={12} lg={12} className={classes.sepa}>

<img className={classes.separt} src='./Images/seperator.png'></img>

</Grid>
</>

   

  )
}
export default withStyles(AuthenticationStyle)(AuthContent);
