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

function App() {
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
