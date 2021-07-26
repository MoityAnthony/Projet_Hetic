import { ReactComponent as Room } from '../../room.svg';
import Light from '../Light';
import Chair from './Chair';

const Visuel = () => {

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
        <Room className="room"/>
        <Chair />
        <Light status={status_light}/>
      </div>
    </div>
  )
  
}
export default Visuel;