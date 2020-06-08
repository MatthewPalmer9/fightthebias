import React, { Component} from 'react';

export default class Navbar extends Component {
    render() {
        return(
            <navbar className="main">
                <ul className="nav-list">
                    <li className="brand">
                        Fight The Bias
                    </li>
                    <li className="list-item">
                        <a href="/home">Home</a>
                    </li>
                    <li className="list-item">
                        <a href="/faq">FAQ</a>
                    </li>

                    <li className="sub-brand"># BlackLivesMatter</li>
                </ul>
            </navbar>
        )
    }
}