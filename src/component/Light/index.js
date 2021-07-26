import { ReactComponent as Light_Image_On } from "../../light.svg";
import { ReactComponent as Light_Image_Off } from "../../light_off.svg";

const Light = (props) => {

  const status = props.status;
  
  const light = [];
  
  for( const [index, value] of status.entries() ){
    if(value === true){
      light.push(<Light_Image_On key={index} className={'light_'+index+''}/>);
    }
    else{
      light.push(<Light_Image_Off key={index} className={'light_'+index+''}/>);
    }
  }
    
  return (
    <div>
      {light}
    </div>
  )
}
export default Light;