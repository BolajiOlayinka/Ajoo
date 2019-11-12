import React, { Component } from 'react';
import './Home.css';
import Banner from './Components/Banner';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Banner/>
            </div>
        )
    }
}
