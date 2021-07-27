import { ReactComponent as InfraImage } from '../../infra_rouge.svg';

const InfraBlock = () => {
  return(
    <div className="infra_block">
      <div className="block_container">
        <h2>A l’aide du capteur infrarouge,<br /> minimisé le temps d’allumage de la pièce</h2>
        <p>le capteur infrarouge va permettre de savoir si une personne se trouve toujours dans la pièce, afin d’evité que les lumières ne reste allumer sans raison. <br/><br/> Ou à l’inverse pour qu’elle évite de s’eteindre, tant qu’une personne s’y trouve.</p>
      </div>
      <InfraImage className="infra_image" />
    </div>
  )
}
export default InfraBlock;