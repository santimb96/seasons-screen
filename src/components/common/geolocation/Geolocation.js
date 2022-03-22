import React from "react";
import ErrorGeo from "../../errors/ErrorGeo";
import SuccessGeo from "../../success/SuccessGeo";

class Geolocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      errorMsg: "",
    };
  }

  componentDidMount() {
    //this.setState({latitude: geolocation()})
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      (err) => this.setState({ errorMsg: err.message })
    );
    this.output = "";
  }

  render() {
    !this.state.latitude || !this.state.longitude
      ? (this.output = <ErrorGeo error={this.state.errorMsg} />)
      : (this.output = (
          <SuccessGeo lat={this.state.latitude} long={this.state.longitude} />
        ));

    return <div className="container-fluid">{this.output}</div>;
  }
}

export default Geolocation;
