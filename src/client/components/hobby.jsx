import React, { Component } from 'react'

export default class hobby extends Component {
    render() {
        return (
            <div>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        )
    }
}
