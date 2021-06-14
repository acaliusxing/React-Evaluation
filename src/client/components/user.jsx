import React, { Component } from 'react';
import {nanoid} from 'nanoid'

export default class User extends Component {
    render() {
        const {users} = this.props
        return (
            <div>
                <h1>All Users</h1>
                <h4>username and userage</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Userage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (
                                <tr >
                                    <td>{user.username}</td>
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
