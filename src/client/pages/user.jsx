import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {nanoid} from 'nanoid';
import { getUsers } from '../APIs/userAPIs';

export default class User extends Component {

    state = {
        users: [],
    }

    componentDidMount () {
        getUsers().then(data => this.setState({users:data}))
    }

    render() {
        const {users} = this.state
        return (
            <div className="mycontainer">
                <h2 style={{textAlign: 'center'}}>All Users</h2>
                <h5 style={{textAlign: 'center'}}>username and userage</h5>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">User Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (
                                <tr key={nanoid()}>
                                    <td><Link to={`/userdetails/${user.username}`} style={{textDecoration: 'none', color: "black"}}>{user.username}</Link></td>
                                    <td>{user.age}</td>
                                </tr>
                            )
                        })}
 
                    </tbody>
                </table>
            </div>
        )
    }
}
