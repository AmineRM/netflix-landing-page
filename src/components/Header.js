import React, { Component } from 'react'

import styles from './Header.module.scss'

import neflixLogo from '../img/netflixLogo.png'

export default class Header extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            meunuList : [ "Home", "TvShows", "Movies", "Latest", "MyList" ]
        }
    }
    

    render() {
        return (
            <header>
                <span className={styles.netflixLogo} >
                    <img src={neflixLogo} alt="netflix logo" />
                </span>
                <nav className={styles.meunu}>
                    <ul>{this.state.meunuList.map( (ele, i) => <li key={i} >{ele}</li> )}</ul>
                </nav>
                <span className={styles.searchBar}>
                    <i className='fa fa-search'></i>
                    <form><input type="text" placeholder="Search" /></form>
                </span>
            </header>
        )
    }
}