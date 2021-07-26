import {ReactComponent as LightDesign} from '../../ampoule.svg';
import {ReactComponent as Rectangle} from '../../Rectangle.svg';

const LightBlock = () => {
  return(
    <div className="light_block">
      <div className="title_light_block">
        <h2>Profitez d’un système d’éclairage automatisé</h2>
      </div>
      <LightDesign/>
    </div>
  )
}
export default LightBlock;