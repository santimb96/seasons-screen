import React from "react";
import ErrorGeo from "../errors/ErrorGeo";
import SuccessGeo from "../success/SuccessGeo";
import SpinnerLoading from "../common/SpinnerLoading";

class Geolocation extends React.Component {
  state = {
    latitude: null,
    errorMsg: "",
    spinnerMsg: 'We need your location!'
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.table(position.coords);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => this.setState({ errorMsg: err.message })
    );
  }

  isLoaded() {
    if (!this.state.latitude) {
      if (this.state.errorMsg === "") {
        return <SpinnerLoading msg={this.state.spinnerMsg}/>;
      } else {
        return <ErrorGeo error={this.state.errorMsg} />;
      }
    } else {
      return <SuccessGeo lat={this.state.latitude} />;
    }
  }

  render() {
    return <div className="container-fluid">{this.isLoaded()}</div>;
  }
}

export default Geolocation;
