import { ReactComponent as LightDesign } from "../../ampoule.svg";
import { ReactComponent as Rectangle } from "../../Rectangle.svg";

const LightBlock = () => {
  return (
    <div className="light_block" id='light_block'>
      <div className="title_light_block">
        <h2>Profitez d’un système d’éclairage automatisé</h2>
        <p>
          Vos ampoules s’adaptent et peuvent changer d’intensité en fonction de la luminosité de la pièce et de l’emplacement des personnes dans celle-ci.
        </p>
      </div>
      <LightDesign />
    </div>
  );
};
export default LightBlock;
