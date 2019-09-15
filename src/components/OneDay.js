import React from "react";
// import Charts from "./FiveDay";

const OneDay = props => {
  const { name, main, weather, sys } = props.data;

  const ref = {
    Rain: <i className="fas fa-cloud-rain" />,
    Clear: <i className="fas fa-sun" />,
    Clouds: <i className="fas fa-cloud" />,
    Fog: <i className="fas fa-smog" />,
    Snow: <i className="fas fa-snowflake" />
  };

  // const handleClick = e => {
  //   props.updateForecastFlag({ forecast: false });
  // };

  return (
    <>
      <h1>{main && name + ", " + sys.country}</h1>
      <h1>{main && main.temp + "˚"}</h1>
      <h2>
        {main && "min: " + main.temp_min + "˚   max: " + main.temp_max + "˚"}
      </h2>
      <h2 className="pic">{weather && ref[weather[0].main]}</h2>
      <h2>{weather && weather[0].description}</h2>
      {/* <button onClick={handleClick}>5 days</button> */}
    </>
  );
};

export default OneDay;
