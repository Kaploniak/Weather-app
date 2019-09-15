import React from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import OneDay from "./components/OneDay";
import axios from "axios";
import Geolocation from "./components/Geolocation";
import FiveDay from "./components/FiveDay";
const API_KEY = "ac078ec07b106b88c2797b4a420b5665";
// const { API_KEY } = require("./config");

class App extends React.Component {
  state = {
    data: {},
    chartData: {},
    forecast: null
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Form updateWeatherData={this.updateWeatherData} />
        <Geolocation updateWeatherData={this.updateWeatherData} />
        {this.checkDisplay() &&
          (this.state.forecast ? (
            <OneDay
              data={this.state.data}
              updateForecastFlag={this.updateForecastFlag}
            />
          ) : (
            <FiveDay
              chartData={this.chartData}
              updateForecastFlag={this.updateForecastFlag}
            />
          ))}
      </div>
    );
  }

  checkDisplay = () => {
    return this.state.forecast !== null;
  };

  updateForecastFlag = ({ forecast }) => {
    this.setState(currentState => {
      return { ...currentState, forecast };
    });
  };

  updateWeatherData = newWeatherData => {
    const { city, country, lon, lat } = newWeatherData;
    this.fetchData({ city, country, lon, lat });
    this.fetchChartData({ city, country, lon, lat });
    this.setState({ forecast: true });
  };

  fetchChartData = ({ city, country, lon, lat }) => {
    const url = lon
      ? `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      : `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${API_KEY}`;

    axios.get(url).then(({ data }) => {
      this.setState(currentState => {
        return { ...currentState, chartData: data };
      });
    });
  };
  fetchData = ({ city, country, lon, lat }) => {
    const url = lon
      ? `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      : `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`;

    axios.get(url).then(({ data }) => {
      this.setState(currentState => {
        return { ...currentState, data };
      });
    });
  };
}

export default App;

// {
//   this.checkDisplay() ? (
//     this.state.forcast ? (
//       <OneDay
//         data={this.state.data}
//         updateForecastFlag={this.updateForecastFlag}
//       />
//     ) : (
//         <FiveDay
//           chartData={this.chartData}
//           updateForecastFlag={this.updateForecastFlag}
//         />
//       )
//   )}
