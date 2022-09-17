import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap,Marker,Polyline } from 'react-google-maps'
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getFirestore, onSnapshot, collection } from '@firebase/firestore';
class Map extends React.Component {
  constructor(props){
    super(props);
    if(props !== undefined){
    //alert(JSON.stringify(props.items))
   
    this.state = {
      lat:'',
      lng:'',
      delLat:'',
      delLng:'',
      dLat:'',
      dLng:'',
      data:'',
      sLat:'',
      sLng:'',
      id:this.props.items.id
    }
  }
  }
  path = [
    { lat: 18.558908, lng: -68.389916 },
    { lat: 18.558853, lng: -68.389922 },
    { lat: 18.558375, lng: -68.389729 },
    { lat: 18.558032, lng: -68.389182 },
    { lat: 18.55805, lng: -68.388613 },
    { lat: 18.558256, lng: -68.388213 },
    { lat: 18.558744, lng: -68.387929 }
  ];

  getData(id){
    
    
    const url = "https://apis.jiffy.ae/vendor/api/v1/parcel"
    
    axios.get(url, {
      params: {
          _id: id
      }
  }).then((response) => {

      console.log(response)
      //setData(response.data.parcel[0])
      this.setState({
        lat: parseFloat(response.data.parcel[0].pickup_latitude),
        lng: parseFloat(response.data.parcel[0].pickup_longitude),
        //delLat:parseFloat(this.props.items.latitude),
       // delLng:parseFloat(this.props.items.longitude),
        dLat: parseFloat(response.data.parcel[0].delivery_latitude),
        dLng: parseFloat(response.data.parcel[0].delivery_longitude),
      })
      if(response.data.parcel[0].stop_latitude && response.data.parcel[0].stop_longitude){
        this.setState({
          sLat: parseFloat(response.data.parcel[0].stop_latitude),
          sLng: parseFloat(response.data.parcel[0].stop_longitude)
        })
      }
      
      console.log(JSON.stringify(this.state))

  });
  }
  newData(){
    
  
  }

  componentDidMount(){
    
    
    this.getData();
    this.newData();
  }
  componentWillMount() {
   //const [data, setData] = React.useState();
  const firebaseConfig = {
    apiKey: "AIzaSyD1lQJtp4gTlOYWAfvCuBZH6nZ45f0FBKk",
    authDomain: "jiffy-e579d.firebaseapp.com",
    projectId: "jiffy-e579d",
    storageBucket: "jiffy-e579d.appspot.com",
    messagingSenderId: "736043927471",
    appId: "1:736043927471:web:463a4e99625f6f593c515a",
    measurementId: "G-S2ZKMM1N69"
  };
  const app = initializeApp(firebaseConfig);
  //const db = app.firestore();
  const db = getFirestore(app);
  onSnapshot(collection(getFirestore(), "location"), (snapshot) => {
    
    this.setState({
      data:snapshot.docs.map(doc => doc.data())})
    console.log(this.state.data)
  });
  //const url = "http://3.108.59.82/vendor/api/v1/parcel"
    
 // axios.get(url, {
  //  params: {
   //     _id: this.props.items.id
  //  }
//}).then((response) => {

   // console.log(response)
   // const resData = response.data.parcel[0];
   // if (res && res.length) {
    //  for (let i = 0; i < res.length; i++) {
    //    res[i].customerId = resData.customerId
    //    this.setState({ 
    //      delLat:parseFloat(res[i].latitude),
    // /     delLng:parseFloat(res[i].longitude),
        //    })

    //  }
   // }

  //  this.setState({ 
  //delLat:parseFloat(this.props.items.latitude),
     // delLng:parseFloat(this.props.items.longitude),
  //  })
  //  console.log(JSON.stringify(this.state))

//});


 
}
 
  render = () => {
    
    
    return (
      <>
      {this.state.delLat !== undefined || this.state.delLat !== ''  ? (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{lat:  +25.2788 ,lng: +55.3309}}
        >
          <Marker position={{
            lat: +this.state.lat,
            lng: +this.state.lng,
          }} />
           <Marker label={"Delivery boy"} position={{
            lat: +25.2788,
            lng: +55.3309,
          }} />
          <Marker position={{
            lat: +this.state.dLat,
            lng: +this.state.dLng,
          }} />
          {
            this.state.sLat !=='' && this.state.sLng !== '' ? <>
             <Marker label={"Delivery Stop"} position={{
            lat: +this.state.sLat,
            lng: +this.state.sLng,
          }} />
            </> :<></>
          }
          
      </GoogleMap>):(<>LOADING</>)}
      </>
    )
  }
}

const MapComponent = withScriptjs(withGoogleMap(Map))

export default MapComponent;