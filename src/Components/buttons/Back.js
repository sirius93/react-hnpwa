import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './index.css';

class Back extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () =>{
    this.props.params.history.goBack();
  }
  render() {
    return (
        <div className="Button-container Back" onClick={this.handleClick}>
            <div className="Button Back">
                Go back
            </div>
        </div>
    );
  }
}

export default Back;