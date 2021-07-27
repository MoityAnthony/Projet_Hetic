import { ReactComponent as Light_Image_Off } from "../../light_off.svg";

const Light = (props) => {

  const status = props.status;
  const status_light_block = props.status_light_block;
  const intensity = props.intensity;
  
  const light = [];

  
  for( const [index, value] of status.entries() ){
    if(value === true){
      light.push(
        <svg width="106" height="104" viewBox="0 0 86 84" fill="none" xmlns="http://www.w3.org/2000/svg" key={index} className={'light_'+index+''}>
          <rect x="41" width="3" height="32" rx="1.5" fill="#414141"/>
          <path d="M43 32L80.2391 71H5.76091L43 32Z" fill="url(#paint0_radial)" fill-opacity={intensity}/>
          <path d="M39.7966 29.4789C41.326 28.0765 43.674 28.0765 45.2034 29.4789L57.0063 40.3018C59.6948 42.7671 57.9506 47.25 54.3029 47.25H30.6971C27.0494 47.25 25.3052 42.7671 27.9937 40.3018L39.7966 29.4789Z" fill="#63C96B"/>
          <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(43 34.5) rotate(90) scale(34 56.2308)">
          <stop stop-color="#FFE768"/>
          <stop offset="1" stop-color="#FDED9C" stop-opacity="0"/>
          </radialGradient>
          </defs>
        </svg>
        );
    }
    else{
      light.push(<Light_Image_Off key={index} className={'light_'+index+''}/>);
    }
  }



    
  return (
    <div className={status_light_block}>
      {light}
    </div>
  )
}
export default Light;