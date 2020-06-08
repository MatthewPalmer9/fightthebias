import React, { Component} from 'react';

export default class Navbar extends Component {
    render() {
        return(
            <div className="main">
                <ul className="nav-list">
                    <div className="brand">
                        Fight The Bias
                    </div>

                    <li className="sub-brand">#BlackLivesMatter</li>
                </ul>
            </div>
        )
    }
}