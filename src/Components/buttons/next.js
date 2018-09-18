import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import * as actions from '../../Actions/index';

class Next extends Component {
  constructor(props){
    super(props)
    this.HandleClick = this.HandleClick.bind(this);
  }
  HandleClick(){
    let propsParam = this.props,
        Nextid = parseInt(propsParam.params.location.pathname.split('/')[3]) + 1,
        pathname = propsParam.params.location.pathname.split('/')[2],
        NextUrl =  `/react-hnpwa/${pathname}/${Nextid}`;
    propsParam.params.history.push(NextUrl);
    actions.getData(NextUrl,propsParam);
  }
  
  render() {
    return (
        <div className="Fixed-button-container Next" onClick={this.HandleClick}>
            <div className="Button Next">
                &gt;
            </div>
        </div>
    );
  }
}

export default Next;