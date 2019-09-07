import React, { Component } from "react";
import Chart from "react-apexcharts";

class FiveDay extends Component {
  state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  };

  render() {
    return (
      <>
        <div className="charts">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                id="chartWeather"
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="500"
              />
            </div>
          </div>
        </div>
        <button onClick={this.handleClick}>1 day</button>
      </>
    );
  }
  handleClick = e => {
    this.props.updateForecastFlag({ forecast: true });
  };
}

// showChart = () => {
//   return (
//     <div className="charts">
//       <div className="row">
//         <div className="mixed-chart">
//           <Chart
//             options={this.state.options}
//             series={this.state.series}
//             type="bar"
//             width="500"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export default FiveDay;
