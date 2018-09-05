import React, { Component } from 'react';
import logo from './logo.svg';
import routes from './Routes/index';
import { BrowserRouter, Route, Switch, Redirect, Link, } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./Actions";
import Newest from './Containers/Newest';
import News from './Containers/News';

import './App.css';


class Main extends Component {
  constructor(props){
    super(props)
  }
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
          <BrowserRouter>
          <Switch>
            <Route exact
              path="/newest/:id"
              render={props => (
                <Newest params={props} {...this.props} />
              )}
            />

            <Route
              exact
              path="/news/:id"
              render={props => (
                <News params={props} {...this.props} />
              )}
            />
          </Switch>
        </BrowserRouter>  

          {/* <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
        </div>
      </BrowserRouter>
    );
  }
}
function mapStateToProps(store) {
  return {
    Newest : store.response
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps)(Main);
export default App;
