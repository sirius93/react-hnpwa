import React, { Component } from 'react';
import  Apis  from '../../Configs/Apis.json';
import { ajax } from '../../Utils'
import './index.css';

class Newest extends Component {
  constructor(props){
      super(props)
  }
  render() {

    let id = this.props ? this.props.match.params.id : 0;
    
    ajax(`${Apis.HN_BASE_API}newest/${id}.json`).
    then(data => console.log(data));

    return ( 
       <div>
        <p className="App-intro">
          To get started, edit <code>Newest/index.js</code> and save to reload.
          {id}
        </p>
       </div>   
    );
  }
}
export default Newest;
