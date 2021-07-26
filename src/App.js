import './App.css';
import { ReactComponent as Logo }  from './logo.svg';
import { ReactComponent as SliderIcon }  from './slider_icon.svg';
import Visuel from './component/Visuel/index.js';
import Controleur from './component/controller/index.js';
import { ReactComponent as ScrollIcon }  from './scroll_icon.svg';
import Title from './component/Title/index';
import LightBlock from './component/LightBlock';

function App() {
  return (
    <div className="App">
      <Logo className="logo"/>
      <div className="flex_container">
        <Visuel/>
        <Title />
        <Controleur />
        <SliderIcon className="slider_icon"/>
      </div>
      <ScrollIcon className="scroll_icon"/>
      <LightBlock />
    </div>
  );
}

export default App;
