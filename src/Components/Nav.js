import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return(
            <header>
            <nav className="bar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li className="active">
                            <Link to='/'>
                                <h3 className="">Home</h3>
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}