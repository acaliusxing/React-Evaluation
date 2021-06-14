import React, { Component } from 'react';
import { getUsers, getHobbies } from './userAPIs';
import User from './components/user.jsx';
import Hobby from './components/hobby.jsx'


export default class App extends Component {
  state = {
    users: [],
    hobbies: []
  }

  componentDidMount () {
    getUsers().then(data => this.setState({users:data}))
    getHobbies().then(data => this.setState({hobbies:data}))
  }

  render() {
    const {users, hobbies} = this.state
    return (
      <div className="container">
        <User users={users}/>
        <br/>
        <Hobby hobbies={hobbies}/>
      </div>
    );
  }
}