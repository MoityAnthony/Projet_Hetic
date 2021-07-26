import React, {Component} from 'react';

export default class History extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let current = this.props.current;
    let section = this.props.section.map( (el, index) => {
      let name = (index == current) ? 'active' : '';
      return (
        <li key={index}>
          <button 
            className={name} 
            onClick={ () => this.props.changeSilde(current, index) }
          ></button>
        </li>
      )
    });
    
    return (
      <ul>{section}</ul>
    )
  }
}