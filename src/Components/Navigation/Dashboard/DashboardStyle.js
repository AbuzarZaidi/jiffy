const TrackorderStyle = theme => ({
  section_start: {
    // minWidth:"600px",
    // width:"100%"
  },
  heading: {
    fontWeight: '700',
    fontSize: '20px',
    fontFamily: 'Montserrat !important',
    "@media (max-width: 600px)": {

fontSize: '18px',
color:"#131C4C"
    }

  },
  icon: {
    marginRight: '10px',
    height: '34px',
  },
  req: {
    marginTop: '10px',
    display: 'flex',
    flxDirection: 'row',
  },
  del_icon: {
    paddingTop: '10px !important',
    color: 'rgb(133, 133, 133)',
  },
  dashedWidth:{
    paddingLeft:"6em",
        "@media (max-width: 600px)": {
          paddingLeft:"1px"
    }
  },
  sedan: {
    height: '45px',
  },
  content: {
    paddingTop: '10px',
  },
  two_wheel: {
    color: 'rgb(133, 133, 133)',
  },
  courier: {
    cursor: 'pointer',
    fontSize: '14px',
    paddingLeft: '5px',
  },
  deliveryNote: {
    border: 'solid',
  },
  pending: {
    display: 'flex',
    justifyContent: 'center',
  },
  pendingInfo: {
    display: 'block',
    textAlign: 'center',
    fontSize: '30px',
  },
  lineNew: {
    marginLeft: '9px',
    height: '78px',
  },
  lineDot: {},
  imgLine: {
    height: '85px',
    marginTop: '-5px',
  },
  header: {
    color: '#9A9EB2',
    marginBottom: '20px',
    marginTop: '20px',
  },
  secn: {
    paddingTop: '59px',
    background: 'url(./Images/banner.png)',
    height: '400px !important',
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  send_header: {
    marginTop: '18px',
    marginLeft:"20px",
 
  },

  ht: {
    maxWidth: '1280px',

    // margin: 'auto',
    // paddingLeft: "20px",
    paddingTop: '27px',
    marginBottom: '10px',
    "@media (max-width: 600px)": {
      
}
    
  },

  headerFinal: {
    marginBottom: '20px',
    marginTop: '20px',
    border: '2px solid black',
  },
  contact: {
    marginBottom: '20px',
    marginTop: '20px',
  },
  cInfo: {
    display: 'inline-block',
    marginLeft: '20px',
  },
  tracked: {
    cursor: 'pointer',
  },
  deliveryIn: {
    width: '100%',
    border: '1px solid #9A9EB2',
    height: '100%',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  Invoiced: {
    margin: '0px',
  },
  stepperIn: {
    backgroundColor: '#F9F9F9',
    height: '75px',
    padding: '26px 34px',
    borderRadius: '10px',
  },
  btnInvoice: {
    border: '1px solid #131C4C',
    padding: '15px 22px ',
    borderRadius: '31px',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    color: '#131C4C',
    cursor: 'pointer',
    float: 'right',
    fontSize: '13px',
    fontWeight: 300,
  },
  stepperDownload: {
    textAlign: 'right',
  },
  stepped: {
    maxWidth: '35px !important',
    paddingTop: '12px',
  },
  newbg: {
    background: 'url(./Images/banner.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'top',
    backdropFilter: 'blur(3px)',
  },
  allorder: {
    backgroundColor: '#131C4C',
    color: 'white',
    width: '130px',
    height: '40px',
    borderRadius: '10px',
    fontWeight: '800',
    cursor: 'pointer',
  },
  pend: {
    width: '400px',
  },
  stepperOut: {
    marginTop: '10px',
  },
  stepper: {
    display: 'flex',
  },
  stepper3: {
    display: 'flex',
    padding: '30px 0px',
    borderBottom: 'solid 1px #131C4C',
  },
  dpick: {
    paddingLeft: '10px',
    fontSize: '18px',
    fontWeight: 600,
    fontFamily: 'Montserrat',
    color: '#131C4C',
    lineHeight: '45px',
  },
  dpickData: {
    paddingLeft: '10px',
    fontSize: '20px',
    fontWeight: 300,
    fontFamily: 'Montserrat',
    color: '#131C4C',
  },
  modify: {
    height: '62px !important',
    border: '1px solid #131C4C',
    borderRadius: '31px',
    opacity: '1',
    background: '#ffff',
    color: '#131C4C',
    fontSize: '16px !important',
    fontWeight: '300 !important',
    width: '225px',
    marginRight: '10px',
    cursor: 'pointer',
  },
  lpick: {
    paddingLeft: '10px',
    fontSize: '18px',
    fontWeight: 600,
    fontFamily: 'Montserrat',
    color: '#131C4C',
    lineHeight: '45px',
  },
  lpickData: {
    paddingLeft: '10px',
    fontSize: '20px',
    fontWeight: 300,
    fontFamily: 'Montserrat',
    color: '#131C4C',
  },
  ddpick: {
    height: '185px !important',
  },
  stepper1: {
    display: 'flex',
    borderBottom: 'solid 1px #9A9EB2',
    padding: '30px 0',
  },
  courierContactContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  courierContact: {
    marginLeft: '10px',
  },
  courierName: {
    fontSize: '16px',
    fontWeight: 600,
    fontFamily: 'Montserrat',
    color: '#131C4C',
    lineHeight: '25px',
  },
  courierNumber: {
    fontSize: '16px',
    fontWeight: 300,
    fontFamily: 'Montserrat',
    color: '#131C4C',
  },
  actionButton: {
    border: '1px solid rgba(19, 28, 76, 0.22)',
    padding: '20px 60px ',
    borderRadius: '31px',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    color: '#131C4C',
    cursor: 'pointer',
    marginRight: '10px',
    '& img': {
      marginRight: '10px',
    },
  },
  courierDetails: {
    display: 'flex',
    paddingBottom: '30px !important',
    borderBottom: 'solid 1px #9A9EB2',
  },
  detailsContainer: {
    padding: '30px 0',
    borderBottom: 'solid 1px #9A9EB2',
  },
  detailsItem: {
    fontSize: '16px',
    fontWeight: 400,
    color: '#767A93',
    '& span': {
      fontWeight: 600,
      color: '#131C4C',
    },
  },
  courierInfo: {
    fontSize: '24px',
    fontWeight: 600,
    color: '#131C4C',
  },
  courierDetail: {
    fontSize: '20px',
    fontWeight: 300,
  },
  courierInfoContainer: {
    borderBottom: '1px solid #9A9EB2',
    padding: '30px 0',
  },
  courierTitle: {
    fontSize: '18px',
    fontWeight: 600,
    fontFamily: 'Montserrat',
    color: '#131C4C',
  },
  stepperItem: {
    fontSize: '16px',
    fontWeight: 300,
    fontFamily: 'Montserrat',
    color: '#767A93',
  },
  stepperBold: {
    fontWeight: 500,
    color: '#131C4C',
  },
  orderStatus: {
    display: 'flex',
  },
  invoiceContent: {
    padding: '26px 40px 30px 40px',
    width: '100%',
  },
  userIcon: {
    marginBottom: '40px',
  },
  modifyButton: {
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: 'Montserrat',
    color: '##131C4C',
    cursor: 'pointer',
  },
  filterContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& .react-datepicker-wrapper': {
      width: 'fit-content',
    },
    '& .MuiInputBase-root': {
      padding: '0px 20px',
      background: 'transparent',
      borderRadius: '31px',
      border: '1px solid #A9ABB7',
      fontFamily: 'Montserrat !important',
      fontSize: '13px',
      fontWeight: 300,
      color: '#131C4C !important',
    },
  },
  datePicker: {
    '& .MuiOutlinedInput-input': {
      marginRight: '53px',
    },
    '& .MuiInputAdornment-positionEnd': {
      height: '100%',
      maxHeight: '100%',
      background: '#131C4C',
      position: 'absolute',
      right: 0,
      borderTopRightRadius: '31px',
      width: '59px',
      borderBottomRightRadius: '31px',
      marginLeft: '53px',
      color: '#fff',
      '& img': {
        display: 'block',
        margin: '0 18.5px',
      },
    },
  },
  filterText: {
    fontSize: '16px',
    color: '#131C4C',
    fontWeight: 300,
    padding: '0px 17px 0px 5px',
    "@media (max-width: 600px)": {
      fontSize: '14px',
      fontWeight: 600,

      width:"100px",
      color:"#131C4C",
      padding: '0px 25px 0px 1px',
          }
  },
  calender: {
    padding: '20px',
    borderRadius: '16px',
    
   
    '& .react-datepicker__navigation--previous': {
      left: '20px',
      top: '20px',
    },
    '& .react-datepicker__navigation--next': {
      right: '20px',
      top: '20px',
    },
    '& .react-datepicker__month-container': {
      '& .react-datepicker__header': {
        background: '#fff',
        '& .react-datepicker__current-month': {
          paddingBottom: '10px',
        },
      },
      '& .react-datepicker__day--keyboard-selected': {
        backgroundColor: '#EBE3CA',
        color: '#000',
      },
      '& .react-datepicker__day--in-selecting-range': {
        backgroundColor: '#EBE3CA',
      },
      '& .react-datepicker__day--in-range': {
        backgroundColor: '#EBE3CA',
        color: '#000',
      },
    },
    "@media (max-width: 600px)": {
      marginRight: "6px",
      fontWeight:500,
      color:"#131C4C",
      
          }
  },
});

export default TrackorderStyle;
