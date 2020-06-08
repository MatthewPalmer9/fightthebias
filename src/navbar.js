import React, { Component} from 'react';

export default class Navbar extends Component {
    render() {
        return(
            <navbar className="main">
                <ul className="nav-list">
                    <li className="brand">
                        Fight The Bias
                    </li>

                    <li className="sub-brand">#BlackLivesMatter</li>
                </ul>
            </navbar>
        )
    }
}