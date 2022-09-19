import { height } from "@mui/system"

const SendPackageStyle = (theme) => ({
    section_start: {

        fontFamily: "Montserrat !important"
    },
    heading: {
        fontWeight: "700",
        fontSize: "20px",
        display: "flex",
        "@media (max-width: 600px)": {
            fontWeight: "500",
        
        }
    },
    icon: {
        marginRight: "15px",
        height: "49px",
        width: "49px ",
        "@media (max-width: 600px)": {
            marginRight: "5px",
            height: "15px",
            width: "15px ",
        // marginLeft:"20px"
        }
    },
    send_img: {
        height: "87px",
        cursor: "pointer",
        "@media (max-width: 600px)": {
            width:"30%"
        
        }
    },
    accomo_send_img: {
        height: "87px",
        cursor: "pointer",
        "@media (max-width: 600px)": {
            width:"25%"
        
        }
    },
    send_bg: {
        paddingBottom: "20px",
        maxWidth: "1280px",
        margin: "auto"
    },
    send_heading: {
        fontSize: "44px",
        fontWeight: "bold",
        marginTop: "20px",
        "@media (max-width: 600px)": {
            fontSize: "24px",
        color:"#131C4C"
        }
    },
    send_header: {
        marginTop: "45px",
        "@media (max-width: 600px)": {
            marginRight:"10%"
        
        }
    },
    accomo_send_header: {
        marginTop: "45px",
        "@media (max-width: 600px)": {
            marginRight:"10%",
            marginTop: "35px",
        }
    },
    secn: {
        paddingTop: "40px",
        /* background: " url(./Images/rt.png)",*/

    },
    errors: {
        color: "Red",
        fontFamily: "Montserrat !important"
    },
    activated: {
        background: "url(./Images/banner.png)",
        height: "400px",
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backdropFilter: 'blur(3px)'
    },
    send_label: {
        fontFamily: "Montserrat !important",
        fontSize: "24px",
        color: "#131C4C",
        fontWeight: "700",
        paddingBottom: "10px"
    },
    dropnew: {

    },
    will: {
        color: "#131C4C",
        fontSize: "20px",
        fontWeight: 300,
        fontFamily: "Montserrat !important",
        "@media (max-width: 600px)": {
            fontSize: "10px",
        
        }
    },
    req: {
        marginTop: "10px",
        display: "flex",
        flxDirection: "row",
        margin: "revert !important",
        paddingTop: "20px",
        fontSize: "18px !important",
        color: '#131C4C',
        flexWrap: 'wrap'

    },
    bike: {
        width: "50px !important",
        height: "50px !important"
    },

    del_icon: {
        
        color: "#131C4C",
    },
    reqi:{
        paddingTop:"17px",
        "@media (max-width: 600px)": {
         
            paddingBottom:"17px",
        }
    },
    sedan: {
        height: "60px",
        opacity: '0.54'
    },
    content: {
        paddingTop: "10px"
    },
    content1: {
        paddingTop: "70px"
    },
    content4: {
        paddingTop: "30px"
    },
    two_wheel: {
        margin: 'revert',
        paddingLeft: '20px',
        paddingRight: '10px'
    },
    two_wheel_inactive: {
        margin: 'revert',
        paddingLeft: '20px',
        paddingRight: '10px',
        opacity: '0.54',
        fontWeight: '300 !important'
    },
    biked_inactive: {
        opacity: '0.54',
    },

    revert: {
        display:"flex",
        marginTop:"30px",
        flexWrap: "wrap"
    },
    weightGroup: {
        display: "flex",
        gap: "10px",

    },
    weightGroupselected: {
        display: "flex",
        gap: "10px",

    },
    weightButton: {
        minWidth: "150px"
    },
    field: {
        border: "1px solid",
        color: "grey",
        width: "100%",
        padding: "10px"
    },
    fieldInput: {
        borderBottom: "none"
    },
    timeForm: {
        height: "56px",


        '&:focus': {
            backgroundColor: "#131C4C",
            color: "white"
        },
        '&:selected': {
            backgroundColor: "red",
            color: "white"
        }
    },
    total: {
        textAlign: "center"
    },
    price_cont: {
        fontSize: "30px"
    },
    price_img: {
        height: "20px"
    },
    price_tag: {
        fontSize: "35px"
    },
    service_btn: {
        height: "74px",
        width: "100%",
        backgroundColor: "#131C4C",
        border: "1px solid #BCC0D5",
        borderRadius: "9px",
        color: "white",
        padding: "24px",
        cursor: "pointer",
        textAlign: "center",
        fontFamily: 'Montserrat',
        fontSize: '22px',
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    documents: {
        marginTop: "10px",
    },
    documentleft: {
        marginTop: "10px",
        marginLeft:"10px"
    },
    documented: {
        marginTop: "10px",
        marginBottom:"10px"
    },
    document_btn: {
        border: "1px solid #BCC0D5 !important",
        borderRadius: "9px !important",
        color: "#131C4C !important",
        textTransform: "none !important",
        height: '62px',
        padding: '23px 22px !important',
        fontFamily: "Montserrat !important",
        fontSize: '15px'
    },
    vat: {
        fontSize: "15px",
        color: "#545A77",
        paddingBottom: "50px",
        paddingTop: "17px",
        paddingLeft: '100px',
        lineHeight: '24px',
        "@media (max-width: 600px)": {
            paddingLeft: '0px',
        
        }
    },
    newbg: {
        background: "url(./Images/banner.png)",
        height: "420px",
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backdropFilter: 'blur(3px)'
    },
    newbgM: {
        background: "url(../Images/banner.png)",
        height: "420px",
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backdropFilter: 'blur(3px)'
    },
    ht: {
        maxWidth: "1280px",
        margin: "auto",
        paddingLeft: "50px",
        "@media (max-width: 600px)": {
            paddingLeft: "20px",
        }
    },
    documentsInput: {
        marginRight: "10px"

    },
    ared: {
        width: "15px",
        paddingTop: "3px"
    },
    locationdropdown: {

    },
    location: {
        width: "100%"
    },
    mainTab: {
        display: "flex",

        fontWeight: "600 ",
        fontSize: "27px ",
        "@media (max-width: 600px)": {
            fontWeight: "200 ",
            fontSize: "12px ",
            marginTop:"5%"
       
        }
    },
    mainTab2: {
        display: "flex",
        paddingTop: "5px",
        fontWeight: "300 ",
        fontSize: "20px ",
        color: '#AFB2C2',
        '& b': {
            color: '#fff'
        },
        "@media (max-width: 600px)": {
            fontSize: "10px ",
        
        }
    },
    tab2: {
        paddingTop: "5px"
    },
    pending: {
        display: "flex",
        justifyContent: "center"
    },
    pendr: {
        width: "400px"
    },
    content5: {
        paddingTop: "50px",
        fontWeight: "100",
        color: "#6E759A",
        paddingBottom: "50px",
        "@media (max-width: 600px)": {
            width:"80%",
            marginLeft:"10%"
        }

    },
    contnew: {
        justifyContent: "center",
        fontSize: '12px',
        fontWeight: 300,

    },
    tabList: {
        height: '120px',
        width:"100%",
        "@media (max-width: 600px)": {
            height: '70px',
        // marginLeft:"5%",
        width:"90%",
        }
    },
    tabContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "@media (max-width: 600px)": {
        //  marginLeft:"20px",
        //  marginRight:"20px",
        justifyContent: 'flex-start',
        }
    },
    tabItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "@media (max-width: 600px)": {
            height:"70px !important",
            justifyContent: 'flex-start',
            
        }
    },
    alignButton:{
        display: 'flex',
        justifyContent: 'center',
  
        "@media (max-width: 600px)": {
            
            justifyContent: 'flex-start',
            
        }
    },
    mainInactive: {
        color: '#4A4F6D !important',
        '& b': {
            color: '#131C4C !important'
        }
    },
    four_wheel: {
        margin: 'revert',
        fontSize: '18px',
        fontWeight: 300,
        paddingLeft: '10px',
        opacity: '0.54'
    },
    four_wheel_active: {
        margin: 'revert',
        fontSize: '18px',
        fontWeight: 600,
        paddingLeft: '10px',
    },
    searchInput: {
        borderRadius: '9px !important',
        fontFamily: "Montserrat !important",
        fontSize: '13px',
        color: '#131C4C !important',
        height: '62px',
        fontWeight: 400,
        '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #BCC0D5 !important',
        },
        "& input::placeholder": {
            color: "#131C4C",
            opacity: '1'
        },
    },
    timeSelector: {
        '& .PrivateNotchedOutline-root': {
            paddingRight: '0px !important'
        }
    },
    timeGroup: {
        marginRight: '-14px',
        justifyContent: 'end'
    },
    toggleButton: {
        marginRight: '-10px'
    },
    popupContainer: {
        '& .MuiPaper-root': {
            padding: '26px 24px'
        }
    },
    itemLabel: {
        fontFamily: "Montserrat !important",
        fontSize: "24px",
        color: "#131C4C",
        fontWeight: "700",
        paddingBottom: "6px"
    },
    divider: {
        borderBottom: '1px solid #131C4C',
        paddingTop: '80px',
        marginBottom: '70px',
        opacity: '0.43'
    },
    totalPrice: {
        fontSize: '30px',
        fontWeight: 600,
        color: '#131C4C',
        textAlign: 'center',
        marginBottom: '50px'
    },
    totalPriceCount: {
        fontSize: '40px'
    },
    totalPriceUnit: {
        fontSize: '18px',
        fontWeight: 400
    },
    calendarInput: {
        borderRadius: '9px !important',
        fontFamily: "Montserrat !important",
        fontSize: '13px',
        color: '#131C4C !important',
        height: '62px',
        fontWeight: 400,
        '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #BCC0D5 !important',
        },
        "& input::placeholder": {
            color: "#131C4C",
            opacity: '1',
            fontWeight: 600
        },
        '& .MuiOutlinedInput-input': {
            borderLeft: '1px solid #BCC0D5',
            height: '25px',
        },
        '& .MuiInputBase-input': {
            padding: '18px 20px !important'
        },
        '& .MuiInputAdornment-positionEnd': {
            height: '100%',
            maxHeight: '100%',
            background: '#F9F9F9',
            position: 'absolute',
            right: 0,
            borderTopRightRadius: '9px',
            width: '70px',
            borderBottomRightRadius: '9px',
            marginLeft: '53px',
            color: '#fff',
            '& img': {
                display: 'block',
                margin: '0 24.5px'
            }
        }
    },
    selectDateText: {
        fontFamily: "Montserrat !important",
        fontSize: '15px !important',
        fontWeight: 400,
        padding: '0 10px'
    },
    orSeparator: {
        fontFamily: "Montserrat !important",
        fontSize: '15px !important',
        fontWeight: 400,
        padding: '0 25px',
        color: "#131C4C"
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
    pickUpDateContainer: {
        '& .react-datepicker-wrapper': {
            width: 'fit-content'
        }
    },
    weightSelectorButton: {
        border: "1px solid #BCC0D5 !important",
        borderRadius: "9px !important",
        color: "#131C4C !important",
        textTransform: "none !important",
        height: '62px',
        padding: '23px 22px !important',
        fontFamily: "Montserrat !important",
        fontSize: '15px',
        width: '100%'
    },
    weightWarning: {
        fontSize: '15px',
        color: '#6E759A',
        fontWeight: 400,
        paddingTop: '14px'
    },
    secureParcelWarning: {
        fontSize: '12px',
        fontWeight: 400,
        color: '#6E759A',
        marginTop: '6px',
    },
    secureParcelInfo: {
        fontSize: '12px',
        fontWeight: 500,
        color: '#131C4C',
        marginTop: '12px',
    },
    prefer:{
        color:"#131C4C",
        fontWeight:"600",
        fontSize:"15px",
        // "@media (max-width: 600px)": {
        // marginRigth:"70%"
        
        // }
    },
    apply:{
        color:"#6E759A",
        fontSize:"12px"
    },
    courier:{
    
    },
    preferCourierMethod: {
        display:"inline",
        "@media (max-width: 600px)": {
           display:"block"
        
        }
    }
})
export default SendPackageStyle