import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {nanoid} from 'nanoid';
import { getUsers } from '../APIs/userAPIs';

export default class User extends Component {

    state = {
        users: [],
        isLoading: true
    }

    componentDidMount () {
        getUsers().then(data => this.setState({users:data, isLoading:false}))
    }

    render() {
        const {users, isLoading} = this.state

        return (
            <div className="mycontainer"> 
                <h2 style={{textAlign: 'center'}}>All Users</h2>
                <h5 style={{textAlign: 'center'}}>username and userage</h5>
                {isLoading? (<h3>is loading....</h3> ) : (
                    <table className="table" >
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
                )}

            </div>
        )
    }
}
