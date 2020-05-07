import React, { Component } from "react";
import styles from "./About.module.css";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class App extends Component {
  render() {
    return (
      <div id={styles.styleMap}>
        Hello World
        <Map
          google={this.props.google}
          zoom={10}
          initialCenter={{
            lat: 35.5496939,
            lng: -120.7060049,
          }}
        >
          <Marker />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBszSQB30rUP2KvrDoG0ADhrfcHagPRwwg",
  version: 3.31,
})(App);
