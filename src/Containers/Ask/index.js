import React, { Component } from 'react';
import * as actions from '../../Actions/index';
import List from '../../Components/List';
import './index.css';

class Ask extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    let propsParam = this.props,
        path = this.props.params.location.pathname;
    actions.getData(path,propsParam);
  }
  render() {
    let ListData = this.props ? this.props.ask.ask : '';
    return (
       <div>
           <p className="App-intro">
                To get started, edit <code>Ask/index.js</code> and save to reload.

            </p>
            <List params={ListData}></List>
       </div>    
    );
  }
}

export default Ask;
