import React, { Component } from 'react';
import * as actions from '../../Actions/index';
import List from '../../Components/List';
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
    let ListData = this.props ? this.props.newest.newest : '';
    return ( 
       <div>
          <List params={ListData}></List>
       </div>   
    );
  }
}
export default Newest;
