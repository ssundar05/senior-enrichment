import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper teal accent-1'">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to= "/students" className="waves-effect waves-light btn">Students</Link></li>
                        <li><Link to= "/campuses" className="waves-effect waves-light btn">Campuses</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }

}
