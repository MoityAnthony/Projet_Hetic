// import ReactNipple from 'react-nipple';
 
// // optional: include the stylesheet somewhere in your app
// import 'react-nipple/lib/styles.css';

// const Controleur = () => {
//   const data_dir = [];
  
//   const Joystick = () => {
    
//     return(
//       <ReactNipple
//           options={{ mode: 'static', position: { top: '50%', left: '50%' } }}
//           style={{
//               width: 150,
//               height: 150
//           }}
//           onMove={(evt, data) => data_dir.push(data.direction)}
//       />
//     )
//   }


//   const GetData_dir = () => {
//     console.log(data_dir);
//     console.log(data_dir.length - 1)
//     return(
//       <div>{data_dir.map((data, i) =>
//         <div key={i}>{data}</div>
//       )}</div>
//     )
//   }
  
//   return(
//     <div className="controller">
//       <Joystick />
//       <GetData_dir />
//       {data_dir[data_dir.length - 1]}
//     </div>
//   )
// }
// export default Controleur;
import React from 'react';
import ReactNipple from 'react-nipple';
import DebugView from 'react-nipple/lib/DebugView';
import PositionJoystick from './Position/index';


export default class Controller extends React.Component {
    state = {
        data: {},
    };

    handleEvent = (evt, data) => {
        this.setState({
          data: data,
        });
    };

    render() {
        return (
            <div className={(this.props.status) + " controller"}>
                <h3>Controler l'éclairage avec ce joystick :</h3>
                <ReactNipple
                    options={{ mode: 'static', position: { top: '50%', left: '50%' } }}
                    style={{
                        width: 150,
                        height: 150,
                        position: 'relative'
                    }}
                    onStart={this.handleEvent}
                    onEnd={this.handleEvent}
                    onMove={this.handleEvent}
                    onDir={this.handleEvent}
                    onPlain={this.handleEvent}
                    onShown={this.handleEvent}
                    onHidden={this.handleEvent}
                    onPressure={this.handleEvent}
                />
                {/* <DebugView data={this.state.data} /> */}
                <PositionJoystick data={this.state.data}/>
            </div>
        );
    }
}
