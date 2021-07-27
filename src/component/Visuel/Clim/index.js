import {ReactComponent as ClimCool} from '../../../waves_cool.svg';
import {ReactComponent as ClimHot} from '../../../waves_hot.svg';
const Clim = (props) => {

  const status = props.status_clim_block;

  return(
    <div className="clim_container">
      { 
          status === 'cool' ? <ClimCool className='clim' /> 
        : status === 'hot'  ? <ClimHot  className='clim' />
        :                     ''
      }  
    </div>
  )
}
export default Clim;