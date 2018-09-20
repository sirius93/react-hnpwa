import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HeaderImg1 from '../../Assets/Images/mask-white.png';
import HeaderImg2 from '../../Assets/Images/mask-inverted.png';
import './index.css';

class Header extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <div className="Header-container">
            <div className="container">
                <header className="Header">
                    <div className="Header-logo">
                        <a href="./">
                            <img width="100%" src = {HeaderImg1} alt="Header-logo"/>
                        </a>
                    </div>
                    <h3>Hacker News <span>Powered By React</span></h3>
                </header>
            </div>
        </div>
    );
  }
}

export default Header;