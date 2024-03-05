import React,{useState} from 'react'
import CompForm from './component/CompForm';
import CompWeather from './component/CompWeather';

const API_KEY = "8e6e418f4d8804a0a133a0ec01bf3f80"
function App() {
  const [state,setState] = useState({
    temp:"",
    city:'',
    country:"",
    humidity:"",
    discreption:"",
    error:''
  });
  const getWeather = async(e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const cuntery = e.target.elements.cuntery.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${cuntery}&appid=${API_KEY}`)
    const data = await api.json()
console.log(data)
    if(city && cuntery){
      setState({
        temp:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        discreption:data.weather[0].description,
        error:''
      })
    }else{
      setState({
        temp:"",
        city:"",
        country:"",
        humidity:"",
        discreption:"",
        error:'please Enter city and countery'
      })
    }
  }
  return (
    <div className="App">
      <CompForm getWeather={getWeather} />
      <CompWeather data={state}/>
    </div>
  );
}

export default App;
