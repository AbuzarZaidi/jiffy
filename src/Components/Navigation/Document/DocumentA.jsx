import React, { useEffect, useLayoutEffect, forwardRef } from 'react'
import SendPackageStyle from '../Package/SendPackageStyle';
import { withStyles } from "@material-ui/core/styles";
import { Box, Grid } from '@mui/material';
import BottomNav from '../../BottomNav'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Allservices from '../Allservices';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import clsx from 'clsx';
import moment from "moment";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import Checkbox from '@mui/material/Checkbox';


import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import axios from "axios";
import Paper from '@mui/material/Paper';
import { v4 as uuidv4 } from 'uuid';
import MenuList from '@mui/material/MenuList';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@mui/icons-material/Check';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Homepage/Footer';
import DatePicker from 'react-datepicker'
import ScheduleDocument from './ScheduleDocument';
import BasicNavbar from '../../BasicNavbar';
import { getBaseURL } from '../../../api/apiManagement';
const blue = {
  50: '#131C4C',
  100: '#C2E0FF',
  200: '#FFFFFF',
  300: '#66B2FF',
  400: '#EBE3CA',
  500: '#EBE3CA',
  600: '#FFFFFF',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    color: #131C4C;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
    padding: 12px 16px;
    border: none;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    height:120px;
    border-radius: 60px;
    &:hover {
      background-color: ${blue[400]};
    }
  
    &:focus {
      color: #fff;
      font-weight: 700;
      border-radius: 60px;
    }
  
    &.${tabUnstyledClasses.selected} {
      background-color: ${blue[50]};
      color: ${blue[600]};
      border-radius: 60px;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
      border-radius: 60px;
    }
  `;

const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    
  `;

const TabsList = styled(TabsListUnstyled)`
    min-width: 320px;
    background-color: ${blue[500]};
    border-radius: 20px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 60px;

  `;


const green = {
  500: '#000000',
};

const grey = {
  400: '#BFC7CF',
  500: '#AAB4BE',
  600: '#6F7E8C',
};

const Root = styled('span')(
  ({ theme }) => `
    font-size: 0;
    position: relative;
    display: inline-block;
    width: 75px;
    height: 35px;
    margin: 0px 15px;
    cursor: pointer;
    margin-top: 10px;
  
    &.${switchUnstyledClasses.disabled} {
      opacity: 0.4;
      cursor: not-allowed;
    }
  
    & .${switchUnstyledClasses.track} {
      background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
      border-radius: 29px;
      display: block;
      height: 35px;
      width: 75px;
      position: absolute;
    }
  
    & .${switchUnstyledClasses.thumb} {
      display: block;
      width: 29px;
      height: 29px;
      top: 3px;
      left: 5px;
      border-radius: 16px;
      background-color: #fff;
      position: relative;
      transition: all 200ms ease;
    }
  
    &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
      background-color: ${grey[500]};
      box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
    }
  
    &.${switchUnstyledClasses.checked} {
      .${switchUnstyledClasses.thumb} {
        left: 41px;
        top: 3px;
        background-color: #fff;
      }
  
      .${switchUnstyledClasses.track} {
        background: #131C4C;
      }
    }
  
    & .${switchUnstyledClasses.input} {
      cursor: inherit;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 1;
      margin: 0;
    }
    `,
);

/*Drop DOWN Info */



const DocumentA = (props) => {
  const [value, setValue] = React.useState(0);
  const url = getBaseURL() + "/vendor/api/v1/parcel"
  const priceUrl = getBaseURL() + "/vendor/api/v1/price"
  const { classes } = props;
  const navigate = useNavigate();
  const [alignmentPickup, setAlignmentPickup] = React.useState('AM');
  const [alignment, setAlignment] = React.useState('AM');
  const [alignmentTrans, setAlignmentTransport] = React.useState('car');
  const [alignmentDel, setAlignmentDel] = React.useState('AM');
  const [count, setCount] = React.useState(0);
  const [selected1, setSelected1] = React.useState(false);
  const [selected2, setSelected2] = React.useState(false);
  const [selected3, setSelected3] = React.useState(false);
  const [selected4, setSelected4] = React.useState(false);
  const [error1, setError1] = React.useState(false);
  const [error2, setError2] = React.useState(false);
  const [error3, setError3] = React.useState(false);
  const [error4, setError4] = React.useState(false);
  const [error5, setError5] = React.useState(false);
  const [error6, setError6] = React.useState(false);
  const [error7, setError7] = React.useState(false);
  const [error8, setError8] = React.useState(false);
  const [error9, setError9] = React.useState(false);
  const [error10, setError10] = React.useState(false);
  const [id, setId] = React.useState(0)
  const [pickupPrice, setPickupPrice] = React.useState()
  const handleChangePickup = (event, newAlignment) => {
    //alert(JSON.stringify(newAlignment))
    setAlignment(newAlignment);
  };
  const handleChangeDelivery = (event, newAlignment) => {
    //alert(JSON.stringify(newAlignment))
    setAlignmentDel(newAlignment);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 6
      }}
    />
  );

  const handleSubmit = event => {
    let p = [];
    let pDetails= {};
    pDetails["id"] = "1";
    pDetails["pickup_location"] = address;
    pDetails["pickup_location_phone"] = phone;
    pDetails["pickupEmail"] = email;
    pDetails["pickupTime"] =  moment(pickup).format("hh:mm");
    pDetails["pickupTimeDesc"] = alignmentPickup;
    pDetails["pickup_instruction"] = descript;
    pDetails["pickup_latitude"] = String(coordinate.lat)
    pDetails["pickup_longitude"] = String(coordinate.lng)
    pDetails["pickup_status"] = 'pending';

    let pDetails1= {};
    pDetails1["id"] = "2";
    pDetails1["pickup_location"] = address1;
    pDetails1["pickup_location_phone"] = phone1;
    pDetails1["pickupEmail"] = email1;
    pDetails1["pickupTime"] =  moment(pickup1).format("hh:mm");
    pDetails1["pickupTimeDesc"] = alignmentPickup1;
    pDetails1["pickup_instruction"] = descript1;
    pDetails1["pickup_latitude"] = String(coordinate1.lat)
    pDetails1["pickup_longitude"] = String(coordinate1.lng)
    pDetails1["pickup_status"] = 'pending'

    let pDetails2= {};
    pDetails2["id"] = "3";
    pDetails2["pickup_location"] = address2;
    pDetails2["pickup_location_phone"] = phone2;
    pDetails2["pickupEmail"] = email2;
    pDetails2["pickupTime"] =  moment(pickup2).format("hh:mm");
    pDetails2["pickupTimeDesc"] = alignmentPickup2;
    pDetails2["pickup_instruction"] = descript2;
    pDetails2["pickup_latitude"] = String(coordinate2.lat)
    pDetails2["pickup_longitude"] = String(coordinate2.lng)
    pDetails2["pickup_status"] = 'pending'
    
    p.push(pDetails);
    if(address1 !== null){
    p.push(pDetails1);
    }
    if((address2 !== null || address2 !== "") && (email2 !== null)){
      p.push(pDetails2);
    }
  
    let d = [];
    let dDetails= {};
    dDetails["id"] = "1";
    dDetails["delivery_location"] = addressDelivery;
    dDetails["delivery_location_phone"] = phoneD;
    dDetails["deliveryEmail"] = emailD;
    dDetails["deliveryTime"] = moment(drop).format("hh:mm");
    dDetails["deliveryTimeDesc"] = alignment;
    dDetails["delivery_instruction"] = descriptD;
    dDetails["delivery_latitude"] = String(coordinateDelivery.lat)
    dDetails["delivery_longitude"] = String(coordinateDelivery.lng)
    dDetails["delivery_status"] = 'pending'
    d.push(dDetails)

    var today = new Date();
    let postId;
    let product_list = [
      {
        "image": "",
        "qty": "2",
        "product_name": "i",
        "price": String(price)
      }
    ]
    event.preventDefault();
    console.log(event)
    let params = {}

    params["pickup"]= p;
    params["delivery"] = d;
    params["postEnvelope"] = selected1;
    params["envelopeA3"] = selected2;
    params["envelopeA4"] = selected3;
    params["pickup_location"] = event.target[0].value
    params["pickup_location_phone"] = event.target[2].value
    params["pickupEmail"] = event.target[4].value
    params["pickupTime"] = event.target[6].value
    params["pickupTimeDesc"] = alignment
    params["pickup_instruction"] = event.target[10].value
    params["delivery_location"] = event.target[12].value
    params["delivery_location_phone"] = event.target[14].value
    params["deliveryEmail"] = event.target[16].value
    params["deliveryTime"] = event.target[18].value
    params["deliveryTimeDesc"] = alignmentDel
    params["delivery_instruction"] = event.target[22].value
    params["pickupCoordinates"] = coordinate
    params["deliveryCoordinates"] = coordinateDelivery
    params["pickup_status"] = "Pending"
    params["delivery_type"] = "documentattestnow"
    params["rule"] = "documentattest"
    params["delivery_status"] = "Pending"
    params["pickup_latitude"] = String(coordinate.lat)
    params["pickup_longitude"] = String(coordinate.lng)
    params["delivery_latitude"] = String(coordinateDelivery.lat)
    params["delivery_longitude"] = String(coordinateDelivery.lng)
    params["stop_latitude"] = String(coordinateStop.lat)
    params["stop_longitude"] = String(coordinateStop.lng)
    params["order_amt"] = String(price)
    params["estimatedPrice"] = String(price)
    params["customer_name"] = "jiffy"
    params["customer_id"] = "JIFFY" + uuidv4()
    params["customer_phone"] = "8075095847"
    params["ordered_date"] = today
    params["order_payment_method"] = "CARD"
    params["order_status"] = "Pending"
    params["pickup_status"] = "Pending"
    params["delivery_status"] = "Pending"
    params["compensation_phone"] = "Pending"
    params["package_size"] = "1kg"
    params["is_web"] = "true"
    params["product_list"] = product_list
    params["emiratesId"] = inputFieldsCompany;
    params["passport"] = inputFields;
    params["mCerti"] = inputFieldsMcerti;
    params["bCerti"] = inputFieldsBcerti;
    params["dCerti"] = inputFieldsDcerti;
    params["other"] = inputFieldsOther;
    params["transport"] = alignmentTrans;
    console.log(JSON.stringify(params))

    if (params["pickup_location"] === "") {
      setError1(true);
    }
    else {
      setError1(false)
    }
    if (params["pickup_location_phone"] === "") {
      setError2(true);
    }
    else {
      setError2(false)
    }
    if (params["pickupEmail"] === "") {
      setError3(true);
    }
    else {
      setError3(false)
    }
    if (params["pickupTime"] === "") {
      setError4(true);
    }
    else {
      setError4(false)
    }
    if (params["pickup_instruction"] === "") {
      setError5(true);
    }
    else {
      setError5(false)
    }
    if (params["delivery_location"] === "") {
      setError6(true);
    }
    else {
      setError6(false)
    }
    if (params["delivery_location_phone"] === "") {
      setError7(true);
    }
    else {
      setError7(false)
    }
    if (params["deliveryEmail"] === "") {
      setError8(true);
    }
    else {
      setError8(false)
    }
    if (params["deliveryTime"] === "") {
      setError9(true);
    }
    else {
      setError9(false)
    }
    if (params["delivery_instruction"] === "") {
      setError10(true);
    }
    else {
      setError10(false)
    }




    if (params["pickup_location"] !== "" && params["pickup_location_phone"] !== "" && params["pickupEmail"] !== "" && params["pickupTime"] !== "" && params["pickup_instruction"] !== "" && params["delivery_location"] !== "" && params["delivery_location_phone"] !== "" && params["deliveryEmail"] !== "" && params["deliveryTime"] !== "" && params["delivery_instruction"] !== "") {
      axios.post(url, params)
        .then(res => {
          console.log(res.data);
          postId = res.data
          if (res.data.status === 'success') {
            postId = res.data.id
            setId(res.data.id)
            console.log(id)
          }
          try {
          }
          catch (error) {
            console.error()
          }
        })
      setTimeout(() => {
        //setId(postId)
        //console.log(JSON.stringify(postId.id))
        navigate('/allorders')
        // navigate('/trackorder/' + postId.id)

      }, 3000);
    }

  }

  const gotoTracker = () => {
    axios.get(url + '?' + id).then(response => {
      console.log(JSON.stringify(response))


    })

  }
  const [plus, getPlus] = React.useState(false);
  const [phone, setPhone] = React.useState(null);
  const [email, setemail] = React.useState(null);
  const [time, setTime] = React.useState(null);
  const [pickup, setPickup] = React.useState(null);
  const [descript, setdesc] = React.useState(null);
  const pickupPhone = (val) =>{
    setPhone(val.target.value)
  }
  const pickupEmail = (val) =>{
    setemail(val.target.value)
  }
  const pickupDesc = (val) =>{
    setdesc(val.target.value)
  }
  const addPlus = () =>{
    getPlus(!plus);
    }
  const [phone1, setPhone1] = React.useState(null);
  const [email1, setemail1] = React.useState(null);
  const [time1, setTime1] = React.useState(null);
  const [pickup1, setPickup1] = React.useState(null);
  const [descript1, setdesc1] = React.useState(null);
  const pickupPhone1 = (val) =>{
    setPhone1(val.target.value)
  }
  const pickupEmail1 = (val) =>{
    setemail1(val.target.value)
  }
  const pickupDesc1 = (val) =>{
    setdesc1(val.target.value)
  }

  const [phone2, setPhone2] = React.useState(null);
  const [email2, setemail2] = React.useState(null);
  const [time2, setTime2] = React.useState(null);
  const [pickup2, setPickup2] = React.useState(null);
  const [descript2, setdesc2] = React.useState(null);
  
  const pickupPhone2 = (val) =>{
    setPhone2(val.target.value)
  }
  const pickupEmail2 = (val) =>{
    setemail2(val.target.value)
  }
  const pickupDesc2 = (val) =>{
    setdesc2(val.target.value)
  }

  const [phoneD, setPhoneD] = React.useState(null);
  const [emailD, setemailD] = React.useState(null);
  const [timeD, setTimeD] = React.useState(null);

  const [descriptD, setdescD] = React.useState(null);
  const phoneDel = (val) =>{
    setPhoneD(val.target.value)
  }
  const emailDel = (val) =>{
    setemailD(val.target.value)
  }
  const descDel = (val) =>{
    setdescD(val.target.value)
  }



  const [arrow, getArrow] = React.useState(false);
  const [address, setAddress] = React.useState(null);
  const [address1, setAddress1] = React.useState(null);
  const [address2, setAddress2] = React.useState(null);
  const [price, setPrice] = React.useState("");
  const [addressDelivery, setAddressDelivery] = React.useState(null);
  const [addressStop, setAddressStop] = React.useState(null);
  const [coordinate, setCoordinates] = React.useState({ lat: "", long: "" });
  const [coordinate1, setCoordinates1] = React.useState({ lat: "", long: "" });
  const [coordinate2, setCoordinates2] = React.useState({ lat: "", long: "" });
  const [coordinateDelivery, setCoordinatesDelivery] = React.useState({ latDel: "", longDel: "" });
  const [coordinateStop, setCoordinatesStop] = React.useState({ latStop: "", longStop: "" });
  const [activeTab, setActiveTab] = React.useState(1)


  const handleChanged = (address) => {
    //this.setState({ address });
  };
