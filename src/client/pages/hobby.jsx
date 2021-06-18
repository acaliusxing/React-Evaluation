import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import {nanoid} from 'nanoid';
import { getHobbies, getListOfAge} from '../APIs/userAPIs';
import HobbyTable from '../components/hobbyTable.jsx'

export default class Hobby extends Component {

    state = {
        hobbies: [],
        hobbyDemographic: [],
        selectHobby: null
    }

    componentDidMount () {
        getHobbies().then(data => this.setState({hobbies:data}))
    }

    handleSelect = (event) => {
        const hobby = event.target.value;
        this.setState({selectHobby: hobby});
        getListOfAge(hobby).then(data => this.setState({hobbyDemographic:data}))
    }

    render() {
        const {hobbies, hobbyDemographic, selectHobby} = this.state;
        return (
            <div className="mycontainer">
                <h2 style={{textAlign: 'center'}}>Age Demographic of Users with Hobby</h2>
                <select className="form-select" aria-label="Default select example" onChange={this.handleSelect} value={selectHobby}>
                    <option >Hobby</option>
                    {hobbies.map(hobby => (
                        <option key={nanoid()} >{hobby}</option>
                    ))
                    }
                </select>
                <HobbyTable hobbyDemographic={hobbyDemographic}/>
            </div>
        )
    }
}

