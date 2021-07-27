import { ReactComponent as EnergyImage } from "../../energy.svg";

const EnergyBlock = () => {
  return (
    <div className="energy_block">
      <EnergyImage className="energy_image" />
      <div className="container_block">
        <h2>Faites des économies d’energie grace au controle d’intensité</h2>
        <p>
          Les changemements apportés par le contrôle de la luminosité réduit
          fortement vos coûts énergetiques
        </p>
      </div>
    </div>
  );
};
export default EnergyBlock;
