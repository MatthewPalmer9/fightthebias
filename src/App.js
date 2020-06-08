import React, { Component} from 'react';
import Navbar from './navbar'
import Video from './video'

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Video />
            </div>
        )
    }
}