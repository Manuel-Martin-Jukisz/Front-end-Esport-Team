import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="banner">
                <div className="">
                    <div className="banner-text">
                        <div className="banner-heading">
                            Welcome to PLUS ULTRA
                        </div>
                        <div className="banner-sub-heading">
                            We are a E-Sport team that have multiples teams.
                        </div>
                        <Link to='about-us'>
                            <button className="btn btn-success">
                                Know more
                            </button>
                        </Link>
                    </div>
                    </div>
                </div>
        )
    }
}