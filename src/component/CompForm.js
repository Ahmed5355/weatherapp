import React from 'react'

function CompForm(props) {
  return (
    <div className="App">
        <form onSubmit={props.getWeather}>
            <input type='text' name='city' placeholder='City...' />
            <input type='text' name='cuntery' placeholder='Cuntery...' />
            <button>Get Weather</button>
        </form>
    </div>
  );
}

export default CompForm;