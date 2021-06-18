import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import User from './pages/user.jsx';
import Hobby from './pages/hobby.jsx';
import Home from './pages/home.jsx';
import UserDetails from './pages/userDetails.jsx'
import Header from './components/header.jsx'


export default class App extends Component {


  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/users' component={User} />
          <Route path='/demographic' component={Hobby} />
          <Route path='/userdetails/:username' component={UserDetails} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}