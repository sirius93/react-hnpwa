import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './index.css';

class Navbar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let pageNumber = this.props.params.location.pathname.split('/')[2];
    return (
      <div className="Nav-container">
        <div className="container">
          <ul className="Navbar left">
            <li className="Nav-items"><Link to="/newest/1">Newest</Link></li>
            <li className="Nav-items"><Link to="/news/1">News</Link></li>
            <li className="Nav-items"><Link to="/show/1">Show</Link></li>
            <li className="Nav-items"><Link to="/ask/1">Ask</Link></li>
            <li className="Nav-items"><Link to="/jobs/1">Jobs</Link></li>
          </ul>
          <ul className="Navbar right">
            <li className="Page-number"><span className="static-text">Page</span><span className="number">{pageNumber}</span></li>
          </ul>  
        </div>
      </div>
    );
  }
}

export default Navbar;
