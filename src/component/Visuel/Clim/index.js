import {ReactComponent as ClimCool} from '../../../waves_cool.svg';
import {ReactComponent as ClimHot} from '../../../waves_hot.svg';
import {ReactComponent as ClimNormal} from '../../../waves_normal.svg';
const Clim = (props) => {

  const status = props.status_clim_block;

  return(
    <div className="clim_container">
      { 
          status === 'cool' ? <ClimCool className='clim' /> 
        : status === 'hot'  ? <ClimHot  className='clim' />
        : status === 'normal'  ? <ClimNormal  className='clim' />
        : ''
      }  
    </div>
  )
}
export default Clim;