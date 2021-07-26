import { ReactComponent as Room } from '../../room.svg';
import Light from '../Light';
import Chair from './Chair';

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
      </div>
    </div>
  )
  
}
export default Visuel;