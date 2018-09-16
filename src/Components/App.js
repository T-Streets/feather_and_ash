import React, { Component } from 'react';
import Nav from './Nav';
import Landing from './Landing';
import About from './About';

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            navBarVisible: false,
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll)
    }
    
    handleScroll = () => {
        const currentYposition = window.pageYOffset || document.documentElement.scrollTop

        currentYposition >= 40 ?
            this.setState({ navBarVisible: true })
            :
            this.setState({ navBarVisible:false })
    }

    render() {
        return(
            <div>
                {this.state.navBarVisible ? <Nav /> : null}
                
                <Landing />
                <About />
            </div>
        )
    }
}