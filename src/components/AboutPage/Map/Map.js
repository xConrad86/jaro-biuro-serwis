import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class GMap extends Component {
  render() {
    const mapSize = {
      width: "50vw",
      height: "80vh",
    };
    return (
      <div>
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