const getArrowDown = () =>{
getArrow(!arrow);
}
  const handleSelect = async value => {
    const result = await geocodeByAddress(value)
    console.log(JSON.stringify(result))
    const ll = await getLatLng(result[0])
    setAddress(value)
    setCoordinates(ll)
    console.log(JSON.stringify(ll))
    // geocodeByAddress(address)
    //    .then(results => getLatLng(results[0]))
    //    .then(latLng => console.log('Success', latLng))
    //   .catch(error => console.error('Error', error));
  };
  const handleSelect1 = async value => {
    const result = await geocodeByAddress(value)
    console.log(JSON.stringify(result))
    const ll = await getLatLng(result[0])
    setAddress1(value)
    setCoordinates1(ll)
    console.log(JSON.stringify(ll))
    // geocodeByAddress(address)
    //    .then(results => getLatLng(results[0]))
    //    .then(latLng => console.log('Success', latLng))
    //   .catch(error => console.error('Error', error));
  };
  const handleSelect2 = async value => {
    const result = await geocodeByAddress(value)
    console.log(JSON.stringify(result))
    const ll = await getLatLng(result[0])
    setAddress2(value)
    setCoordinates2(ll)
    console.log(JSON.stringify(ll))
    // geocodeByAddress(address)
    //    .then(results => getLatLng(results[0]))
    //    .then(latLng => console.log('Success', latLng))
    //   .catch(error => console.error('Error', error));
  };
  const handleSelectDelivery = async value => {
    const result = await geocodeByAddress(value)
    const ll = await getLatLng(result[0])
    setAddressDelivery(value)
    setCoordinatesDelivery(ll)
    console.log(JSON.stringify(ll))
    // geocodeByAddress(address)
    //    .then(results => getLatLng(results[0]))
    //    .then(latLng => console.log('Success', latLng))
    //   .catch(error => console.error('Error', error));

    let p = [];
    let pDetails= {};
    pDetails["id"] = "1";
    pDetails["pickup_location"] = address;
    pDetails["pickup_location_phone"] = phone;
    pDetails["pickupEmail"] = email;
    pDetails["pickupTime"] = pickup;
    pDetails["pickupTimeDesc"] = alignment;
    pDetails["pickup_instruction"] = descript;
    pDetails["pickup_latitude"] = String(coordinate.lat)
    pDetails["pickup_longitude"] = String(coordinate.lng)
    pDetails["pickup_status"] = 'pending';

    let pDetails1= {};
    pDetails1["id"] = "2";
    pDetails1["pickup_location"] = address1;
    pDetails1["pickup_location_phone"] = phone1;
    pDetails1["pickupEmail"] = email1;
    pDetails1["pickupTime"] = pickup1;
    pDetails1["pickupTimeDesc"] = alignment;
    pDetails1["pickup_instruction"] = descript1;
    pDetails1["pickup_latitude"] = String(coordinate1.lat)
    pDetails1["pickup_longitude"] = String(coordinate1.lng)
    pDetails1["pickup_status"] = 'pending'

    let pDetails2= {};
    pDetails2["id"] = "3";
    pDetails2["pickup_location"] = address2;
    pDetails2["pickup_location_phone"] = phone2;
    pDetails2["pickupEmail"] = email2;
    pDetails2["pickupTime"] = pickup2;
    pDetails2["pickupTimeDesc"] = alignment;
    pDetails2["pickup_instruction"] = descript2;
    pDetails2["pickup_latitude"] = String(coordinate2.lat)
    pDetails2["pickup_longitude"] = String(coordinate2.lng)
    pDetails2["pickup_status"] = 'pending'
    
    p.push(pDetails);
    if(address1 !== null){
    p.push(pDetails1);
    }
    if((address2 !== null || address2 !== "") && (email2 !== null)){
      p.push(pDetails2);
    }


    let priceParams = {}
    priceParams["pickup_latitude"] = String(coordinate.lat)
    priceParams["pickup_longitude"] = String(coordinate.lng)
    priceParams["delivery_latitude"] = String(ll.lat)
    priceParams["delivery_longitude"] = String(ll.lng)
    priceParams["delivery_type"] = "delivernow"
    priceParams["no_of_pickup"] = p.length;
    priceParams["pickup"] = p;
    console.log(priceParams)
    //if (coordinate.lat && coordinate.lng && ll.lat && ll.lng) {
      axios.post(priceUrl, priceParams)
        .then(res => {
          console.log("PRICEEEEEEE",res.data.estimatedPrice)
          setPrice(res.data.estimatedPrice)
          try {
          }
          catch (error) {
            console.error()
          }
        })
    //}
  };


  const [inputFields, setInputFields] = React.useState([])
  const [inputFieldsCompany, setInputFieldsCompany] = React.useState([])
  const [inputFieldsPhoto, setInputFieldsPhoto] = React.useState([])
  const [inputFieldsMcerti, setInputFieldsMcerti] = React.useState([])
  const [inputFieldsBcerti, setInputFieldsBcerti] = React.useState([])
  const [inputFieldsDcerti, setInputFieldsDcerti] = React.useState([])
  const [inputFieldsOther, setInputFieldsOther] = React.useState([])
  
  const [drop, setDrop] = React.useState(null);
  const [mode, setMode] = React.useState('bike')

  const handleAdd = () => {
    setInputFields([...inputFields, { passportName: '', passportNumber: '' }])
    //alert(JSON.stringify(inputFields.length))

  }
  const handleRemove = () => {
    const values = [...inputFields]
    values.pop();
    setInputFields(values)
  }
  const handleAddCompany = () => {
    setInputFieldsCompany([...inputFieldsCompany, { companyId: '', companyName: '' }])
    console.log(inputFields)
  }
  const handleRemoveCompany = () => {
    const values = [...inputFieldsCompany]
    values.pop();
    setInputFieldsCompany(values)
  }
  const handleAddPhoto = () => {
    setInputFieldsPhoto([...inputFieldsPhoto, {photoName: '' }])
    console.log(inputFields)
  }
  const handleRemovePhoto = () => {
    const values = [...inputFieldsPhoto]
    values.pop();
    setInputFieldsPhoto(values)
  }
  const handleAddMcerti = () => {
    setInputFieldsMcerti([...inputFieldsMcerti, { name: '' }])

  }
  const handleRemoveMcerti = () => {
    const values = [...inputFieldsMcerti]
    values.pop();
    setInputFieldsMcerti(values)
  }
  const handleAddBcerti = () => {
    setInputFieldsBcerti([...inputFieldsBcerti, { name: '' }])

  }
  const handleRemoveBcerti = () => {
    const values = [...inputFieldsBcerti]
    values.pop();
    setInputFieldsBcerti(values)
  }
  const handleAddDcerti = () => {
    setInputFieldsDcerti([...inputFieldsDcerti, { name: '' }])

  }
  const handleRemoveDcerti = () => {
    const values = [...inputFieldsDcerti]
    values.pop();
    setInputFieldsDcerti(values)
  }
  const handleAddOther = () => {
    setInputFieldsOther([...inputFieldsOther, { name: '' }])

  }
  const handleRemoveOther = () => {
    const values = [...inputFieldsOther]
    values.pop();
    setInputFieldsOther(values)
  }




  const priceChange = (e) => {
    console.log(e.target.value)
    setPrice(e.target.value)

  }
  function goback() {
    navigate('/services')
  }
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const handlePassport = (event, val) => {

    inputFields[val].passportName = event.target.value;

  }
  const handlePassportNo = (event, val) => {

    inputFields[val].passportNumber = event.target.value;

  }
  const handleId1 = (event, val) => {
    inputFieldsCompany[val].companyId = event.target.value;
  }
  const handleId2 = (event, val) => {
    inputFieldsCompany[val].companyName = event.target.value;
  }
  const handlephoto = (event, val) => {
    inputFieldsPhoto[val].photoName = event.target.value;
  }
  const handleMcerti = (event, val) => {
    inputFieldsMcerti[val].name = event.target.value;
  }
  const handleDcerti = (event, val) => {
    inputFieldsDcerti[val].name = event.target.value;
  }
  const handleBcerti = (event, val) => {
    inputFieldsBcerti[val].name = event.target.value;
  }
  const handleOther = (event, val) => {
    inputFieldsOther[val].name = event.target.value;
  }
  const updatePrice = () => {
    if(!selected1){
      setPrice(price+1.5)
    }
    else{
      setPrice(price-1.5)
    }
  }
  const updatePrice1 = () => {
    if(!selected2){
      setPrice(price+3)
    }
    else{
      setPrice(price-3)
    }
  }
  const updatePrice2 = () => {
    if(!selected3){
      setPrice(price+2)
    }
    else{
      setPrice(price-2)
    }
  }
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const [alignmentPickup1, setAlignmentPickup1] = React.useState('AM');

  const [alignmentPickup2, setAlignmentPickup2] = React.useState('AM');

  const PickupTimeInput1 = forwardRef(({ value, onClick }, ref) => (

    <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
    
      <OutlinedInput
        id="outlined-adornment-weight"
        name="pktime"
        onClick={onClick}
        ref={ref}
        value={value}
        placeholder='Pick Up Time if any'
        startAdornment={<InputAdornment position="start"> <img src='./Images/clock-two.svg'></img></InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
        labelWidth={0}
        className={clsx(classes.searchInput, classes.timeSelector)}
        endAdornment={
          <ToggleButtonGroup fullWidth
            color="info"
            id='pickupAA'
            value={alignmentPickup1}
            exclusive
            onChange={(e, value) => setAlignmentPickup1(value)}
            className={classes.timeGroup}
            onClick={(e) => e.stopPropagation()}
          >
            <ToggleButton className={clsx('toggledts', 'toggle-button-left')} value="AM">AM</ToggleButton>
            <ToggleButton className={clsx("toggledts", 'toggle-button-right')} value="PM">PM</ToggleButton>
          </ToggleButtonGroup>
        }
      />
    </FormControl>
  ));

  const PickupTimeInput2 = forwardRef(({ value, onClick }, ref) => (

    <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
    
      <OutlinedInput
        id="outlined-adornment-weight"
        name="pktime"
        onClick={onClick}
        ref={ref}
        value={value}
        placeholder='Pick Up Time if any'
        startAdornment={<InputAdornment position="start"> <img src='./Images/clock-two.svg'></img></InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
        labelWidth={0}
        className={clsx(classes.searchInput, classes.timeSelector)}
        endAdornment={
          <ToggleButtonGroup fullWidth
            color="info"
            id='pickupAA'
            value={alignmentPickup2}
            exclusive
            onChange={(e, value) => setAlignmentPickup2(value)}
            className={classes.timeGroup}
            onClick={(e) => e.stopPropagation()}
          >
            <ToggleButton className={clsx('toggledts', 'toggle-button-left')} value="AM">AM</ToggleButton>
            <ToggleButton className={clsx("toggledts", 'toggle-button-right')} value="PM">PM</ToggleButton>
          </ToggleButtonGroup>
        }
      />
    </FormControl>
  ));


  const setTimeDesc = (date) => {
    setPickup(date);
    let temp = moment(date).format("hh:mm");
    //alert("dfd")
    console.log(temp)
    if(temp === "08:00" || temp === "08:30" || temp === "09:30" || temp === "09:00" ||  temp === "10:00" || temp === "10:30" || temp === "11:00" || temp === "11:30"){
      setAlignmentPickup("AM")
    }
    else{
      setAlignmentPickup("PM")
    }
  
  
  } 
  const setDesc1 = (date) => {
    setPickup1(date);
    let temp = moment(date).format("hh:mm");
    //alert("dfd")
    console.log(temp)
    if(temp === "08:00" || temp === "08:30" || temp === "09:30" || temp === "09:00" ||  temp === "10:00" || temp === "10:30" || temp === "11:00" || temp === "11:30"){
      setAlignmentPickup1("AM")
    }
    else{
      setAlignmentPickup1("PM")
    }
  
  
  } 
  const setDesc2 = (date) => {
    setPickup2(date);
    let temp = moment(date).format("hh:mm");
    //alert("dfd")
    console.log(temp)
    if(temp === "08:00" || temp === "08:30" || temp === "09:30" || temp === "09:00" ||  temp === "10:00" || temp === "10:30" || temp === "11:00" || temp === "11:30"){
      setAlignmentPickup2("AM")
    }
    else{
      setAlignmentPickup2("PM")
    }
  
  
  } 
  const setDescDel = (date) => {
    setDrop(date);
    let temp = moment(date).format("hh:mm");
    //alert("dfd")
    console.log(temp)
    if(temp === "08:00" || temp === "08:30" || temp === "09:30" || temp === "09:00" ||  temp === "10:00" || temp === "10:30" || temp === "11:00" || temp === "11:30"){
      setAlignment("AM")
    }
    else{
      setAlignment("PM")
    }
  
  
  } 
  {/*Stopss*/ }
  const handleSelectStop = async value => {
    const result = await geocodeByAddress(value)
    console.log(JSON.stringify(result))
    const ll = await getLatLng(result[0])
    setAddressStop(value)
    setCoordinatesStop(ll)
    console.log(JSON.stringify(ll))
    // geocodeByAddress(address)
    //    .then(results => getLatLng(results[0]))
    //    .then(latLng => console.log('Success', latLng))
    //   .catch(error => console.error('Error', error));
  };

  const PickupTimeInput = forwardRef(({ value, onClick }, ref) => (

    <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
    
      <OutlinedInput
        id="outlined-adornment-weight"
        name="pktime"
        onClick={onClick}
        ref={ref}
        value={value}
        placeholder='Pick Up Time if any'
        startAdornment={<InputAdornment position="start"> <img src='./Images/clock-two.svg'></img></InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
        labelWidth={0}
        className={clsx(classes.searchInput, classes.timeSelector)}
        endAdornment={
          <ToggleButtonGroup fullWidth
            color="info"
            id='pickupAA'
            value={alignmentPickup}
            exclusive
            onChange={(e, value) => setAlignmentPickup(value)}
            className={classes.timeGroup}
            onClick={(e) => e.stopPropagation()}
          >
            <ToggleButton className={clsx('toggledts', 'toggle-button-left')} value="AM">AM</ToggleButton>
            <ToggleButton className={clsx("toggledts", 'toggle-button-right')} value="PM">PM</ToggleButton>
          </ToggleButtonGroup>
        }
      />
    </FormControl>
  ));



  const DropTimeInput = forwardRef(({ value, onClick }, ref) => (
    <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        name='deliveryTime'
        placeholder='Drop Time'
        onClick={onClick}
        value={value}
        ref={ref}
        startAdornment={<InputAdornment position="start"> <img src='./Images/clock-two.svg'></img></InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
        labelWidth={0}
        className={classes.searchInput}
        endAdornment={
          <ToggleButtonGroup fullWidth
            color="info"
            value={alignment}
            exclusive
            onChange={(e, value) => setAlignment(value)}
            className={classes.timeGroup}
            onClick={(e) => e.stopPropagation()}
          >
            <ToggleButton className={clsx('toggledts', 'toggle-button-left')} value="AM">AM</ToggleButton>
            <ToggleButton className={clsx("toggledts", 'toggle-button-right')} value="PM">PM</ToggleButton>
          </ToggleButtonGroup>
        }
      />
    </FormControl>
  ));

  return (
    <>
    <BasicNavbar/>
      <Grid container className={classes.section_start}>
        <Grid container className={classes.newbg}>
          <Grid container className={classes.secn}>
            <Grid container className={classes.ht}>
              <Grid container className={classes.send_bg} >
                <Grid item xs={7} md={7} lg={7}>
                  <div className={classes.heading}>
                    <img className={classes.send_img} src='./Images/dc.png' onClick={() => goback()}></img>&nbsp;&nbsp;
                    <div className={classes.send_heading}>  Document Attestation</div>
                  </div>
                </Grid>
                <Grid item xs={5} md={5} lg={5}>
                  <div className={classes.send_header}>
                    <ColoredLine color="#131C4C" />
                  </div>
                </Grid>
                <Grid item xs={12} md={12} lg={12} className={classes.vat}>
                Get your documents attested with the approved offices across UAE.
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <TabsUnstyled defaultValue={0} className={classes.ht}>
            <TabsList className={classes.tabList} >
              <Tab className={classes.tabItem} onClick={() => setActiveTab(1)}>
                <Box className={classes.tabContent}>
                  <img className={classes.icon} src={activeTab != 1 ? './Images/clock_dark.png' : './Images/clock_lite.png'} width={49} height={49}></img>
                  {/*<AccessTimeIcon className={classes.icon}></AccessTimeIcon>*/}
                  <div className={classes.tab2}>
                    <span className={classes.mainTab}>Schedule Now</span>
                    <span className={clsx(classes.mainTab2, activeTab != 1 && classes.mainInactive)}>Within 2 Hours &nbsp;<b></b>&nbsp;</span>
                  </div>
                </Box>
              </Tab>
              <Tab className={classes.tabItem} onClick={() => setActiveTab(2)}>
                <Box className={classes.tabContent}>
                  <img className={classes.icon} src={activeTab != 2 ? './Images/date_dark.png' : './Images/date_lite.png'} width={46} height={51}></img>
                  {/*<CalendarTodayIcon className={classes.icon}></CalendarTodayIcon>*/}
                  <div className={classes.tab2}>
                    <span className={classes.mainTab}>Schedule for Later</span>
                    <span className={clsx(classes.mainTab2, activeTab != 2 && classes.mainInactive)}>Next Day Collection &nbsp;<b></b>&nbsp;</span>
                  </div>
                </Box>
              </Tab>
            </TabsList>
            <TabPanel value={0} >
              <div></div>
              <div className={classes.will}>
                We will assign the nearest delivery agent to pick up and deliver as soon as possible
              </div>
              
              <div className={classes.req}>
                <p className={classes.revert}><b className={classes.reqi}>Select based on your requirement :</b>
                <p className={alignmentTrans === 'bike' ? classes.two_wheel : classes.two_wheel_inactive}><b>2 Wheeler</b></p>
                <div className={classes.del_icon}>
                <ToggleButtonGroup fullWidth
            color="info"
            id='pickupAA'
            value={alignmentTrans}
            exclusive
            onChange={(e, value) => setAlignmentTransport(value)}
          
            onClick={(e) => e.stopPropagation()}
          >
            <ToggleButton className={clsx('toggledts', 'toggle-button-left')} value="bike">
             {alignmentTrans === 'bike' ? <img src='./Images/wbike.svg'></img> : <img src='./Images/gbike.svg'></img>  } 
            </ToggleButton>
            <ToggleButton className={clsx("toggledts", 'toggle-button-right')} value="car">
            {alignmentTrans === 'bike' ?  <img src='./Images/gcar.svg'></img> : <img src='./Images/wcar.svg'></img> } 
            </ToggleButton>
          </ToggleButtonGroup>
          </div>
          <p className={alignmentTrans === 'bike' ? classes.four_wheel : classes.four_wheel_active}>4 Wheeler</p>
                </p> &nbsp;
                
                {/*<p className={mode === 'bike' ? classes.two_wheel : classes.two_wheel_inactive}><b>2 Wheeler</b></p>
                <div className={classes.del_icon}>
          
                  <img src='./Images/biked.svg' className={mode === 'bike' ? classes.biked : classes.biked_inactive} width={41} height={31}></img>&nbsp;
                </div>
                <SwitchUnstyled component={Root} onChange={(e, value) => setMode(e.target.checked ? 'bike' : 'car')} />
                <img src='./Images/sedan.png' height={60} className={mode === 'bike' && classes.sedan}></img>&nbsp;
                <p className={mode === 'bike' ? classes.four_wheel : classes.four_wheel_active}>4 Wheeler</p>
             */} </div>
              {/*Weights not in cooperate login */}
              {/*<div className={classes.content}>
                <div>Weights</div>
                <div className={classes.content}>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  className={classes.weightGroup}
                  fullWidth
                >
                  <ToggleButton className={classes.weightButton} value="web">Upto 1kg</ToggleButton>
                  <ToggleButton className={classes.weightButton} value="android">Upto 5kg</ToggleButton>
                  <ToggleButton className={classes.weightButton} value="ios1">Upto 10kg</ToggleButton>
                  <ToggleButton className={classes.weightButton} value="ios2">Upto 15kg</ToggleButton>
                  <ToggleButton className={classes.weightButton} value="ios23">Upto 20kg</ToggleButton>
                  <ToggleButton className={classes.weightButton} value="ios4">20+</ToggleButton>
                  <ToggleButton className={classes.weightButton} value="ios5">Unsure</ToggleButton>

                </ToggleButtonGroup>
                </div>

  </div>*/}

              <form onSubmit={handleSubmit}>
                <div className={classes.content1}>
                  <div className={classes.send_label}>
                    Pick Up Address
                  </div>
                  <div className={classes.content}>
                    <Grid container spacing={2}>
                      <Grid item xs={11} md={12} lg={12} >
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          {/*} <OutlinedInput
                  id="outlined-adornment-weight"
                  placeholder='Address'
                  name="address"
                  startAdornment={<InputAdornment position="start"> <img src='./Images/loc1.svg'></img></InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  labelWidth={0}
                />*/}
                          <PlacesAutocomplete
                            value={address}
                            onChange={setAddress}
                            onSelect={handleSelect}
                          >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                              <div >
                                <OutlinedInput
                                  id="outlined-adornment-weight"
                                  placeholder='Address'
                                  fullWidth
                                  name="address"
                                  startAdornment={<InputAdornment position="start"> <img src='./Images/loc1.svg'></img></InputAdornment>}
                                  aria-describedby="outlined-weight-helper-text"
                                  {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                  })}
                                  labelWidth={0}
                                  className={classes.searchInput}
                                />

                                <div className={classes.locationdropdown}>
                                  {loading && <div>Loading...</div>}
                                  {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                      ? 'suggestion-item--active'
                                      : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                      ? { backgroundColor: '#fafafa', cursor: 'pointer', padding: '10px' }
                                      : { backgroundColor: '#ffffff', cursor: 'pointer', padding: '10px' };
                                    return (
                                      <div
                                        {...getSuggestionItemProps(suggestion, {
                                          className,
                                          style,
                                        })}
                                      >
                                        <span>{suggestion.description}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </PlacesAutocomplete>
                        </FormControl>
                        {error1 ? <>
                          <div className={classes.errors}>Select pickup location</div>
                        </> : null}
                      </Grid>
                      <Grid item xs={11} md={12} lg={4}>
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            name="mobileNo"
                            onChange={(event) => pickupPhone(event)}
                            
                            placeholder='Phone Number'
                            startAdornment={<InputAdornment position="start"><img src='./Images/mobile.svg'></img></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            className={classes.searchInput}

                          />
                        </FormControl>
                        {error2 ? <>
                          <div className={classes.errors}>Select mobile number</div>
                        </> : null}
                      </Grid>
                      <Grid item xs={11} md={12} lg={4}>
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            name="email"
                            onChange={(event) => pickupEmail(event)}
                            placeholder='User Email Address'
                            startAdornment={<InputAdornment position="start"> <img src='./Images/email-send.svg'></img></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            className={classes.searchInput}
                          />
                        </FormControl>
                        {error3 ? <>
                          <div className={classes.errors}>Select E-mail</div>
                        </> : null}
                      </Grid>
                      <Grid item xs={11} md={12} lg={4}>
                        <DatePicker
                          selected={pickup}
                          onChange={(date) => setTimeDesc(date)}
                          customInput={<PickupTimeInput />}
                          showTimeSelect
                          showTimeSelectOnly
                          filterTime={filterPassedTime}
                          excludeTimes={[
                            setHours(setMinutes(new Date(), 0), 0),
                            setHours(setMinutes(new Date(), 30), 0),
                            setHours(setMinutes(new Date(), 0), 1),
                            setHours(setMinutes(new Date(), 30), 1),
                            setHours(setMinutes(new Date(), 0), 2),
                            setHours(setMinutes(new Date(), 30), 2),
                            setHours(setMinutes(new Date(), 0), 3),
                            setHours(setMinutes(new Date(), 30), 3),
                            setHours(setMinutes(new Date(), 0), 4),
                            setHours(setMinutes(new Date(), 30), 4),
                            setHours(setMinutes(new Date(), 0), 5),
                            setHours(setMinutes(new Date(), 30), 5),
                            setHours(setMinutes(new Date(), 0), 6),
                            setHours(setMinutes(new Date(), 30), 6),
                            setHours(setMinutes(new Date(), 0), 7),
                            setHours(setMinutes(new Date(), 30), 7),
                            
                            setHours(setMinutes(new Date(), 0), 23),
                            setHours(setMinutes(new Date(), 30), 23),
                            setHours(setMinutes(new Date(), 0), 22),
                            setHours(setMinutes(new Date(), 30), 22),
                            setHours(setMinutes(new Date(), 0), 21),
                            setHours(setMinutes(new Date(), 30), 21),
                            setHours(setMinutes(new Date(), 0), 20),
                            setHours(setMinutes(new Date(), 30), 20),
                            setHours(setMinutes(new Date(), 0), 19),
                            setHours(setMinutes(new Date(), 30), 19),
                          ]}
                          
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                        />
                        
                        {/*} <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                  <TimePicker value={selectedDate} onChange={handleDateChange} />

                                </MuiPickersUtilsProvider>*/}
                        {error4 ? <>
                          <div className={classes.errors}>Select time</div>
                        </> : null}

                      </Grid>
                      <Grid item xs={11} md={12} lg={12} >
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            placeholder='Instruction to delivery agent'
                            name="pkinstruction"
                            startAdornment={<InputAdornment position="start"><img src='./Images/direction.svg'></img></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            onChange={(event) => pickupDesc(event)}
                            className={classes.searchInput}
                          />
                        </FormControl>
                        {error5 ? <>
                          <div className={classes.errors}>Select pickup description</div>
                        </> : null}

                      </Grid>
                    </Grid>



                  </div>

                </div>
                {/*ADD STOP*/}
                <div className={classes.content1A} onClick={getArrowDown}>
                  <span className={classes.send_label}>Add pickup point(Optional)</span>
                  <span > 
                 {arrow ? ( <img className={classes.arrow} src='./Images/up-arrow.png' ></img>):(<></>)}
                  {!arrow ? (<img className={classes.arrow} src='./Images/arrowdn.png' ></img>):(<></>)}
                  </span>
                </div>
                {arrow ? (<>
                <div className={classes.content1}>
                  <div className={classes.send_label}>
                    Add Pick Up Point 1
                  </div>
                  <div className={classes.content}>
                    <Grid container spacing={2}>
                      <Grid item xs={11} md={12} lg={12} >
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          {/*} <OutlinedInput
                  id="outlined-adornment-weight"
                  placeholder='Address'
                  name="address"
                  startAdornment={<InputAdornment position="start"> <img src='./Images/loc1.svg'></img></InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  labelWidth={0}
                />*/}
                          <PlacesAutocomplete
                            value={address1}
                            onChange={setAddress1}
                            onSelect={handleSelect1}
                          >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                              <div >
                                <OutlinedInput
                                  id="outlined-adornment-weight"
                                  placeholder='Address'
                                  fullWidth
                                  name="address"
                                  startAdornment={<InputAdornment position="start"> <img src='./Images/loc1.svg'></img></InputAdornment>}
                                  aria-describedby="outlined-weight-helper-text"
                                  {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                  })}
                                  labelWidth={0}
                                  className={classes.searchInput}
                                />

                                <div className={classes.locationdropdown}>
                                  {loading && <div>Loading...</div>}
                                  {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                      ? 'suggestion-item--active'
                                      : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                      ? { backgroundColor: '#fafafa', cursor: 'pointer', padding: '10px' }
                                      : { backgroundColor: '#ffffff', cursor: 'pointer', padding: '10px' };
                                    return (
                                      <div
                                        {...getSuggestionItemProps(suggestion, {
                                          className,
                                          style,
                                        })}
                                      >
                                        <span>{suggestion.description}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </PlacesAutocomplete>
                        </FormControl>
                        {error1 ? <>
                          <div className={classes.errors}>Select pickup location</div>
                        </> : null}
                      </Grid>
                      <Grid item xs={11} md={12} lg={4}>
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            name="mobileNo"
                            onChange={(event) => pickupPhone1(event)}
                            placeholder='Phone Number'
                            startAdornment={<InputAdornment position="start"><img src='./Images/mobile.svg'></img></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            className={classes.searchInput}

                          />
                        </FormControl>
                        {error2 ? <>
                          <div className={classes.errors}>Select mobile number</div>
                        </> : null}
                      </Grid>
                      <Grid item xs={11} md={12} lg={4}>
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            name="email"
                            onChange={(event) => pickupEmail1(event)}
                            placeholder='User Email Address'
                            startAdornment={<InputAdornment position="start"> <img src='./Images/email-send.svg'></img></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            className={classes.searchInput}
                          />
                        </FormControl>
                        {error3 ? <>
                          <div className={classes.errors}>Select E-mail</div>
                        </> : null}
                      </Grid>
                      <Grid item xs={11} md={12} lg={4}>
                        <DatePicker
                          selected={pickup1}
                          onChange={(date) => setDesc1(date)}
                          customInput={<PickupTimeInput1 />}
                          showTimeSelect
                          showTimeSelectOnly
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          excludeTimes={[
                            setHours(setMinutes(new Date(), 0), 0),
                            setHours(setMinutes(new Date(), 30), 0),
                            setHours(setMinutes(new Date(), 0), 1),
                            setHours(setMinutes(new Date(), 30), 1),
                            setHours(setMinutes(new Date(), 0), 2),
                            setHours(setMinutes(new Date(), 30), 2),
                            setHours(setMinutes(new Date(), 0), 3),
                            setHours(setMinutes(new Date(), 30), 3),
                            setHours(setMinutes(new Date(), 0), 4),
                            setHours(setMinutes(new Date(), 30), 4),
                            setHours(setMinutes(new Date(), 0), 5),
                            setHours(setMinutes(new Date(), 30), 5),
                            setHours(setMinutes(new Date(), 0), 6),
                            setHours(setMinutes(new Date(), 30), 6),
                            setHours(setMinutes(new Date(), 0), 7),
                            setHours(setMinutes(new Date(), 30), 7),
                            
                            setHours(setMinutes(new Date(), 0), 23),
                            setHours(setMinutes(new Date(), 30), 23),
                            setHours(setMinutes(new Date(), 0), 22),
                            setHours(setMinutes(new Date(), 30), 22),
                            setHours(setMinutes(new Date(), 0), 21),
                            setHours(setMinutes(new Date(), 30), 21),
                            setHours(setMinutes(new Date(), 0), 20),
                            setHours(setMinutes(new Date(), 30), 20),
                            setHours(setMinutes(new Date(), 0), 19),
                            setHours(setMinutes(new Date(), 30), 19),
                          ]}
                          filterTime={filterPassedTime}
                        />
                        {/*} <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                  <TimePicker value={selectedDate} onChange={handleDateChange} />

                                </MuiPickersUtilsProvider>*/}
                        {error4 ? <>
                          <div className={classes.errors}>Select time</div>
                        </> : null}

                      </Grid>
                      <Grid item xs={11} md={12} lg={12} >
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            placeholder='Instruction to 
                            delivery agent'
                            name="pkinstruction"
                            onChange={(event) => pickupDesc1(event)}
                            startAdornment={<InputAdornment position="start"><img src='./Images/direction.svg'></img></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            className={classes.searchInput}
                          />
                        </FormControl>
                        {error5 ? <>
                          <div className={classes.errors}>Select pickup description</div>
                        </> : null}

                      </Grid>
                    </Grid>



                  </div>

                </div>
                <span className={classes.plusIcon}>
                  
                  {!plus ? (<> <div onClick={addPlus} className={classes.will2}>Add more <AddIcon></AddIcon></div></>):( <><div onClick={addPlus} className={classes.will2}>Remove <RemoveIcon onClick={addPlus}></RemoveIcon></div></>)}
                  </span>
                  {plus ? (
                <div className={classes.content1}>
                  <div className={classes.send_label}>
                    Add Pick Up Point 2(Optional)
                  </div>
                  <div className={classes.content}>
                    <Grid container spacing={2}>
                      <Grid item xs={11} md={12} lg={12} >
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          {/*} <OutlinedInput
                  id="outlined-adornment-weight"
                  placeholder='Address'
                  name="address"
                  startAdornment={<InputAdornment position="start"> <img src='./Images/loc1.svg'></img></InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  labelWidth={0}
                />*/}
                          <PlacesAutocomplete
                            value={address2}
                            onChange={setAddress2}
                            onSelect={handleSelect2}
                          >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                              <div >
                                <OutlinedInput
                                  id="outlined-adornment-weight"
                                  placeholder='Address'
                                  fullWidth
                                  name="address"
                                  startAdornment={<InputAdornment position="start"> <img src='./Images/loc1.svg'></img></InputAdornment>}
                                  aria-describedby="outlined-weight-helper-text"
                                  {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                  })}
                                  labelWidth={0}
                                  className={classes.searchInput}
                                />

                                <div className={classes.locationdropdown}>
                                  {loading && <div>Loading...</div>}
                                  {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                      ? 'suggestion-item--active'
                                      : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                      ? { backgroundColor: '#fafafa', cursor: 'pointer', padding: '10px' }
                                      : { backgroundColor: '#ffffff', cursor: 'pointer', padding: '10px' };
                                    return (
                                      <div
                                        {...getSuggestionItemProps(suggestion, {
                                          className,
                                          style,
                                        })}
                                      >
                                        <span>{suggestion.description}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </PlacesAutocomplete>
                        </FormControl>
                        {error1 ? <>
                          <div className={classes.errors}>Select pickup location</div>
                        </> : null}
                      </Grid>
                      <Grid item xs={11} md={12} lg={4}>
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            name="mobileNo"
                            onChange={(event) => pickupPhone2(event)}
                            placeholder='Phone Number'
                            startAdornment={<InputAdornment position="start"><img src='./Images/mobile.svg'></img></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            className={classes.searchInput}

                          />
                        </FormControl>
                        {error2 ? <>
                          <div className={classes.errors}>Select mobile number</div>
                        </> : null}
                      </Grid>
                      <Grid item xs={11} md={12} lg={4}>
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            name="email"
                            onChange={(event) => pickupEmail2(event)}
                            placeholder='User Email Address'
                            startAdornment={<InputAdornment position="start"> <img src='./Images/email-send.svg'></img></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            className={classes.searchInput}
                          />
                        </FormControl>
                        {error3 ? <>
                          <div className={classes.errors}>Select E-mail</div>
                        </> : null}
                      </Grid>
                      <Grid item xs={11} md={12} lg={4}>
                        <DatePicker
                          selected={pickup2}
                          onChange={(date) => setDesc2(date)}
                          customInput={<PickupTimeInput2 />}
                          showTimeSelect
                          showTimeSelectOnly
                          
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          excludeTimes={[
                            setHours(setMinutes(new Date(), 0), 0),
                            setHours(setMinutes(new Date(), 30), 0),
                            setHours(setMinutes(new Date(), 0), 1),
                            setHours(setMinutes(new Date(), 30), 1),
                            setHours(setMinutes(new Date(), 0), 2),
                            setHours(setMinutes(new Date(), 30), 2),
                            setHours(setMinutes(new Date(), 0), 3),
                            setHours(setMinutes(new Date(), 30), 3),
                            setHours(setMinutes(new Date(), 0), 4),
                            setHours(setMinutes(new Date(), 30), 4),
                            setHours(setMinutes(new Date(), 0), 5),
                            setHours(setMinutes(new Date(), 30), 5),
                            setHours(setMinutes(new Date(), 0), 6),
                            setHours(setMinutes(new Date(), 30), 6),
                            setHours(setMinutes(new Date(), 0), 7),
                            setHours(setMinutes(new Date(), 30), 7),
                            
                            setHours(setMinutes(new Date(), 0), 23),
                            setHours(setMinutes(new Date(), 30), 23),
                            setHours(setMinutes(new Date(), 0), 22),
                            setHours(setMinutes(new Date(), 30), 22),
                            setHours(setMinutes(new Date(), 0), 21),
                            setHours(setMinutes(new Date(), 30), 21),
                            setHours(setMinutes(new Date(), 0), 20),
                            setHours(setMinutes(new Date(), 30), 20),
                            setHours(setMinutes(new Date(), 0), 19),
                            setHours(setMinutes(new Date(), 30), 19),
                          ]}
                          filterTime={filterPassedTime}
                        />
                        {/*} <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                  <TimePicker value={selectedDate} onChange={handleDateChange} />

                                </MuiPickersUtilsProvider>*/}
                        {error4 ? <>
                          <div className={classes.errors}>Select time</div>
                        </> : null}

                      </Grid>
                      <Grid item xs={11} md={12} lg={12} >
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            placeholder='Instruction to delivery agent'
                            name="pkinstruction"
                            onChange={(event) => pickupDesc2(event)}
                            startAdornment={<InputAdornment position="start"><img src='./Images/direction.svg'></img></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            className={classes.searchInput}
                          />
                        </FormControl>
                        {error5 ? <>
                          <div className={classes.errors}>Select pickup description</div>
                        </> : null}

                      </Grid>
                    </Grid>



                  </div>

                </div>):(<></>)}
                </>):(<></>)}
                {/*END STOP*/}

                <div className={classes.content1}>
                  <div className={classes.send_label}>
                    Delivery Address
                  </div>
                  <div className={classes.content}>
                    <Grid container spacing={2}>
                      <Grid item xs={11} md={12} lg={12} >
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          {/*<OutlinedInput
                  id="outlined-adornment-weight"
                  name='deliveryAddress'
                  startAdornment={<InputAdornment position="start"> <img src='./Images/loc1.svg'></img></InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  labelWidth={0}
                />*/}
                          <PlacesAutocomplete
                            value={addressDelivery}
                            onChange={setAddressDelivery}
                            onSelect={handleSelectDelivery}
                          >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                              <div>
                                <OutlinedInput
                                  id="outlined-adornment-weight"
                                  placeholder='DeliveryAddress'
                                  name="deliveryAddress"
                                  fullWidth
                                  startAdornment={<InputAdornment position="start"> <img src='./Images/loc1.svg'></img></InputAdornment>}
                                  aria-describedby="outlined-weight-helper-text"
                                  {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                  })}
                                  labelWidth={0}
                                  className={classes.searchInput}
                                />

                                <div className={classes.locationdropdown}>
                                  {loading && <div>Loading...</div>}
                                  {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                      ? 'suggestion-item--active'
                                      : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                      ? { backgroundColor: '#fafafa', cursor: 'pointer', padding: '10px' }
                                      : { backgroundColor: '#ffffff', cursor: 'pointer', padding: '10px' };
                                    return (
                                      <div
                                        {...getSuggestionItemProps(suggestion, {
                                          className,
                                          style,
                                        })}
                                      >
                                        <span>{suggestion.description}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </PlacesAutocomplete>
                        </FormControl>
                        {error6 ? <>
                          <div className={classes.errors}>Select delivery location</div>
                        </> : null}
                      </Grid>

                      <Grid item xs={11} md={12} lg={4}>
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            name="deliveryMobileNo"
                            onChange={(event) => phoneDel(event)}
                            placeholder='Phone Number'
                            startAdornment={<InputAdornment position="start"> <img src='./Images/mobile.svg'></img></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            className={classes.searchInput}
                          />
                        </FormControl>
                        {error7 ? <>
                          <div className={classes.errors}>Select delivery mobile number</div>
                        </> : null}
                      </Grid>
                      <Grid item xs={11} md={12} lg={4}>
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            name='deliveryEmail'
                            onChange={(event) => emailDel(event)}
                            placeholder='Client Email Address'
                            startAdornment={<InputAdornment position="start"> <img src='./Images/email-send.svg'></img></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            className={classes.searchInput}
                          />
                        </FormControl>
                        {error8 ? <>
                          <div className={classes.errors}>Select delivery delivery E-mail</div>
                        </> : null}
                      </Grid>
                      <Grid item xs={11} md={12} lg={4}>
                        <DatePicker
                          selected={drop}
                          onChange={(date) => setDescDel(date)}
                          customInput={<DropTimeInput />}
                          showTimeSelect
                          showTimeSelectOnly
                    
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          excludeTimes={[
                            setHours(setMinutes(new Date(), 0), 0),
                            setHours(setMinutes(new Date(), 30), 0),
                            setHours(setMinutes(new Date(), 0), 1),
                            setHours(setMinutes(new Date(), 30), 1),
                            setHours(setMinutes(new Date(), 0), 2),
                            setHours(setMinutes(new Date(), 30), 2),
                            setHours(setMinutes(new Date(), 0), 3),
                            setHours(setMinutes(new Date(), 30), 3),
                            setHours(setMinutes(new Date(), 0), 4),
                            setHours(setMinutes(new Date(), 30), 4),
                            setHours(setMinutes(new Date(), 0), 5),
                            setHours(setMinutes(new Date(), 30), 5),
                            setHours(setMinutes(new Date(), 0), 6),
                            setHours(setMinutes(new Date(), 30), 6),
                            setHours(setMinutes(new Date(), 0), 7),
                            setHours(setMinutes(new Date(), 30), 7),
                            
                            setHours(setMinutes(new Date(), 0), 23),
                            setHours(setMinutes(new Date(), 30), 23),
                            setHours(setMinutes(new Date(), 0), 22),
                            setHours(setMinutes(new Date(), 30), 22),
                            setHours(setMinutes(new Date(), 0), 21),
                            setHours(setMinutes(new Date(), 30), 21),
                            setHours(setMinutes(new Date(), 0), 20),
                            setHours(setMinutes(new Date(), 30), 20),
                            setHours(setMinutes(new Date(), 0), 19),
                            setHours(setMinutes(new Date(), 30), 19),
                          ]}
                          filterTime={filterPassedTime}
                        />
                        {error9 ? <>
                          <div className={classes.errors}>Select delivery time</div>
                        </> : null}

                      </Grid>
                      <Grid item xs={11} md={12} lg={12} >
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            name='deliveryInstruction'
                            onChange={(event) => descDel(event)}
                            placeholder='Instruction to delivery agent'
                            startAdornment={<InputAdornment position="start"> <img src='./Images/direction.svg'></img></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            className={classes.searchInput}
                          />
                        </FormControl>
                        {error10 ? <>
                          <div className={classes.errors}>Select delivery instruction</div>
                        </> : null}
                      </Grid>

                   {/*}  <Grid item md={12} lg={12} className={classes.content1}>
                        <div className={classes.content1}>
                          <div className={classes.send_label}>
                            Add stop
                          </div>
                          <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">

                            <PlacesAutocomplete
                              value={addressStop}
                              onChange={setAddressStop}
                              onSelect={handleSelectStop}
                            >
                              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>
                                  <OutlinedInput
                                    id="outlined-adornment-weightite"
                                    placeholder='Add stop'
                                    name="addStop"
                                    fullWidth
                                    startAdornment={<InputAdornment position="start"> <img src='./Images/loc1.svg'></img></InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    {...getInputProps({
                                      placeholder: 'Search Places ...',
                                      className: 'location-search-input',
                                    })}(Optional)
                                    labelWidth={0}
                                    className={classes.searchInput}
                                  />(Optional)

                                  <div className={classes.locationdropdown}>
                                    {loading && <div>Loading...</div>}
                                    {suggestions.map(suggestion => {
                                      const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                      // inline style for demonstration purpose
                                      const style = suggestion.active
                                        ? { backgroundColor: '#fafafa', cursor: 'pointer', padding: '10px' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer', padding: '10px' };
                                      return (
                                        <div
                                          {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                          })}
                                        >
                                          <span>{suggestion.description}</span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </PlacesAutocomplete>
                          </FormControl>
                        </div>
                      </Grid>*/}
                    </Grid>



                  </div>

                </div>
                <div className={classes.content1}>
                  <div className={classes.itemLabel}>
                    Item Information
                  </div>
                  <div className='contr'>
                    What are you sending?
                  </div>
                  <Grid container>
                    
                    <div className={classes.content}>
                      <div>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                          {(popupState) => (
                            <React.Fragment>
                              <Button className={classes.document_btn} {...bindTrigger(popupState)}>
                                Certificates<img className={classes.ared} src='./Images/arrowed.svg'></img>
                              </Button>
                              <Menu {...bindMenu(popupState)} className={classes.popupContainer}>
              
                                <MenuItem className='dropnew' ><span className='valdet'>Marriage Certificate</span>
                                  <div className="passd">
                                    <IconButton onClick={() => handleRemoveMcerti()} className="valDocLeft">
                                      <RemoveIcon>
                                      </RemoveIcon>
                                    </IconButton>
                                    <Button className='newed'>{inputFieldsMcerti.length}</Button>
                                    <IconButton onClick={() => handleAddMcerti()} className="valDoc">
                                      <AddIcon>
                                      </AddIcon>
                                    </IconButton>
                                  </div></MenuItem>
                                <MenuItem className='dropnew'><span className='valdet'>Birth Certificate</span>
                                  <div className="passd">
                                    <IconButton onClick={() => handleRemoveBcerti()} className="valDocLeft">
                                      <RemoveIcon>
                                      </RemoveIcon>
                                    </IconButton>
                                    <Button className='newed'>{inputFieldsBcerti.length}</Button>
                                    <IconButton onClick={() => handleAddBcerti()} className="valDoc">
                                      <AddIcon>
                                      </AddIcon>
                                    </IconButton>
                                  </div></MenuItem>
                                <MenuItem className='dropnew'><span className='valdet'>Degree Certificate</span>
                                  <div className="passd">
                                    <IconButton onClick={() => handleRemoveDcerti()} className="valDocLeft">
                                      <RemoveIcon>
                                      </RemoveIcon>
                                    </IconButton>
                                    <Button className='newed'>{inputFieldsDcerti.length}</Button>
                                    <IconButton onClick={() => handleAddDcerti()} className="valDoc">
                                      <AddIcon>
                                      </AddIcon>
                                    </IconButton>
                                  </div></MenuItem>
                                <MenuItem className='dropnew' ><span className='valdet'>Other</span>
                                  <div className="passd">
                                    <IconButton onClick={() => handleRemoveOther()} className="valDocLeft">
                                      <RemoveIcon>
                                      </RemoveIcon>
                                    </IconButton>
                                    <Button className='newed'>{inputFieldsOther.length}</Button>
                                    <IconButton onClick={() => handleAddOther()} className="valDoc">
                                      <AddIcon>
                                      </AddIcon>
                                    </IconButton>
                                  </div></MenuItem>
                                {/*<MenuItem onClick={popupState.close}>Logout</MenuItem>*/}
                              </Menu>
                            </React.Fragment>
                          )}
                        </PopupState>
                      </div>
                    </div>&nbsp;&nbsp;
                   {/*} <div className={classes.content}>
                      <div>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                          {(popupState) => (
                            <React.Fragment>
                              <Button className={classes.document_btn} {...bindTrigger(popupState)}>
                                Photo<img className={classes.ared} src='./Images/arrowed.svg'></img>
                              </Button>
                            </React.Fragment>
                          )}
                        </PopupState>
                      </div>
                    </div>&nbsp;&nbsp;*/}
                   {/*} <div className={classes.content}>
                      <div>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                          {(popupState) => (
                            <React.Fragment>
                              <Button className={classes.document_btn} {...bindTrigger(popupState)}>
                                Agreement<img className={classes.ared} src='./Images/arrowed.svg'></img>
                              </Button>
                            </React.Fragment>
                          )}
                        </PopupState>
                      </div>
                          </div>&nbsp;&nbsp;*/}
                  {/*}  <div className={classes.content}>
                      <div>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                          {(popupState) => (
                            <React.Fragment>
                              <Button className={classes.document_btn} {...bindTrigger(popupState)} onClick={() => handleAddOther()}>
                                Others
                              </Button>
                            </React.Fragment>
                          )}
                        </PopupState>
                      </div>
                    </div>*/}
                  </Grid>



                  <Grid container className={classes.documents} containe>
                    {
                      inputFields.map((inputField, index) => (
                        <div key={index}>
                          <Grid container className={classes.documents} spacing={1}>
                            <Grid item xs={11} md={12} lg={6} >
                              <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <OutlinedInput

                                  name='passportName'
                                  placeholder='Passport Name'
                                  defaultValue={inputField.passportName}
                                  className={classes.searchInput}
                                  aria-describedby="outlined-weight-helper-text"
                                  inputProps={{
                                    'aria-label': 'weight',
                                  }}
                                  onChange={(event) => handlePassport(event, index)}
                                  labelWidth={0}
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={11} md={12} lg={6} className={classes.documentsInput}>
                              <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <OutlinedInput

                                  name='passportNumber'
                                  placeholder='Passport Number'
                                  defaultValue={inputField.passportNumber}
                                  className={classes.searchInput}
                                  aria-describedby="outlined-weight-helper-text"
                                  inputProps={{
                                    'aria-label': 'weight',
                                  }}
                                  labelWidth={0}
                                  onChange={(event) => handlePassportNo(event, index)}
                                />
                              </FormControl>
                            </Grid>
                          </Grid>

                        </div>
                      ))
                    }

                  </Grid>
                  <Grid container className={classes.documents}>
                    {
                      inputFieldsCompany.map((inputField, index) => (
                        <div key={index}>
                          <Grid container spacing={1}>
                            <Grid item xs={11} md={12} lg={6} >
                              <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <OutlinedInput
                                  placeholder='Emirates ID Number'
                                  name='Company Id'
                                  defaultValue={inputField.passportName}
                                  className={classes.searchInput}
                                  aria-describedby="outlined-weight-helper-text"
                                  inputProps={{
                                    'aria-label': 'weight',
                                  }}
                                  onChange={(event) => handleId1(event, index)}
                                  labelWidth={0}
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={11} md={12} lg={6} >
                              <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <OutlinedInput
                                  placeholder='Emirates ID Name'
                                  name='Company Name'
                                  defaultValue={inputField.passportNumber}
                                  className={classes.searchInput}
                                  aria-describedby="outlined-weight-helper-text"
                                  inputProps={{
                                    'aria-label': 'weight',
                                  }}
                                  onChange={(event) => handleId2(event, index)}
                                  labelWidth={0}
                                />
                              </FormControl>
                            </Grid>
                          </Grid>

                        </div>
                      ))
                    }

                  </Grid>
                  <Grid container className={classes.documents}>
                    {
                      inputFieldsPhoto.map((inputFieldsPhoto, index) => (
                        <div key={index}>
                          <Grid container className={classes.documents}>
                            <Grid item xs={11} md={12} lg={12} >
                              <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <OutlinedInput

                                  name='photo'
                                  placeholder='Description photo'
                                  defaultValue={inputFieldsPhoto.photoName}
                                  className={classes.searchInput}
                                  aria-describedby="outlined-weight-helper-text"
                                  inputProps={{
                                    'aria-label': 'weight',
                                  }}
                                  onChange={(event) => handlephoto(event, index)}
                                  labelWidth={0}
                                />
                              </FormControl>
                            </Grid>
                          </Grid>

                        </div>
                      ))
                    }

                  </Grid>
                  <Grid container className={classes.documents}>
                    {
                      inputFieldsMcerti.map((inputFieldsMcerti, index) => (
                        <div key={index}>
                          <Grid container className={classes.documents}>
                            <Grid item md={12} lg={12} >
                              <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <OutlinedInput

                                  name='mcerti'
                                  placeholder='Description Marriage Certificate'
                                  defaultValue={inputFieldsMcerti.name}
                                  className={classes.searchInput}
                                  aria-describedby="outlined-weight-helper-text"
                                  inputProps={{
                                    'aria-label': 'weight',
                                  }}
                                  onChange={(event) => handleMcerti(event, index)}
                                  labelWidth={0}
                                />
                              </FormControl>
                            </Grid>
                          </Grid>

                        </div>
                      ))
                    }

                  </Grid>
                  <Grid container className={classes.documents}>
                    {
                      inputFieldsBcerti.map((inputFieldsBcerti, index) => (
                        <div key={index}>
                          <Grid container className={classes.documents}>
                            <Grid item md={12} lg={12} >
                              <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <OutlinedInput

                                  name='bcerti'
                                  placeholder='Description Birth Certificate'
                                  defaultValue={inputFieldsBcerti.name}
                                  className={classes.searchInput}
                                  aria-describedby="outlined-weight-helper-text"
                                  inputProps={{
                                    'aria-label': 'weight',
                                  }}
                                  onChange={(event) => handleBcerti(event, index)}
                                  labelWidth={0}
                                />
                              </FormControl>
                            </Grid>
                          </Grid>

                        </div>
                      ))
                    }

                  </Grid>
                  <Grid container className={classes.documents}>
                    {
                      inputFieldsDcerti.map((inputFieldsDcerti, index) => (
                        <div key={index}>
                          <Grid container className={classes.documents}>
                            <Grid item md={12} lg={12} >
                              <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <OutlinedInput

                                  name='dcerti'
                                  placeholder='Description Degree Certificate'
                                  defaultValue={inputFieldsDcerti.name}
                                  className={classes.searchInput}
                                  aria-describedby="outlined-weight-helper-text"
                                  inputProps={{
                                    'aria-label': 'weight',
                                  }}
                                  onChange={(event) => handleDcerti(event, index)}
                                  labelWidth={0}
                                />
                              </FormControl>
                            </Grid>
                          </Grid>

                        </div>
                      ))
                    }

                  </Grid>
                  <Grid container className={classes.documented}>
                    {
                      inputFieldsOther.map((inputFieldsOther, index) => (
                        <div key={index}>
                          <Grid container className={classes.documents} spacing={3}>
                            <Grid item md={12} lg={12} >
                              <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <OutlinedInput

                                  name='other'
                                  placeholder='Description'
                                  defaultValue={inputFieldsOther.name}
                                  className={classes.searchInput}
                                  aria-describedby="outlined-weight-helper-text"
                                  inputProps={{
                                    'aria-label': 'weight',
                                  }}
                                  onChange={(event) => handleOther(event, index)}
                                  labelWidth={0}
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          &nbsp;&nbsp;
                        </div>
                      ))
                    }

                  </Grid>

                </div>
                <Grid  >
                     <span className={classes.prefer}>Prefer delivery with </span>{/*<span className={classes.apply}>Charges apply</span>*/}<br></br><br/>
                     <Grid item xs={12} md={3} lg={3}>
                     <ToggleButton
                        value="check1"
                        selected={selected1}
                        className={clsx('toggledts', 'toggle-button-left')}
                        onChange={() => {
                          setSelected1(!selected1);
                        }}
                        onClick={updatePrice}
                      >
                        <CheckIcon />
                      </ToggleButton> &nbsp;&nbsp;&nbsp;&nbsp;<span className={classes.prefer}>Post envelope (1.5 AED)</span>
                      &nbsp;&nbsp;
                      </Grid>
                      <Grid item xs={12} md={3} lg={3}>
                      <ToggleButton
                        value="check2"
                        className={clsx('toggledts', 'toggle-button-left')}
                        selected={selected2}
                        onChange={() => {
                          setSelected2(!selected2);
                        }}
                        onClick={updatePrice1}
                      >
                        <CheckIcon />
                      </ToggleButton>&nbsp;&nbsp;&nbsp;&nbsp; <span className={classes.prefer}>A3 envelope (3 AED)</span>
                      &nbsp;&nbsp;
                      </Grid>
                      <ToggleButton
                        value="check3"
                        className={clsx('toggledts', 'toggle-button-left')}
                        selected={selected3}
                        onChange={() => {
                          setSelected3(!selected3);
                        }}
                        onClick={updatePrice2}
                      >
                        <CheckIcon />
                      </ToggleButton>&nbsp;&nbsp;&nbsp;&nbsp; <span className={classes.prefer}>A4 envelope (2AED)</span>
                    </Grid>

                {/*<div className={classes.content}>
                  <Grid container spacing={3}>
                    <Grid item md={4} lg={4} >
                      <div className={classes.send_label}>
                        Approx Parcel Value
                      </div>
                      <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <OutlinedInput
                          id="outlined-adornment-weight"
                          placeholder='Enter parcel value'
                          onChange={(e) => priceChange(e)}

                          endAdornment={<InputAdornment position="end"> <p><b>AED</b></p></InputAdornment>}
                          aria-describedby="outlined-weight-helper-text"
                          inputProps={{
                            'aria-label': 'weight',
                          }}
                          labelWidth={0}
                          className={classes.searchInput}
                        />
                      </FormControl>
                    </Grid>
                    <Grid container item md={8} lg={8} display="block">
                      <div className={classes.send_label}>
                        Secure Your Parcel
                      </div>
                      <Grid xs={6}>
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            placeholder='Parcel value'
                            onChange={(e) => priceChange(e)}

                            endAdornment={<InputAdornment position="end"> <p><b>AED</b></p></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            className={classes.searchInput}
                          />
                        </FormControl>
                      </Grid>
                      <p className={classes.secureParcelInfo}>0 AED : Additional charges for securing parcel</p>
                      <p className={classes.secureParcelWarning}>Secure your important packages to retrieve the value in case of loss or damage done during delivery. Valid upto AED 5000.</p>
                    </Grid>
                  </Grid>
                </div>*/}

                {/*<div className={classes.content1}>
                  <div className={classes.send_label}>
                    Payment Type
                  </div>
                  <div className={classes.content}>
                    <Grid container spacing={2}>
                      <Grid xs={2} item>
                        <Button className={classes.weightSelectorButton}>
                          Cash
                        </Button>
                      </Grid>
                      <Grid xs={3} item>
                        <Button className={classes.weightSelectorButton}>
                          Credit / Debit Card
                        </Button>
                      </Grid>
                      <Grid xs={2.5} item>
                        <Button className={classes.weightSelectorButton}>
                          e-Dirham Card
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                          </div>*/}


                {/*Payment not in cooperate login */}
                {/*} <div className={classes.content}>
            <Grid container spacing={3}>
             <Grid item md={12} lg={12} >
               <div>
                 Payment Type
               </div>
               <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  className={classes.weightGroup}
                  fullWidth
                >
                  <ToggleButton className={classes.weightButton} value="web">Cash</ToggleButton>
                  <ToggleButton className={classes.weightButton} value="android">Credit/Debit Card</ToggleButton>
                  <ToggleButton className={classes.weightButton} value="ios1">e-Dirham Card<br/>(0 Balance)Top up Now</ToggleButton>
                  


                </ToggleButtonGroup>

               </Grid>
               </Grid>
                </div>*/}


                <div className={classes.content1}>
                  <div className={classes.send_label}>
                    Other
                  </div>
                  <Grid container spacing={3}>
                    {/*} <Grid item md={4} lg={4} >

                        <ToggleButton

                          value="check"
                          selected={selected}
                          onChange={() => {
                            setSelected(!selected);
                          }}
                        >
                          <CheckIcon />
                        </ToggleButton>&nbsp;&nbsp;Notify recipient by Whatsapp Messages
                      </Grid>*/}
                    <Grid item md={4} lg={4} >
                      <ToggleButton
                        value="check"
                        selected={selected4}
                        onChange={() => {
                          setSelected4(!selected4);
                        }}
                      >
                        <CheckIcon />
                      </ToggleButton> &nbsp;&nbsp;Notify recipient by SMS
                    </Grid>
                  </Grid>
                </div>


                <div className={classes.content}>
                    <Grid container spacing={3}>
                      <Grid item md={3} lg={3} >
                      </Grid>
                      {price !== "" ? (
                        <Grid item md={6} lg={6} >
                          <div className={classes.total}>
                            <b className={classes.price_cont}>Total Estimated Price</b><img className={classes.price_img} src='./Images/info.svg'></img><b className={classes.price_tag}>&nbsp;&nbsp;{price}</b>&nbsp;AED
                          </div>
                        </Grid>) : (<></>)}

                      <Grid item md={3} lg={3} >
                      </Grid>
                    </Grid>
                  </div>
                <div className={classes.divider}></div>
               {/*} <div className={classes.estimationContainer}>
                  <p className={classes.totalPrice}>Total Estimated Price : <span className={classes.totalPriceCount}>65.00</span> <span className={classes.totalPriceUnit}>AED</span></p>
                </div>*/}

<div className={classes.content}>
                  <Grid container spacing={3}>
                    <Grid item md={4} lg={4} >
                    </Grid>
                    <Grid item xs={10} md={4} lg={4}  >
                      <button className={classes.service_btn} type="submit" >Submit Order</button>
                    </Grid>
                    <Grid item md={4} lg={4} >
                    </Grid>
                  </Grid>
                </div>
              </form>
              <div className={classes.content5}>
                <Grid container spacing={3} className={classes.contnew}>
                  <span >By Clicking ‘Submit order’ you are forwarding your request to couriers and agree to Our Terms and Conditions along with the <u><b>clauses of the agreements</b></u></span>
                </Grid>
              </div>

            </TabPanel>
            <TabPanel value={1}>
            <ScheduleDocument></ScheduleDocument>
            </TabPanel>


            {/*schedule later part begins */}


          </TabsUnstyled>
          <Grid item md={12} lg={12} >
            <div className='footed'>
              <Footer></Footer>
            </div>
          </Grid>
        </Grid>
      </Grid>

       <BottomNav/> 

    </>
  )
}
export default withStyles(SendPackageStyle)(DocumentA);
