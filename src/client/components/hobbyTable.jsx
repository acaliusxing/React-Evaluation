import React, { Component } from 'react'

export default class hobbyTable extends Component {
    render() {
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
                        <tr>
                            <td>Age</td>
                            <td>Count</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
