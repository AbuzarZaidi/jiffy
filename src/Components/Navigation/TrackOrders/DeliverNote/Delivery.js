import { height } from "@mui/system";

const DeliveryStyle = (theme) => ({

    delivery: {
        width: "100%",
        border: "1px solid #131C4C",
        height: "100%",
        borderRadius: "21px",
        marginBottom: "20px",
        marginTop: '20px',
    },
    deliverySpace: {
        margin: "20px !important",
    },
    deliverySpace1: {
        padding: "42px !important",
        borderBottom: "1px solid #C1C4D1"
    },
    deliverySpace2: {
        textAlign: 'end'
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
    base:{
        width:"100px"
    },
    note: {
        textAlign: "center",
        fontSize: "25px !important",
        color: '#131C4C',
    },
    tabled: {
        width: "100%"
    },
    tabledtr: {
        display: "flex",
        gap: "50px",
        borderBottom: "1px solid #767A93"

    },
    notemain: {
        display: "flex"
    },
    download: {
        margin: "0px !important",
       
        
        
    },
    delDownload: {
        margin: "20px !important",
        display: "flex",
        justifyContent: "right",
        color: "#131C4C",
        cursor: "pointer"
    },
    descDoc: {
        fontSize: "24px !important",
        color: "#131C4C !important"
    },
    notedts: {
        fontSize: "20px !important",
        fontWeight: "600 !important",
        color: "#131C4C",
        opacity: "1"
    },
    notehead: {
        fontSize: "20px !important",
        fontWeight: "400 !important",
        color: "#131C4C !important",
    },
    orderId: {
        color: '#767A93',
        fontSize: '16px'
    },
    documentContainer: {
        padding: '30px 42px 60px 42px !important',
        borderBottom: "1px solid #C1C4D1"
    },
    orderNumber: {
        color: '#131C4C',
        fontWeight: 500
    },
    containerItem: {
        marginBottom: '20px !important'
    },
    addressSection: {
        width: '100%',
        padding: '70px 42px 40px 42px !important',
        borderBottom: "1px solid #C1C4D1"
    },
    tableHeadItem: {
        fontSize: '18px',
        color: '#131C4C',
        fontWeight: 700,
        fontFamily: 'Montserrat'
    },
    tableCellItem: {
        fontSize: '18px',
        color: '#131C4C',
        fontFamily: 'Montserrat'
    },
    documentTable: {
        marginTop: '20px'
    },
    evidenceContainer: {
        padding: '60px 42px 36px 42px !important',
    },
    evidenceItem: {
        display: 'flex',
        alignItems: 'center'
    },
    evidenceTitle: {
        fontSize: '13px',
        color: '#131C4C',
        fontFamily: 'Montserrat',
        marginRight: '20px'
    },
    customerName: {
        fontSize: '18px',
        color: '#131C4C',
        fontFamily: 'Montserrat',
        fontWeight: 700,
        maxWidth: '200px',
    },
    acknowledgeCheckboxContainer: {
        margin: '20px 0',
        '& .MuiFormControlLabel-label': {
            fontSize: '18px',
            color: '#131C4C',
            fontWeight: 500,
            letterSpacing: 0,
            fontFamily: 'Montserrat !important',
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

    }
})
export default DeliveryStyle;