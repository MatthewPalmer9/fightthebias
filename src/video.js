import React, { Component } from 'react';

export default class Video extends Component {
    render() {
        return (
            <div className="iframe-container">
                <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/rBWImda1Zig" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
}