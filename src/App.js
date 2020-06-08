import React, { Component} from 'react';
import Navbar from './navbar'
import Video from './video'
import EmailMe from './emailme'

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Video />
                <EmailMe />
            </div>
        )
    }
}