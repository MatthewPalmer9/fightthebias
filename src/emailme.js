import React, { Component } from 'react';

export default class EmailMe extends Component {
    render() {
        return(
            <div className="email-container">
                <p>Hello there!</p> 
                <p>First of all, thank you so much for visiting!</p>

                <p>The goal of Fight The Bias is to bring awareness to passive racial bias.
                All information on this website from any platform including pictures, 
                videos, and articles are factual and backed up by peer review and scientific
                study.</p>
                
                <p>If you have any information to contribute, please email <span>matthewpalmer9@outlook.com</span> with sources so we can help change the world together.</p>
            </div>
        );
    }
}