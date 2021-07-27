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
function App() {

  const [humidity, setHumidity] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://influxdb-web3-groupe2.herokuapp.com/humidity", {mode: 'no-cors'})
      .then(res => res.json())
      .then(
        (result) => {
          setHumidity(result._value);
          console.log('test');
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setError(error);
        }
      )
  }, [])

  return (
    <div className="App">
      <Slider />
      <LightBlock />
      <EnergyBlock />
      <InfraBlock />
    </div>
  );
}

export default App;
