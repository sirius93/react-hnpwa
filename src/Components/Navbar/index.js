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
        <ul className="Nav-container">
            <li className="Nav-items"></li>
            <li className="Nav-items"><Link to="/newest/1">Newest</Link></li>
            <li className="Nav-items"><Link to="/news/1">News</Link></li>
            <li className="Nav-items"><Link to="/show/1">Show</Link></li>
            <li className="Nav-items"><Link to="/ask/1">Ask</Link></li>
            <li className="Nav-items"><Link to="/jobs/1">Jobs</Link></li>
            <li className="Page-number"></li>
            <li className="Page-number"></li>
            <li className="Page-number"><span className="static-text">Page</span><span>{pageNumber}</span></li>
        </ul> 
    );
  }
}

export default Navbar;
