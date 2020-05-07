import React, { Component } from "react";
import styles from "./About.module.css";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class About extends Component {
  render() {
    const mapSize = {
      width: "50vw",
      height: "80vh",
    };
    return (
      <div className={styles.marginTop}>
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: 51.07898,
            lng: 17.06973,
          }}
          style={mapSize}
        >
          <Marker>
            title="The marker`s title will appear as a tooltip." name={"SOMA"}
            position={{ lat: 51.06898, lng: 17.06973 }}
          </Marker>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBszSQB30rUP2KvrDoG0ADhrfcHagPRwwg",
})(About);
