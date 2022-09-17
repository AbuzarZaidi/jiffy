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
import { set } from 'date-fns/esm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const ImgGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    marginLeft: "50px", marginTop: "5px"
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "80px", marginTop: "5px",
    display: 'flex',
    justifyContent: 'center',
  },
}));
const Image = styled('img')(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    maxWidth: "555px"
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "300px",

  },
}));
const HeadingGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
   marginLeft: "50px",marginRight: "20px"
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "0px"

  },
}));

const AuthContent = (props) => {




  const { classes } = props;
  const url = "https://apis.jiffy.ae/vendor/api/v1/loginapi/v1/login"
  //const url = "http://3.108.59.82:8000/vendor/api/v1/loginapi/v1/login"
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    user_name: "",
    password: "",


  })
  //VALIDATION Flags
  const [errorFlag, setErrorFlag] = React.useState(false)
  const [errorFlagWrong, setErrorFlagWrong] = React.useState(false)
  const [errorFlagPass, setErrorFlagPass] = React.useState(false)
  const [errorFlagPassWrong, setErrorFlagPassWrong] = React.useState(false)
  const [open, setOpen] = React.useState(false);
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
  function login() {

  
   
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
    axios.post(url, data)
      .then(res => {
        console.log(res)
        try {
          if (res.data.status === 'success' && data.user_name === "admin" && data.password === "jiffy") {

            navigate('/services')
          }
          else {
            document.getElementById('user_name').focus();
            if (data.user_name === '') {
              setErrorFlag(true)
            }
            else if (data.user_name !== "admin") {
              setErrorFlagWrong(true)
            }
            if(data.password === ''){
              setErrorFlagPass(true)
            }
            else if(data.password !== "jiffy"){
              setErrorFlagPassWrong(true)
            }
            console.error("TRy AGAIN")
            console.log(errorFlag)
          }
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
      {/* } <Grid container>
            <Grid item xs={12} md={12} lg={12} sm={12} className="location"> 
                  <div className={classes.location}>
                    <p className='location-text'>
                     <LocationOnIcon className={classes.locIcon}></LocationOnIcon> United Arab Emirates
                    </p>
                  </div>     
            </Grid>

          </Grid> */}
          
       <ImgGrid item xs={12} md={4} lg={4} >
       
      <Image src='./Images/background-1.png' alt="bg" className='background-1' style={{marginLeft: "0px"}}>
      </Image>
       
      </ImgGrid>
       <HeadingGrid item xs={12} md={5} lg={5} >
        
        <div className={classes.coperate_section} style={{marginRight: "20px"}}>
          <b className={classes.coperate_btn}>Corporate Login</b>
          <h2 className='Heading'>
            <div><p  className='welcome'>Welcome</p>
            </div>
          </h2>
          <div  className='auth-content-align2'>
            Enter your login details here
          </div>
           <form >
            <div className='email_align'>
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
            <div className='password-align'>
              <b>Password</b>
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
          
           <div className='auth-content-align'>
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
