import './App.css';
import { ReactComponent as Logo }  from './logo.svg';
import { ReactComponent as SliderIcon }  from './slider_icon.svg';
import Visuel from './component/Visuel/index.js';
import Controleur from './component/controller/index.js';
import { ReactComponent as ScrollIcon }  from './scroll_icon.svg';
import Title from './component/Title/index';
import LightBlock from './component/LightBlock';
import EnergyBlock from './component/EnergyBlock';
import Slider from './component/Slider';
import {ReactComponent as Room} from './room.svg';
import InfraBlock from './component/InfraBlock';
import {useEffect, useState} from 'react';
import Mail from './component/Mail';
import ThermBlock from './component/ThermBlock';
function App() {

  const [humidity, setHumidity] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [luminosity, setLuminosity] = useState([]);
  const [intensity, setIntensity] = useState('');
  const [clim, setClim] = useState('');

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8010/proxy/temperature', { 
        method: "GET", 
        mode: 'cors', 
        headers: { "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
        "Access-Control-Allow-Headers": "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method",
        "Access-Control-Allow-Credentials": true,}})
    .then(response => response.json())
    .then(
      (result) => {
        let datasets = result;
      let dataset = datasets[0];
      let data = dataset.records[0];
        setTemperature(data.values._value);
      }
    )
    fetch('http://localhost:8010/proxy/humidity', { 
        method: "GET", 
        mode: 'cors', 
        headers: { "Access-Control-Allow-Origin": "",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
        "Access-Control-Allow-Headers": "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method",
        "Access-Control-Allow-Credentials": true,}})
    .then(response => response.json())
    .then(
      (result) => {
        let datasets = result;
      let dataset = datasets[0];
      let data = dataset.records[0];
        setHumidity(data.values._value);
        if(temperature < 20 && (humidity < 50 || humidity > 50)){
          setClim('hot');
        }
        else if(temperature > 20 && (humidity < 50 || humidity > 50)){
          setClim('cool');
        }
        else if(temperature === 20 && (humidity < 50 || humidity > 50)){
          setClim('normal');
        }
        else if(temperature < 20 && humidity < 50){
          setClim('normal');
        }
        else if(temperature > 20 && humidity < 50){
          setClim('normal');
        }
        // else if(temperature === 20.81 ){
        //   setClim('cool');
        // }
        // else if(temperature === 20 && humidity === 50){
        //   setClim('cool');
        // }
      }
    )
    fetch('http://localhost:8010/proxy/brightness', { 
        method: "GET", 
        mode: 'cors', 
        headers: { "Access-Control-Allow-Origin": "",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
        "Access-Control-Allow-Headers": "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method",
        "Access-Control-Allow-Credentials": true,}})
    .then(response => response.json())
    .then(
      (result) => {
        let datasets = result;
        let dataset = datasets[0];
        let data = dataset.records[0];
        setLuminosity(data.values._value);
        setIntensity(100 - luminosity / 100);
      }
    )
  }, [])


  return (
    <div className="App">
      <Slider intensity={intensity} clim={clim}/>
      <div className="container_bg">
        <LightBlock />
        <EnergyBlock />
        <InfraBlock />
        <ThermBlock />
      </div>
      <Mail />
    </div>
  );
}

export default App;
