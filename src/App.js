import React, { Component,Fragment } from 'react';
import logo from './logo.svg';
import routes from './Routes/index';
import { BrowserRouter, Route, Switch, Redirect, Link, } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./Actions";
import Newest from './Containers/Newest';
import News from './Containers/News';
import Jobs from './Containers/Jobs';
import Ask from './Containers/Ask';
import Show from './Containers/Show';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Previous from './Components/buttons/previous';
import Next from './Components/buttons/next';
import Back from './Components/buttons/Back';

import './App.css';


class Main extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            render={props => (
              <Fragment>
                <Header exact params={props}/>
                <Navbar exact params={props}/>
                {/* <Back exact params={props}/> */}
                <Previous exact params={props} {...this.props}/>
                <Next exact params={props} {...this.props}/>
              </Fragment>
            )}
          />
          <div className="container">
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
              <Route
                exact
                path="/ask/:id"
                render={props => (
                  <Ask params={props} {...this.props} />
                )}
              />
              <Route
                exact
                path="/show/:id"
                render={props => (
                  <Show params={props} {...this.props} />
                )}
              />
              <Route
                exact
                path="/jobs/:id"
                render={props => (
                  <Jobs params={props} {...this.props} />
                )}
              />
              <Redirect path="**"  to="/news/1"/>
            </Switch> 
          </div>
        </div>
      </BrowserRouter>    
    );
  }
}
function mapStateToProps(store) {
  return {
    newest : store.Newest,
    news : store.News,
    show : store.Show,
    ask : store.Ask,
    jobs : store.Jobs
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps)(Main);
export default App;
