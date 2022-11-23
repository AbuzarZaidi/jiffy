import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  Polyline,
} from "react-google-maps";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getBaseURL } from "../../../api/apiManagement";
import { getFirestore, onSnapshot, collection } from "@firebase/firestore";
class Map extends React.Component {
  constructor(props) {
    super(props);
    if (props !== undefined) {
      this.state = {
        lat: "",
        lng: "",
        delLat: "",
        delLng: "",
        dLat: "",
        dLng: "",
        data: "",
        sLat: "",
        sLng: "",
        id: this.props.items.id,
      };
    }
  }
  path = [
    { lat: 18.558908, lng: -68.389916 },
    { lat: 18.558853, lng: -68.389922 },
    { lat: 18.558375, lng: -68.389729 },
    { lat: 18.558032, lng: -68.389182 },
    { lat: 18.55805, lng: -68.388613 },
    { lat: 18.558256, lng: -68.388213 },
    { lat: 18.558744, lng: -68.387929 },
  ];

  getData(id) {
    const firebaseConfig = {
      apiKey: "AIzaSyApfVOAcPyKnWgMlDCQlrlJvDLro2LW4Xo",
      authDomain: "jiffy-7c780.firebaseapp.com",
      projectId: "jiffy-7c780",
      storageBucket: "jiffy-7c780.appspot.com",
      messagingSenderId: "858697568951",
      appId: "1:858697568951:web:c314027e738f1df16db332",
      measurementId: "G-ZMK5HQEQFN",
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    onSnapshot(collection(getFirestore(), "location"), (snapshot) => {
      this.setState({
        data: snapshot.docs.map((doc) => doc.data()),
      });
      console.log("newwwwwwwwwwwwwww", this.state.data);
    });
    const url = getBaseURL() + "/vendor/api/v1/parcel";

    axios
      .get(url, {
        params: {
          customer_id: "JIFFYaf6ea3fb-ef53-43fe-93cf-ab541323e1bb",
        },
      })
      .then((response) => {
        console.log("uiiiiiiiiiiiiiiiii", response);

        const res = response.data.parcel[0];
        // if (res && res.length) {
        let mapVal = localStorage.getItem("idMap");

        for (let i = 0; i < this.state.data.length; i++) {
          if ((mapVal === this.state.data[i].customerId)) {
            this.setState({
              delLat: this.state.data[i].latitude,
              delLng: this.state.data[i].longitude,
            });
            //showTrack(this.state.data[i].latitude)
            //showTrack1(this.state.data[i].longitude)
          }
        }
        console.log("rtyyyyyy", this.state.delLat);

        console.log("rtyyyyyy", this.state.delLng);
        this.newData();
        //}
      });

    //const url = "https://apis.jiffy.ae/vendor/api/v1/parcel"

   
    //console.log("rtyyyyyy",this.state.lat)
  }

  componentDidMount() {
    setTimeout(() => {
      this.getData();
     
    }, 3000);
  }


  newData() {
    const url = "https://apis.jiffy.ae/vendor/api/v1/parcel";

    //const [data, setData] = React.useState();
    axios
    .get(url, {
      params: {
        _id: localStorage.getItem("_id"),
      },
    })
    .then((response) => {
      console.log(response);
      //setData(response.data.parcel[0])
      this.setState({
        lat: parseFloat(response.data.parcel[0].pickup[0].pickup_latitude),
        lng: parseFloat(response.data.parcel[0].pickup[0].pickup_longitude),

        dLat: parseFloat(
          response.data.parcel[0].delivery[0].delivery_latitude
        ),
        dLng: parseFloat(
          response.data.parcel[0].delivery[0].delivery_longitude
        ),
      });
      if (
        response.data.parcel[0].stop_latitude &&
        response.data.parcel[0].stop_longitude
      ) {
        this.setState({
          sLat: parseFloat(response.data.parcel[0].stop_latitude),
          sLng: parseFloat(response.fdata.parcel[0].stop_longitude),
        });
      }

      console.log("uuuuuuuuuuuuuuuuuuuu", this.state);
    });
  }

  render = () => {
    return (
      <>
        {this.state.lat}
        {this.state.delLat !== undefined || this.state.delLat !== "" ? (
          <GoogleMap
            defaultZoom={11}
            defaultCenter={{ lat: +25.2788, lng: +55.3309 }}
          >
            <Marker
              position={{
                lat: +this.state.lat,
                lng: +this.state.lng,
              }}
            />
            <Marker icon="https://jiffy.ae/staticicon/mail/mailer_image/jiffy_mailer_character.svg"
              label={"Delivery agent"}
              position={{
                lat: +this.state.delLat,
                lng: +this.state.delLng,
              }}
            />
            <Marker
              position={{
                lat: +this.state.dLat,
                lng: +this.state.dLng,
              }}
            />
            {this.state.sLat !== "" && this.state.sLng !== "" ? (
              <>
                <Marker
                  label={"Delivery Stop"}
                  position={{
                    lat: +this.state.sLat,
                    lng: +this.state.sLng,
                  }}
                />
              </>
            ) : (
              <></>
            )}
          </GoogleMap>
        ) : (
          <>LOADING</>
        )}
      </>
    );
  };
}

const MapComponent = withScriptjs(withGoogleMap(Map));

export default MapComponent;
