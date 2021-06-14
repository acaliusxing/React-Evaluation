import React, { Component } from 'react';
import {nanoid} from "nanoid"

export default class hobbyTable extends Component {
    
    render() {
        const {hobbyCount} = this.props
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Age</th>
                            <th scope="col">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hobbyCount.map(hobby => {
                            return (
                                <tr key={nanoid()}>
                                    <td>{hobby.age}</td>
                                    <td>{hobby.count}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
