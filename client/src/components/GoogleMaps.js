import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

// Google Map via react-google-maps
const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 34.95678, lng: -106.71582 }}
    >
      {
        <MarkerWithLabel
          position={{ lat: 34.95678, lng: -106.71582 }}
          labelAnchor={new window.google.maps.Point(2, 40)}
          labelStyle={{
            backgroundColor: "opaque",
            textAlign: "center",
            fontSize: "15px",
            color: "rgb(237, 9, 44)",
            padding: "16px",
          }}
        >
          <div>ABQ SuperMax</div>
        </MarkerWithLabel>
      }
    </GoogleMap>
  ))
);

export default MyMapComponent;
