import {ReactComponent as EnergyImage } from '../../energy.svg'

const EnergyBlock = () => {
  return(
    <div className="energy_block">
      <EnergyImage className="energy_image"/>
      <h2>Faites des économies d’energie grace au controle d’intensité</h2>
    </div>
  )
}
export default EnergyBlock;