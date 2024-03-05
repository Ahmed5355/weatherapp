
import React from 'react'

function CompWeather(props) {
    const {temp,city,country,humidity,discreption,error} = props.data
  return (
    <div className="App">
     
      {temp && <p>Temp : {temp}</p>}
      {city && <p>Temp : {city}</p>}
      {country && <p>Temp : {country}</p>}
      {humidity && <p>Temp : {humidity}</p>}
      {discreption && <p>Temp : {discreption}</p>}
      {error && <p>Temp : {error}</p>}

    </div>
  );
}

export default CompWeather;