const AuthenticationStyle = (theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
    fontFamily: "Montserrat !important",
    minWidth: "initial",
  },
  navbar: {
    display: "flex",
    backgroundColor: "blue",
    boxShadow: "0px 5px #c2c5c4",
    height: "60px",
    overflow: "hidden",
    borderBottom: "2px solid grey",
   
  },
  newbtn: {
    position: "absolute",
    width: "max-content",
    color: "black !important",
    "font-size": "small !important",
    textTransform: "none !important",
    fontFamily: "Montserrat !important",
  },
  nav_gap: {
    flexbasis: "auto !important",
    color: "black !important",
  },
  nav_align: {
    paddingTop: "10px",
  },
  btn_navbar: {
    textAlign: "center",
  },
  location: {
    height: "30px",
  },
  locIcon: {
    height: "16px !important",
    color: "#D99F12",
  },
  coperate_start: {
    background: " url(./Images/rt.png)",
    justifyContent: "center",
  },
  coperate_start2: {
    background: " url(./Images/rt.png)",
    justifyContent: "center",
    paddingTop: "50px",
  },
  purpdts: {
    fontSize: "15px",
    color: "#545A77",
    opacity: "1",
    fontWeight: "300 !important",
    lineHeight: "24px",
  },
  purpdata: {
    color: "#131C4C",
    opacity: "0.9",
    lineHeight: "40px",
  },
  purpwhy: {
    color: "#131C4C",
    opacity: "1",
    fontWeight: "700",
    "@media (max-width: 600px)": {
      marginLeft: "69px"
  
  }
  },
  coperate_section: {
    padding: "50px 50px 50px 50px",
    "@media (max-width: 600px)": {
      padding: "35px",
    
    }
  },
  coperate_btn: {
    height: "40px",
    width: "150px",
    fontSize: "13px",
    color: "#62AF4B",
    fontFamily: "Montserrat",
    "@media (max-width: 600px)": {
      height: "10px",
    
    }
  },
  services_coperate_btn:{
    height: "40px",
    width: "150px",
    fontSize: "13px",
    color: "#62AF4B",
    fontFamily: "Montserrat",
    "@media (max-width: 600px)": {
      marginLeft:"10%",
    
    }
  },
  msg_icon: {
    height: "15px !important",
    paddingLeft: "10px",
  },
  input: {
    //border:"solid 1px rgba(0, 0, 0, 0.42)",
    transition: "border-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",

    display: "flex !important",
    width: "480px",
    marginTop: "10px",
    backgroundColor: "white",
    height: "48px",
    border: "1px solid #BCC0D5",
    borderRadius: "9px",

    "&:before": {
      borderBottom: "0px !important",
      color: "#BCC0D5",
    },
    "&:after": {
      borderBottom: "0px !important",
    },
    "&:hover": {
      border: "1px solid #4F61C1",
    },
    "&:focus": {
      border: "1px solid #4F61C1",
    },
    "@media (max-width: 600px)": {
      width: "110%",
    
    },
    "@media (max-width: 320px)": {
      width: "110%",
    
    }
  },

  login: {
    width: "480px",
    height: "48px",
    color: "white",
    background: "#131C4C no-repeat",
    borderRadius: "9px",
    cursor: "pointer",
    "@media (max-width: 600px)": {
      
   width:"110%",
   
    },
    "@media (max-width: 400px)": {
      width:"110%",
     
    }
  },
  services_welcome:{
    "@media (max-width: 600px)": {
      marginLeft:"20px"
      
      }
  },
  heading_welcome:{
    "@media (max-width: 600px)": {
    fontSize:"50px",
    fontWeight:"600px"
      
      }
  },

  allm:{
    "@media (max-width: 600px)": {
     marginTop:"20px"
     
     }
  },
  extra_login: {
    display: "flex",
    gap: "70px",
    maxWidth: "480px ",
    "@media (max-width: 600px)": {
      gap: "10%",
      // maxWidth: "90% ",
  }
  },
  share: {
    width: "140px",
    "@media (max-width: 600px)": {
      // width: "6.5rem",
      width:"130%"
    },
    "@media (max-width: 320px)": {
      // width: "4rem",
      width:"130%"
    }
  },
  share_style: {
    gap: "35px",
  },

  extra_login_btn: {
    width: "100%",
    backgroundColor: "black",
    color: "white",
    height: "32px",
  },
  flow: {
    backgroundColor: "#131C4C",
    color: "white",
  },
  services: {
    textAlign: "center",
    fontSize: "38px",
    fontWeight: "700",
    fontFamily: "Montserrat",
    marginTop: "30px",
    "@media (max-width: 600px)": {
      fontSize: "26px",
      fontWeight: "600",
  
  }
  },
  services_desc: {
    display: "flex",
    padding: "50px",
    fontFamily: "Montserrat;",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  ht: {
    maxWidth: "1280px",
    
    margin: "auto",
  },
  ht1: {
    maxWidth: "1280px",
    margin: "auto",
    boxShadow: "0px 2px 2px -6px #0000001a",
  },
  // services_desc_pur: {
  //   display: "flex",
  //   padding: "50px",
  //   fontFamily: "Montserrat;",
  //   justifyContent: "space-between",
  //   "@media (max-width: 600px)": {
  //     flexDirection:"column"
  
  // }
  // },
  services_heading: {
    fontWeight: "700",
    fontSize: "18px",
    fontFamily: "Montserrat;",
    paddingRight: "35px",
    paddingBottom: "5px",
    wordBreak: "keep-all",
    color: "#131C4C",
    opacity: "1",
    "@media (max-width: 600px)": {
      marginTop:"60px",
      marginLeft:"50px",
      fontSize: "16px",
      width:"147px"
   
   }
  },
  services_headingI: {
    fontWeight: "700",
    fontSize: "18px",
    fontFamily: "Montserrat;",
    paddingRight: "35px",
    paddingBottom: "5px",
    wordBreak: "keep-all",
    color: "#131C4C",
    opacity: "1",
    "@media (max-width: 600px)": {
     marginTop:"50px",
     marginLeft:"50px",
     fontSize: "16px",
     width:"147px"
  
  }

  },
  iconed: {
    paddingTop: "10px",
    "@media (max-width: 600px)": {
      paddingTop: "5px",
  
  }
  },
  flow_heading: {
    fontWeight: "700",
    fontSize: "18px",
    fontFamily: "Montserrat",
    "@media (max-width: 600px)": {
 marginLeft:"50px",
 
 marginTop:"20px",
 fontSize: "16px",
 width:"147px",
   }
  },
  askQuestion:{
    "@media (max-width: 600px)": {
    display:"flex",
  justifyContent:"center"
  }
  },
  imgAsk:{
    "@media (max-width: 600px)": {
    width:"50%"
    
    }
  },
  purpose: {
   marginTop:"80px",
   marginLeft:"80px",
   marginRight:"50px"
  },
  purpose_heading: {
    fontWeight: "600",
    fontSize: "23px",
    fontFamily: "Montserrat",
  },
  asked_heading: {
    fontSize: "40px",
    fontWeight: "700",
    fontFamily: "Montserrat;",
    "@media (max-width: 600px)": {
      fontSize: "25px",
      fontWeight: "700",
      color:"#131C4C",
      marginTop:"30px",
      marginBottom:"20px"
  }
  },
  freq_heading: {
    fontWeight: "700",
    padding: " 10px",
    fontFamily: "Montserrat;",
  },
  freq_desc: {
    /*
        backgroundColor: "#131C4C",*/
    color: "white",
  },
  freq_list: {
    backgroundColor: "#F2F8FD",
    "&:hover": {
      backgroundColor: "#F2F8FD",
      marginRight:"35px"
    },
  },

  frq: {
    fontFamily: "Montserrat !important",
    color: "#131C4C !important",
    fontSize: "24px",
    fontWeight: "700",
  },
  services_content: {
    wordBreak: "break-all",
  },
  services_details: {
    paddingRight: "30px",
    wordBreak: "break-all",
    color: "grey",
    fontSize: "15px",
    wordBreak: "keep-all",
    paddingTop: "5px",
  },
  package: {
    height: "90px",
    marginBottom: "10px",
    "@media (max-width: 600px)": {
      marginTop: "40px",
     height:"80px"
  
  }
  },
  img_box:{
    "@media (max-width: 600px)": {
      
      width:"50px"
  
  }
  },
  upper_portion:{
    "@media (max-width: 600px)": {
    display:"flex",
    justifyContent:"flex_start",
  }
  },
  upper_flow_portion:{
    "@media (max-width: 600px)": {
    display:"flex",
  justifyContent:"flex_start",
  marginTop:"50px"
  }
  },
  flow_package: {
    height: "80px",
    marginBottom: "10px",
  },
  choose_img: {
    width: "80%",
  },
  askedQuest: {
    backgroundColor: "#F2F8FD",
    padding: "10px",
  },
  payment: {
    background: " url(./Images/bg-3.png)",
  },
  Allservice: {
    display: "grid",
    gap: "20px",
    "@media (max-width: 600px)": {
marginLeft:"5%",
width:"90%"
    }
  },
  service_bg: {
    paddingLeft: "50px",
    width: "600px",
    paddingBottom: "40px",
    height: "500px"
  },
  btn_dash: {
    width: "100%",
    borderRadius: "9px",
    border: "1px solid #BCC0D5;",
    height: "38px",
    cursor: "pointer",
    background: "#FFFFFF",
  },
  para_dash: {
    fontSize: "10px",
    padding: "5px",
    fontFamily: "Montserrat",
    color: "#131C4C",
  },
  service_btn: {
    display: "flex",
    justifyContent: "space-between",
    height: "48px",
    //width:"300px",
    backgroundColor: "#141C4B",
    border: "1px solid #BCC0D5",
    borderRadius: "9px",
    color: "white",
    textAlign: "left",
    padding: "15px",
    cursor: "pointer",
    "@media (max-width: 600px)": {
      width:"90%",
      marginLeft:"5%"
  }
  },
  service_image: {
    textAlign: "right",
  },
  service_img_dash: {
    textAlign: "right",
    color: "#141C4B",
    marginLeft: "70px",
  },
  section_start: {
    padding: "50px;",
  },
  footer_back: {
    backgroundColor: "#131C4C",
    color: "white",
  },
  footer_head: {
    // marginLeft: "50px",
    marginTop: "20px",
    fontWeight: "700",
    fontFamily: "Montserrat",
    fontSize: "36px",
    "@media (max-width: 600px)": {
      display:"flex",
      justifyContent:"space-around"
  
  }
  },
  footer_desc: {
    display: "block !important",
    fontSize: "13px",
    lineHeight: "24px",
    color: "#8F92A3",
  },
  footer_descbtn: {
    display: "block !important",
    fontSize: "13px",
    lineHeight: "24px",
    color: "#8F92A3",
    textTransform:'none',
    paddingLeft:'0px !important'
  },
  footer_desc1: {
    display: "block !important",
    fontSize: "10px",
    lineHeight: "18px",
  },
  descfot: {
    color: "#8F92A3 !important",
    fontSize: "13px",
  },
  footer_img: {
    height: "40px",
    "@media (max-width: 600px)": {
      marginRight: "-14px"
  
  }
  
  },
  footer_img_small: {
    height: "30px",
  },
  country:{
  
    
    "@media (max-width: 600px)": {
      display:"flex",
      flexDirection:"row",
      flexWrap: 'wrap'
  }
  },
  single_country:{
    "@media (max-width: 600px)": {
     marginRight:"40px",
      flexWrap: 'wrap'
  
  }
  },
  single_service:{
    "@media (max-width: 600px)": {
      marginRight:"20px",
       flexWrap: 'wrap',
   
   }
  },
  our_service:{
    "@media (max-width: 600px)": {
      display:"flex",
      flexDirection:"row",
      flexWrap: 'wrap',
  }
  },
  field_margin:{
    "@media (max-width: 600px)": {
marginTop:"20px",

  }
  },
  small: {
    display: "flex",
    marginTop: "10px",
  },
  smallContent: {
    padding: "5px",
    fontSize: "13px",
  },
  errorVal: {
    color: "Red",
    fontSize: "small",
  },
  personel: {
    marginTop: "5px",
  },
  das: {
    width: "30%",
  },
  dashb: {
    display: "flex",
    justifyContent: "center",
    marginTop: "70px",
  },
  dashbtext: {
    display: "flex",
    justifyContent: "center",
  },
  dbtn: {
    height: "40px",
    width: "150px",
    color: "#FFFF",
    backgroundColor: "#141C4B",
    cursor: "pointer",
  },
  drp: {
    fontFamily: "Montserrat !important",
    color: "#6E759A !important",
    fontSize: "13px !important",
  },
  sepa: {
    maxWidth: "1280px",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
  },
  separt: {
    width: "100px",
    paddingTop: "15px",
  },
  ared: {
    width: "15px",
    paddingTop: "3px",
  },
  or_align:{
    display:"flex",
    justifyContent:"center",
   marginLeft:"70px",
   "@media (max-width: 600px)": {
      marginLeft:"30px",
  
  }
  },

});

export default AuthenticationStyle;
