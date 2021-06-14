import React, { Component } from 'react';
import { getUsers, getHobbies, getListOfAge} from './userAPIs';
import User from './components/user.jsx';
import Hobby from './components/hobby.jsx'


export default class App extends Component {
  state = {
    users: [],
    hobbies: []
  }

  componentDidMount () {
    // getUsers().then(data => console.log(data))
    getUsers().then(data => this.setState({users:data}))
  }

  render() {
    const {users} = this.state
    return (
      <div className="container">
        <User users={users}/>
        <Hobby />
      </div>
    );
  }
}