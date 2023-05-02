import React, { useState } from "react";
// import ReactDOM from "react-dom";
import GoogleMaps from "simple-react-google-maps";

// import "./styles.css";

function Map() {
  const [latitude, setLatitude] = useState(37.4224764);
  const [longitude, setLongitude] = useState(-122.0842499);

  if (navigator.geolocation) {
    function success(pos) {
      var crd = pos.coords;
      if (crd.latitude) {
        setLatitude(crd.latitude);
        setLongitude(crd.longitude);
      }
    }
    navigator.geolocation.getCurrentPosition(success);
  }
  return (
    <div className="Map">


      {navigator.geolocation && (
        <GoogleMaps
          apiKey={"AIzaSyCcDzFL1P0Jxp5jfSVUTGUtL8S8vmMxdSA"}
          style={{ height: "400px", width: "100%" }}
          zoom={6}
          center={{ lat: latitude, lng: longitude }}
          markers={{ lat: latitude, lng: longitude }} //optional
        />
      )}
    </div>
  );
}
export default Map;

