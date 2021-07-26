import {ReactComponent as LightDesign} from '../../ampoule.svg';
import {ReactComponent as Rectangle} from '../../Rectangle.svg';

const LightBlock = () => {
  return(
    <div className="lightblock">
      <div className="title_lightblock">
        <h2>Profitez d’un système <br /> d’éclairage automatisé</h2>
      </div>
      <LightDesign className="lightdesign"/>
    </div>
  )
}
export default LightBlock;