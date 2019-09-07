import React, { Component } from "react";

class Geolocation extends Component {
  render() {
    return <button onClick={this.handleGeolocation}>Current Location</button>;
  }
  handleGeolocation = e => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const success = pos => {
      const crd = pos.coords;

      this.props.updateWeatherData({ lon: crd.longitude, lat: crd.latitude });

      // console.log("Your current position is:");
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  };
}

export default Geolocation;
