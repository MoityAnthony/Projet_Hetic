import { ReactComponent as Room } from '../../room.svg';
import Light from '../Light';
import Chair from './Chair';
import InfraRouge from './InfraRouge';
import Clim from './Clim';
const Visuel = (props) => {

  const status_light = [
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    true,
  ]

  return(
    <div className="container_visuel">
      <div className="container_room">
        {props.image}
        <Chair />
        <Light status={status_light} status_light_block={props.status_light_block}/>
        <InfraRouge status_infra_rouge={props.status_infra_rouge} />
        <Clim status_clim={props.status_clim}></Clim>
      </div>
    </div>
  )
  
}
export default Visuel;