import React, { Component } from 'react';
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import Portfolio from './Portfolio';
import FormContainer from './Contact/FormContainer';
import Footer from './Footer';

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
                <Portfolio />
                <FormContainer />
                <Footer />
            </div>
        )
    }
}