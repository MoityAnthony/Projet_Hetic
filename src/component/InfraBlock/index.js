import { ReactComponent as InfraImage } from '../../infra_rouge.svg';

const InfraBlock = () => {
  return(
    <div className="infra_block">
      <h2>A l’aide du capteur infrarouge,<br /> minimisé le temps d’allumage de la pièce</h2>
      <InfraImage className="infra_image" />
    </div>
  )
}
export default InfraBlock;