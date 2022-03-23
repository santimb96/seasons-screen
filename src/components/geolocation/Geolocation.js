import React from "react";
import ErrorGeo from "../errors/ErrorGeo";
import SuccessGeo from "../success/SuccessGeo";

class Geolocation extends React.Component {
  state = {
    latitude: null,
    errorMsg: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>{
        console.table(position.coords);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })},
      (err) => this.setState({ errorMsg: err.message })
    );
  }

  render() {
    !this.state.latitude || !this.state.longitude
      ? this.output = <ErrorGeo error={this.state.errorMsg} />
      : this.output = <SuccessGeo lat={this.state.latitude} />;

    return <div className="container-fluid">{this.output}</div>;
  }
}

export default Geolocation;
