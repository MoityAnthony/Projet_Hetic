import { ReactComponent as InfraRougeImage } from '../../../infra_rouge_img.svg'
import {useEffect, useState} from 'react';
const InfraRouge = (props) => {

  const status = props.status_infra_rouge;


  return(
    <div className={status}>
      <InfraRougeImage className='infra_rouge_image'/>
    </div>
  )
}
export default InfraRouge;