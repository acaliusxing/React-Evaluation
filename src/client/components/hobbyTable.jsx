import React, { Component } from 'react';
import {nanoid} from "nanoid"

export default class HobbyTable extends Component {
    
    render() {
        const {hobbyDemographic, isLoading} = this.props
        return (
            <>
                {isLoading ? (<h3>is loading...</h3>) :
                hobbyDemographic.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Age</th>
                            <th scope="col">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hobbyDemographic.map(hobby => {
                            return (
                                <tr key={nanoid()}>
                                    <td>{hobby.age}</td>
                                    <td>{hobby.count}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> ) : null }
            </>
        )
    }
}
