import { ReactComponent as ThermImage } from '../../therm_image.svg';


const ThermBlock = () => {
  return(
    <div className="therm_block">
      <ThermImage className="therm_image"/>
      <div className="block_container">
        <h2>Régulateur de température automatique</h2>
        <p>Le régulateur de température automatique laissera votre pièce à température ambiante quelque soit la période de l’année.</p>
      </div>
    </div>
  )
}
export default ThermBlock;