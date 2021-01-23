import React, { Component } from 'react'

import styles from './Main.module.scss'

import mulanLogo from '../img/mulanLogo.png'

export default class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            MovieInfo : [ "2020", "12+", "1h 55min", "Action" ],
            MovieText : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    }
    
    render() {
        return (
            <main>

                <div className={styles.MovieInfo} >
                    <img src={mulanLogo} alt="Mulan logo" />
                    <section className={styles.info}>
                        <ul>{this.state.MovieInfo.map(
                            (ele, i) => <li key={i}><span>{ele}</span></li> )}</ul>
                    </section>
                    <p className={styles.text} >{this.state.MovieText}</p>
                </div>

                <button className={styles.playBtn}>
                    <i className='fa fa-play'></i>
                    <span> PLAY</span>
                </button>

                <button className={styles.addBtn}>
                    <i className='fa fa-plus'></i>
                    <span> MY LIST</span>
                </button>

                <div className={styles.watchTrialer} 
                    onClick={this.props.show}>
                    <i className='fa fa-play-circle'></i>
                    <span>WATCH TRIALER</span>
                </div>

            </main>
        )
    }
}
