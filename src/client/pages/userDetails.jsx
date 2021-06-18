import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import { getHobbiesByUsername } from '../APIs/userAPIs';

export default class UserDetails extends Component {

    state = {
        hobbies: [],
    }

    componentDidMount () {
        getHobbiesByUsername(this.props.match.params.username).then(data => this.setState({hobbies:data}))
    }

    render() {
        const {username} = this.props.match.params
        const {hobbies} = this.state
        return (
            <div className="mycontainer">
                <h3 style={{textAlign: 'center'}}>User Details</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">{username}'s Hobbies</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hobbies.map(hobby => {
                            return (
                                <tr key={nanoid()}>
                                    <td>{hobby}</td>
                                </tr>
                            )
                        })}
 
                    </tbody>
                </table>
            </div>
        )
    }
}
