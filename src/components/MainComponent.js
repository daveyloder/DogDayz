import React, { Component } from 'react';
import Header from './HeaderComponent.js';
import Home from './HomeComponent.js';
import Footer from './FooterComponent.js';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
                <Footer />
            </div>
        )
    }
}

export default Main