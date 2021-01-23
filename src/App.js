import React, { Component } from 'react'

// scss
import './App.scss'

// components
import Header from './components/Header'
import Main from './components/Main'
import TrailWatchScreen from './components/TrailWatchScreen'

export default class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isTrailWatchScreen : false
        }
    }
    

    showTrailWatchScreen = () => {
        this.setState({
            isTrailWatchScreen : true
        })
    }

    hideTrailWatchScreen = () => {
        this.setState({
            isTrailWatchScreen : false
        })
    }

    render() {
        return (
            <>
                <div id="bg-black" ></div>

                <Header /> 

                <Main show={this.showTrailWatchScreen}/>

                { this.state.isTrailWatchScreen ? <TrailWatchScreen hide={this.hideTrailWatchScreen} /> : null }
            </>
        )
    }
}
