const TrackorderStyle = (theme) => ({
    section_start: {

    },
    heading: {
        fontWeight: "700",
        fontSize: "20px",
        fontFamily: "Montserrat !important",
    },
    icon: {
        marginRight: "10px",
        height: "34px"
    },

    req: {
        marginTop: "10px",
        display: "flex",
        flxDirection: "row",

    },
    del_icon: {
        paddingTop: "10px !important",
        color: "rgb(133, 133, 133)"
    },
    sedan: {
        height: "45px"
    },
    content: {
        paddingTop: "10px"
    },
    two_wheel: {
        color: "rgb(133, 133, 133)"
    },
    courier: {
        cursor: "pointer",
        fontSize: '14px',
        paddingLeft: '5px'
    },
    deliveryNote: {
        border: "solid"
    },
    pending: {
        display: "flex",
        justifyContent: "center",
        paddingTop:"50px"
    },
    pendingInfo: {
        display: "block",
        textAlign: "center",
        fontSize: "30px"
    },
    lineNew: {
        marginLeft: "9px",
        height: "78px"
    },
    lineDot: {

    },
    imgLine: {
        height: "85px",
        marginTop: '-5px'
    },
    header: {
        color: "#9A9EB2",
        marginBottom: "20px",
        marginTop: "20px",

    },
    secn: {
        paddingTop: '59px',
        background: "url(./Images/banner.png)",
        height: "400px !important",
        backgroundRepeat: 'no-repeat, repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    send_header: {
        marginTop: "18px"
    },
    ht: {
        maxWidth: "1280px",
        margin: "auto",
        paddingLeft: "50px",
        paddingTop: '27px',
        "@media (max-width: 600px)": {
           marginLeft:"-50px"
        
        },
    },
    alignContent:{
       
        marginLeft: "5%",
        "@media (max-width: 1400px)": {
            marginLeft: "30px",
        
        },
    },
    httabs: {
        maxWidth: "1280px",
        margin: "auto",
        // marginLeft: "70px",
        
        // marginBottom:"130px",
        borderRadius:"30px",
        // paddingLeft: "50px",
        // paddingTop: '27px',
         marginTop: '27px',
         "@media (max-width: 1450px)": {
            maxWidth: "1240px",
            // marginLeft: "30px",
            marginBottom:"100px",
        },
        "@media (max-width: 1200px)": {
            maxWidth: "1100px",
            // marginLeft: "30px",
        
        },
        "@media (max-width: 600px)": {
            maxWidth: "680px",
            paddingLeft: "10px",
            marginLeft: "-10px",
        }
    },
    innerhtt:{
        borderRadius:"60px",
    },
    alignTrack:{
        marginLeft: "150px",
        "@media (max-width: 1400px)": {
            marginLeft: "50px",
        
        },
        "@media (max-width: 600px)": {
            paddingLeft: "10px",
        
        }
    },
    httab:{
        padding:"25px 15px",
        "@media (max-width: 600px)": {
            marginRight:"10px"
        }
    },
    headerFinal: {

        marginBottom: "20px",
        marginTop: "20px",
        border: "2px solid black"
    },
    contact: {
        marginBottom: "20px",
        marginTop: "20px"
    },
    cInfo: {
        display: "inline-block",
        marginLeft: "20px"
    },
    tracked: {
        cursor: "pointer"
    },
    deliveryIn: {
        width: "100%",
        border: "1px solid #9A9EB2",
        height: "100%",
        borderRadius: "10px",
        marginBottom: "20px"
    },
    deliveryInUn: {
        width: "100%",
        border: "1px solid #9A9EB2",
        height: "100%",
        borderRadius: "10px",
        marginBottom: "20px",
        display : "none !important"
    },

    Invoiced: {
        margin: "0px",
        
    },
    download: {
        margin: "0px !important",
        display:"none !important",
        width:"500px !important"
        
    },
    stepperIn: {
        backgroundColor: "#FFFFFF 0% 0% no-repeat padding-box",

        padding: "26px 36px",
        borderRadius: "10px",
        display:"flex",
        // justifyContent:"space-bet"

    },
    blueSec:{
        background: "#131C4C 0% 0% no-repeat padding-box",
        opacity: "1",
        height:"44px",
        padding: "10px",
        "@media (max-width: 600px)": {
            padding: "30px",
        
        }
    },
    blueSecDesc:{
        background: "#131C4C 0% 0% no-repeat padding-box",
        opacity: "1",
        height:"44px",
        padding: "10px",
        display: "flex"
    },
    blueSecDesc1:{
        background: "#131C4C 0% 0% no-repeat padding-box",
        opacity: "1",
        height:"60px",
        padding: "10px",
        display: "flex"
    },
    whiteSecDesc:{
        opacity: "1",
        height:"auto",
        padding: "10px",
        display: "flex",
        "@media (max-width: 600px)": {
           flexDirection:"coloumn"
        
        }
    },
    radio: {
        '&$checked': {
            color: '#131C4C !important'
        }
    },
    checked: {},
    radioLabel: {
        marginRight: '40px !important',
        '& .MuiFormControlLabel-label': {
            fontSize: '18px',
            color: '#131C4C',
            fontWeight: 600,
            fontFamily: 'Montserrat !important',
        }
    },
  
    whiteSec:{
        color:"#FFFF",
        fontSize:"18px",
       
    },
    colon:{
        marginTop: "5px"
    },
    sec1:{
        marginTop:"30px",
        display:"flex",
        "@media (max-width: 600px)": {
            flexDirection:"column"
        
        }
    },
    stamped:{
        color:"#131C4C",
        fontSize: '19px',
        fontWeight: 600,
    },
    thanked:{
        color:"#131C4C",
        fontSize: '14px',
        fontWeight: 600,
    },
    datePicker: {
        '& .MuiOutlinedInput-input': {
            marginRight: '53px'
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
                margin: '0 18.5px'
            }
        }
    },
    filterText: {
        fontSize: '16px',
        color: '#131C4C',
        fontWeight: 300,
        padding: '0px 17px 0px 5px'
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
                }
            },
            '& .react-datepicker__day--keyboard-selected': {
                backgroundColor: '#EBE3CA',
                color: '#000'
            },
            '& .react-datepicker__day--in-selecting-range': {
                backgroundColor: '#EBE3CA',
            },
            '& .react-datepicker__day--in-range': {
                backgroundColor: '#EBE3CA',
                color: '#000'
            }
        }

    },
    filterContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& .react-datepicker-wrapper': {
            width: 'fit-content'
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
        }
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
        textAlign: 'right'
    },
    stepped: {
        maxWidth: "35px !important",
        paddingTop: '12px'
    },
    newbg: {
        background: "url(./Images/banner.png)",
        height: "350px",
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backdropFilter: 'blur(3px)'
    },
    allorder: {
        backgroundColor: "#131C4C",
        color: "white",
        width: "130px",
        height: "40px",
        borderRadius: "10px",
        fontWeight: "800",
        cursor: "pointer"
    },
    pend: {
        width: "400px"
    },
    stepperOut: {
        marginTop: "10px"
    },
    stepper: {
        display: "flex"
    },
    stepper3: {
        display: "flex",
        padding: "30px 0px",
        borderBottom: "solid 1px #131C4C"
    },
    stepperFoot: {
        display: "flex",
        padding: "30px 0px",
        borderBottom: "solid 1px #131C4C",
        justifyContent:"center"
    },
    dpick: {
        paddingLeft: "10px",
        fontSize: '18px',
        fontWeight: 600,
        fontFamily: 'Montserrat',
        color: '#131C4C',
        lineHeight: '45px'
    },
    dpickData: {
        paddingLeft: "10px",
        fontSize: '20px',
        fontWeight: 300,
        fontFamily: 'Montserrat',
        color: '#131C4C',
        display: "flex",
//   flexWrap: "wrap",
        wordBreak: 'break-all',
        whiteSpace: 'nowrap',
        "@media (max-width: 600px)": {
            fontSize: '14px',
            fontWeight: 300,
            display: "flex",
            flexWrap: "wrap",
            wordBreak: 'break-all',
        whiteSpace: 'nowrap',
                }
    },
    modify: {
        height: "62px !important",
        border: "1px solid #131C4C",
        borderRadius: "31px",
        opacity: "1",
        background: "#ffff",
        color: "#131C4C",
        fontSize: "16px !important",
        fontWeight: "300 !important",
        width: "225px",
        marginRight: '10px',
        cursor: 'pointer'
    },
    lpick: {
        paddingLeft: "10px",
        fontSize: '18px',
        fontWeight: 600,
        fontFamily: 'Montserrat',
        color: '#131C4C',
        lineHeight: '45px',
    },
    lpickData: {
        paddingLeft: "10px",
        fontSize: '20px',
        fontWeight: 300,
        fontFamily: 'Montserrat',
        color: '#131C4C',
        display: "flex",
        flexWrap: "wrap",
        wordBreak: 'break-all',
        whiteSpace: 'nowrap',
        "@media (max-width: 600px)": {
            fontSize: '14px',
            fontWeight: 300,
            display: "flex",
            flexWrap: "wrap",
            textOverflow: "ellipsis",
                }
    },
    ddpick: {
        
        marginLeft: "15%",
        "@media (max-width: 1400px)": {
            marginLeft: "30px",
        
        },
    },
    stepper1: {
        display: "flex",
        borderBottom: "solid 1px #9A9EB2",
        padding: '50px 0',
       
    },
    courierContactContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    courierContactContainer1: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom:'10px'
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
        "@media (max-width: 600px)": {
            fontSize: '12px',
            fontWeight: 600,
                }
    },
    courierNumber: {
        fontSize: '16px',
        fontWeight: 300,
        fontFamily: 'Montserrat',
        color: '#131C4C'
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
            marginRight: '10px'
        }
    },
    courierDetails: {
        display: "flex",
        paddingBottom: "30px !important",
        borderBottom: "solid 1px #9A9EB2",
        "@media (max-width: 600px)": {
            display: "inline",
           
                }
    },
    docdesc:{
        marginTop:"1px",
        "@media (max-width: 600px)": {
            marginTop:"20px"
           
                }
    },
    detailsContainer: {
        padding: '30px 0',
        borderBottom: "solid 1px #9A9EB2",
        
    },
    detailsItem: {
        fontSize: '16px',
        fontWeight: 400,
        color: '#767A93',
        '& span': {
            fontWeight: 600,
            color: '#131C4C'
        }
    },

    courierInfo: {
        fontSize: '24px',
        fontWeight: 600,
        color: '#131C4C'
    },
    courierDetail: {
        fontSize: '20px',
        fontWeight: 300,
    },
    courierInfoContainer: {
        borderBottom: '1px solid #9A9EB2',
        padding: '30px 0'

    },
    courierTitle: {
        fontSize: '18px',
        fontWeight: 600,
        fontFamily: 'Montserrat',
        color: '#131C4C'
    },
    stepperItem: {
        fontSize: '16px',
        fontWeight: 300,
        fontFamily: 'Montserrat',
        color: '#767A93'
    },
    stepperBold: {
        fontWeight: 500,
        color: '#131C4C'
    },
    orderStatus: {
        display: "flex",
    },
    invoiceContent: {
        padding: "26px 40px 30px 40px",
        width: '100%'
    },
    userIcon: {
        marginBottom: '40px'
    },
    modifyButton: {
        fontSize: '14px',
        fontWeight: 600,
        fontFamily: 'Montserrat',
        color: '##131C4C',
        cursor: 'pointer'
    }
})
export default TrackorderStyle