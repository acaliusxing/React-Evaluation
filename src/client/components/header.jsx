import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Hobby Finder</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-link" to='/users'>Users</NavLink>
                                <NavLink className="nav-link" to="/demographic">Demographic</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
