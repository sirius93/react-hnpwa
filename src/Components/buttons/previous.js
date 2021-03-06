import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as actions from '../../Actions/index';
import './index.css';

class Previous extends Component {
  constructor(props){
    super(props)
    this.HandleClick = this.HandleClick.bind(this)
  }
  HandleClick(){
    let propsParam = this.props,
        Previd = parseInt(propsParam.params.location.pathname.split('/')[2]) - 1,
        pathname = propsParam.params.location.pathname.split('/')[1],
        PrevUrl =  `/${pathname}/${Previd}`;
    propsParam.params.history.push(PrevUrl);
    actions.getData(PrevUrl,propsParam);
  }
 
  render() {
    let PrevPage = parseInt(this.props.params.location.pathname.split('/')[2]) - 1;
    if(PrevPage !== 0){
      return (
        <div className="Fixed-button-container Previous" onClick={this.HandleClick}>
          <div className="Button Previous">
            &#10094;
          </div>
        </div> 
      );
    }else{
      return ('')
    }
  }
}

export default Previous;