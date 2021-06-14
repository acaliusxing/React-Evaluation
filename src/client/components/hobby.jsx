import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import { getListOfAge} from '.././userAPIs';
import HobbyTable from './hobbyTable.jsx'

export default class hobby extends Component {

    state = {
        hobbyCount: []
    }

    handleSelect = (event) => {
        const hobby = event.target.value;
        // getListOfAge(hobby).then(data => console.log(data))
        getListOfAge(hobby).then(data => this.setState({hobbyCount:data}))
    }

    render() {
        const {hobbies} = this.props;
        const {hobbyCount} = this.state
        return (
            <div>
                <h1>Age Demographic of Users with Hobby</h1>
                <select className="form-select" aria-label="Default select example" onChange={this.handleSelect}>
                    <option defaultValue>Hobby</option>
                    {hobbies.map(hobby => (
                        <option key={nanoid()}>{hobby}</option>
                    ))
                    }
                </select>
                <HobbyTable hobbyCount={hobbyCount}/>
            </div>
        )
    }
}
