import React, { Component } from 'react';
import logo from './logo.svg';
import routes from './Routes/index';

import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom'
import './App.css';
import Newest from './Containers/Newest';
import News from './Containers/News';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <ul>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/newest">Newest</Link></li>
          </ul>
          {routes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
            />
          ))}
          {/* <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
