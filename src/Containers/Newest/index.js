import React, { Component } from 'react';
import * as actions from '../../Actions/index';
import './index.css';

class Newest extends Component {
  constructor(props){
      super(props)
  }
  componentDidMount() {
    let propsParam = this.props,
        path = this.props.params.location.pathname;
    actions.getData(path,propsParam);
  }
  render() {
    return ( 
       <div>
        <p className="App-intro">
          To get started, edit <code>Newest/index.js</code> and save to reload.
        </p>
       </div>   
    );
  }
}
export default Newest;
