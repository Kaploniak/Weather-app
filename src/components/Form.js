import React, { Component } from "react";

class Form extends Component {
  state = {
    city: "",
    country: "",
    lon: "",
    lat: "",
    forecast: true
  };
  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmitTask}>
          <label>
            <input
              type="text"
              name="city"
              placeholder="City"
              onFocus={e => {
                e.target.select();
              }}
              onChange={this.handleChange}
              value={this.state.city}
            />
          </label>
          <label>
            <input
              type="text"
              name="country"
              placeholder="Country"
              onFocus={e => {
                e.target.select();
              }}
              onChange={this.handleChange}
              value={this.state.country}
            />
          </label>
          <button>Get weather</button>
        </form>
      </>
    );
  }

  handleSubmitTask = e => {
    const { city, country, lon, lat } = this.state;
    e.preventDefault();
    this.props.updateWeatherData({ city, country, lon, lat, forecast: true });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
}

export default Form;
