import React from "react";
import ReactDOM from "react-dom"
import SeasonDisplay from "./SeasonDisplay";
class App extends React.Component {

  state = { lat: null, errorMessage: null };  //= 1 defe olmalidir!

  componentDidMount() {  //life-cycle method
    window.navigator.geolocation.getCurrentPosition(
      (position) => { this.setState({ lat: position.coords.latitude }) },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    if (this.state.errorMessage && !this.state.lat) {  //state -setState ile deyishir
      return <div>{this.state.errorMessage}</div>
    }

    return <div>Loading..</div>

  }

  render() {
    return <div>{this.renderContent()}</div>  //daxilinde ylniz JSX qaytarmalidir!
  }
}

ReactDOM.render(<App />, document.getElementById("root"));