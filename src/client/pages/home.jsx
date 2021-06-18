import React, { Component } from 'react';

import User from './user.jsx';
import Hobby from './hobby.jsx';

export default class Home extends Component {
    render() {
        return (
            <>
                <User />
                <br/>
                <Hobby />
            </>
        )
    }
}
