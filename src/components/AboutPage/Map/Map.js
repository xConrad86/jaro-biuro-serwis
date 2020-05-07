import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import styles from "./Map.module.css";

class GMap extends Component {
  render() {
    const mapSize = {
      width: "90vw",
      height: "80vh",
    };
    return (
      <div className={styles.mapCenter}>
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: 51.07898,
            lng: 17.06973,
          }}
          style={mapSize}
        >
          <Marker></Marker>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBszSQB30rUP2KvrDoG0ADhrfcHagPRwwg",
})(GMap);
