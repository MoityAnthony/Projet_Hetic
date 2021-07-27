import { ReactComponent as EnergyImage } from "../../energy.svg";

const EnergyBlock = () => {
  return (
    <div className="energy_block">
      <EnergyImage className="energy_image" />
      <div className="container_block">
        <h2>Faites des économies d’energie</h2>
        <p>
          Nos dispositifs vous permettent à coup sur de gagner en économie d’energie sur vos factures
        </p>
      </div>
    </div>
  );
};
export default EnergyBlock;
